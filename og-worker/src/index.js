import puppeteer from "@cloudflare/puppeteer";

const CACHE_TTL = 60 * 60 * 24; // 24 hours in seconds
const CACHE_KEY = "nexus-og-image";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Only serve on /og.png
    if (!url.pathname.startsWith("/og.png")) {
      return new Response("Not found", { status: 404 });
    }

    // Check KV cache first
    const cached = await env.OG_CACHE.get(CACHE_KEY, { type: "arrayBuffer" });
    if (cached) {
      return new Response(cached, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=86400",
          "X-Cache": "HIT",
        },
      });
    }

    // Launch browser and screenshot the hero
    let browser;
    try {
      browser = await puppeteer.launch(env.BROWSER);
      const page = await browser.newPage();

      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(env.SITE_URL, {
        waitUntil: "networkidle0",
        timeout: 25000,
      });

      // Wait for hero animations to settle
      await new Promise((r) => setTimeout(r, 2500));

      // Hide the nav bar and Share rail, capture just the hero content
      await page.evaluate(() => {
        const nav = document.querySelector(".site-header");
        const share = document.querySelector(".share-rail");
        if (nav) nav.style.display = "none";
        if (share) share.style.display = "none";
      });

      // Screenshot the hero section at OG dimensions
      const heroEl = await page.$(".hero");
      let imageBuffer;

      if (heroEl) {
        imageBuffer = await heroEl.screenshot({
          type: "png",
          clip: { x: 0, y: 0, width: 1200, height: 630 },
        });
      } else {
        // Fallback: full viewport crop
        imageBuffer = await page.screenshot({
          type: "png",
          clip: { x: 0, y: 0, width: 1200, height: 630 },
        });
      }

      // Store in KV with 24hr TTL
      await env.OG_CACHE.put(CACHE_KEY, imageBuffer, {
        expirationTtl: CACHE_TTL,
      });

      return new Response(imageBuffer, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=86400",
          "X-Cache": "MISS",
        },
      });
    } catch (err) {
      return new Response(`Error generating OG image: ${err.message}`, {
        status: 500,
      });
    } finally {
      if (browser) await browser.close();
    }
  },
};
