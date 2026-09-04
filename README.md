# Nexus EFOS Marketing Website — v1.1.0

Production-ready static marketing site for **https://nexus.ayivisolutions.com/**.

## Contents
- `index.html` — SEO-rich, mobile-first single-page site
- `styles.css` — responsive Nexus EFOS brand system and animation layer
- `app.js` — capability tabs, journeys, institution selector, reveal effects and Web Share API
- `assets/` — Nexus logo, app icons and Open Graph social preview
- `robots.txt` / `sitemap.xml` — crawling and indexing
- `site.webmanifest` — installable web metadata
- `_headers` — Cloudflare Pages security/caching headers
- `_redirects` — canonical root redirect

## Deployment
Deploy the repository as a static site. No build step is required.

### Cloudflare Pages
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Custom domain: `nexus.ayivisolutions.com`

After deployment:
1. Add `nexus.ayivisolutions.com` in Cloudflare Pages custom domains.
2. Verify HTTPS and the canonical URL.
3. Submit `https://nexus.ayivisolutions.com/sitemap.xml` to Google Search Console.
4. Request indexing for the homepage.
5. Test Open Graph rendering on Facebook/LinkedIn/X debuggers.

## GitHub repository
Target repository: `nexus-home`.


## Versioning rule
Every deployable ZIP package must carry an explicit semantic version in its filename. This release is `v1.1.0` and adds contextual Ghanaian scene slideshows across field operations, client interactions, office operations and management meetings.

## v1.2.0 — AYIVI corporate identity integration
- Added official AYIVI Systems Limited light and dark full-logo assets plus icon/mark variants supplied by the owner.
- Added AYIVI identity to the corporate profile section, institutional-conversation CTA, and footer.
- Added AYIVI logo metadata to Organization structured data for search-engine entity association.
- Preserved Nexus EFOS as the primary product identity; AYIVI branding is used as the product owner / accountable technology partner.
