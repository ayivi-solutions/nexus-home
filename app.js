const $=(s,ctx=document)=>ctx.querySelector(s);const $$=(s,ctx=document)=>[...ctx.querySelectorAll(s)];
const capabilityData={
 core:{title:'Institutional Core',desc:'The operational financial heart of the institution—connected to one customer, transaction and accounting truth.',items:[['Customer 360','Identity, KYC/CDD, relationships, products, service history and related parties.'],['Savings & deposits','Savings, fixed deposits, shares, fees, schedules, maturity and renewal.'],['Credit lifecycle','Origination, assessment, approval, disbursement, monitoring, collections and closure.'],['Payments','Internal and external payments with governed references and reconciliation.'],['Cash & vault','Teller tills, vaults, cash movement, denominations and custody.'],['Treasury','Liquidity, institutional cash positions and internal funding.'],['General ledger','Double-entry financial truth and subledger consequences.'],['Financial reporting','Management, statutory and regulatory reporting surfaces.']]},
 field:{title:'Field & Distribution',desc:'Last-mile service designed around collectors, agents, branches, cash and variable connectivity.',items:[['Collector daybook','Daily route, customer commitments, receipts, exceptions and settlement.'],['Offline continuity','Encrypted queues, sync provenance and conflict resolution.'],['Route intelligence','Prioritise visits using commitments, risk, geography and service windows.'],['Collector integrity','Investigation indicators from reversal, settlement and complaint patterns.'],['Branch operations','Opening readiness, cash, staff, approvals, service and close.'],['Settlement','Cash/digital split, variance and controlled handover.'],['Agent operations','Scoped service, limits, liquidity and accountability.'],['Cash chain-of-custody','Track movement from teller or collector through controlled custody.']]},
 ops:{title:'Institutional Operations',desc:'Financial institutions are also employers, asset owners, buyers and governed organisations. Nexus treats those domains as part of the operating system.',items:[['HR & payroll','Employee lifecycle, payroll and workforce records.'],['Procurement','Request, approval, purchase, receipt and financial consequence.'],['Inventory','Operational stock and controlled movement.'],['Assets','Lifecycle, assignment, depreciation and disposal.'],['Documents','Governed institutional records and evidence.'],['Workflow','Tasks, approvals, escalations and service-level tracking.'],['Cases','Common operating model for complaints, exceptions, investigations and findings.'],['Internal services','Operational support requests and accountable ownership.']]},
 trust:{title:'Trust & Control',desc:'Authority, policy, evidence and separation are embedded in work—not bolted on after transactions occur.',items:[['Authority fabric','Role, scope, record, field, action and ownership enforcement.'],['Maker-checker','Independent approval for material actions.'],['Segregation of duties','Prevent incompatible authority combinations.'],['Temporary delegation','Time-bounded, reasoned and auditable authority.'],['AML & compliance','KYC/CDD, watchlists, cases, policy and regulatory evidence.'],['Internal audit','Control universe, findings, evidence and management actions.'],['Audit replay','Reconstruct a decision or transaction chronologically.'],['Continuous controls','Monitor control exceptions and remediation continuously.']]},
 intel:{title:'Institutional Intelligence',desc:'Move from historical reporting to authorised, explainable and action-linked institutional awareness.',items:[['Executive intelligence','Institution health, exposures, branches and action queues.'],['Portfolio intelligence','Savings, loans, collections, liquidity and performance.'],['Delinquency early warning','Identify emerging risk before formal arrears.'],['Collections prioritisation','Transparent intervention ranking.'],['Collector integrity','Institution-relative control indicators.'],['Branch health','Balanced branch score across growth, risk, service and controls.'],['Forecasting','Scenario analysis and operational projections.'],['Institutional memory','Role-aware knowledge retrieval across governed records.']]},
 digital:{title:'Customer & Digital Experience',desc:'One relationship across onboarding, self-service, channels, communications and support.',items:[['Digital onboarding','Identity, KYC/CDD and product activation.'],['Customer portal','Self-service information and requests.'],['Mobile','Mobile-first customer and staff journeys.'],['USSD','Low-friction service for basic transactions and access.'],['Messaging','SMS, email, WhatsApp and push communications.'],['CRM','Relationship history, engagement and opportunities.'],['Customer support','Cases, complaints, promises and service history.'],['Consent & purpose','Channel preferences and authorised data-use evidence.']]},
 platform:{title:'Ecosystem & Platform',desc:'A governed integration and configuration surface that allows Nexus to evolve with the institution and its ecosystem.',items:[['Open APIs','Governed external and internal service interfaces.'],['Webhooks & events','Event-driven interoperability and notifications.'],['Integration hub','Identity, banks, mobile money, payments, messaging and partners.'],['Migration studio','Profile, map, cleanse, reconcile and sign off legacy data.'],['Product factory','Configure products without routine source-code change.'],['Policy-as-configuration','Version rules, limits, approvals and effective dates.'],['Multi-institution architecture','Configurable institutions, branches and operating policies.'],['Partner sandbox','Future integration certification and ecosystem tooling.']]}
};
function fadeSwap(el,updateFn){if(matchMedia('(prefers-reduced-motion: reduce)').matches){updateFn();return}el.classList.add('stage-fading');setTimeout(()=>{updateFn();el.classList.remove('stage-fading')},160)}
function renderCapability(k){const d=capabilityData[k];$('#capabilityStage').innerHTML=`<h3>${d.title}</h3><p>${d.desc}</p><div class="cap-items">${d.items.map(x=>`<div class="cap-item"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div>`}
$$('.cap-tab').forEach(b=>b.addEventListener('click',()=>{$$('.cap-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');fadeSwap($('#capabilityStage'),()=>renderCapability(b.dataset.cap))}));renderCapability('core');
const journeyData={
 credit:{title:'Apply → Assess → Approve → Disburse → Monitor → Collect → Close',steps:['Apply','Assess','Approve','Disburse','Monitor','Collect','Close'],body:'A complete credit lifecycle where explainable assessment supports—rather than replaces—accountable institutional approval.'},
 collect:{title:'Collect → Verify → Settle → Reconcile → Post',steps:['Collect','Verify','Settle','Reconcile','Post'],body:'Field and digital collections carry receipt evidence through settlement, reconciliation and financial posting.'},
 cash:{title:'Receive → Hold → Transfer → Count → Reconcile',steps:['Receive','Hold','Transfer','Count','Reconcile'],body:'Physical cash movement becomes a controlled chain-of-custody across teller, vault, branch and cash-in-transit.'},
 close:{title:'Transact → Journal → Reconcile → Close → Report',steps:['Transact','Journal','Reconcile','Close','Report'],body:'Accounting becomes a consequence of operations, with unresolved exceptions made visible before period close.'},
 product:{title:'Design → Approve → Publish → Monitor',steps:['Design','Approve','Publish','Monitor'],body:'A governed product factory connects pricing, eligibility, rules, accounting and approvals to product performance.'},
 decision:{title:'Detect → Explain → Review → Decide → Evidence',steps:['Detect','Explain','Review','Decide','Evidence'],body:'Signals and recommendations remain transparent, while accountable people retain authority and the final decision becomes durable evidence.'}
};
function renderJourney(k){const d=journeyData[k];$('#journeyStage').innerHTML=`<h3>${d.title}</h3><div class="journey-flow">${d.steps.map((s,i)=>`${i?'<i>→</i>':''}<span>${s}</span>`).join('')}</div><p>${d.body}</p>`}
$$('.journey-chip').forEach(b=>b.addEventListener('click',()=>{$$('.journey-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');fadeSwap($('#journeyStage'),()=>renderJourney(b.dataset.journey))}));renderJourney('credit');
const institutions={
 'Last Mile / Susu':[['Field operations','Collector daybook, route, receipts, offline continuity.'],['Settlement','Cash/digital split, variance and reconciliation.'],['Customer 360','Identity, products, commitments and service history.']],
 'Credit Union / Cooperative':[['Member core','Membership, shares, savings and relationship records.'],['Credit','Loans, guarantors, approvals and recovery.'],['Governance','Dividends, controls, audit and communications.']],
 'Microfinance Bank':[['Core finance','Deposits, loans, payments, treasury and GL.'],['Distribution','Multi-branch and field operations.'],['Assurance','AML, risk, capital/liquidity and regulatory evidence.']],
 'Community Bank':[['Multi-branch','Branch, cash/vault and inter-branch accounting.'],['Community relationships','Customer, household/MSME and guarantor context.'],['Digital growth','Mobile, USSD, payments and institutional intelligence.']],
 'Savings & Loans':[['Product factory','Deposits, lending, fees, limits and schedules.'],['Finance','Treasury, accounting, close and reporting.'],['Growth','CRM, collections, analytics and APIs.']],
 'Digital Lender / FinTech':[['API-first journeys','Onboarding, credit, payments and collections.'],['Decision evidence','Rules, explainability and accountable authority.'],['Platform','Reconciliation, partner sandbox and governed AI.']],
 'NGO / Public Programme':[['Identity','Beneficiary/customer records and eligibility.'],['Field delivery','Disbursement, collections where applicable and field evidence.'],['Programme assurance','Controls, audit trails, reporting and outcome analytics.']]
};
const selector=$('#institutionSelector');Object.keys(institutions).forEach((k,i)=>{const b=document.createElement('button');b.textContent=k;b.className=i?'':'active';b.addEventListener('click',()=>{[...selector.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');fadeSwap($('#institutionOutput'),()=>renderInstitution(k))});selector.appendChild(b)});function renderInstitution(k){$('#institutionOutput').innerHTML=`<h3>${k}</h3><p>Nexus EFOS is configured around the institution rather than forcing every institution into one operating template.</p><div class="institution-output-grid">${institutions[k].map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div>`}renderInstitution(Object.keys(institutions)[0]);
const menu=$('.menu-toggle'),mobile=$('.mobile-menu');menu.addEventListener('click',()=>{const open=!mobile.classList.contains('open');mobile.classList.toggle('open',open);menu.setAttribute('aria-expanded',open);mobile.setAttribute('aria-hidden',!open)});$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');mobile.setAttribute('aria-hidden','true')}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const delay=Number(e.target.dataset.delay||0);setTimeout(()=>e.target.classList.add('visible'),delay);io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -30px'});$$('.reveal').forEach(el=>io.observe(el));
const share=$('#shareRail'),toast=$('#shareToast'),sharePop=$('#sharePop');
const pageUrl=location.href,pageTitle=document.title,pageText='One institution. One financial operating system.';
const shareTargets={whatsapp:`https://wa.me/?text=${encodeURIComponent(pageText+' '+pageUrl)}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,email:`mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageText+'\n\n'+pageUrl)}`};
function openSharePop(){sharePop.hidden=false;requestAnimationFrame(()=>sharePop.classList.add('open'));share.setAttribute('aria-expanded','true')}
function closeSharePop(){sharePop.classList.remove('open');share.setAttribute('aria-expanded','false');setTimeout(()=>{sharePop.hidden=true},180)}
share.addEventListener('click',(e)=>{e.stopPropagation();sharePop.hidden?openSharePop():closeSharePop()});
document.addEventListener('click',(e)=>{if(!sharePop.hidden&&!sharePop.contains(e.target)&&e.target!==share){closeSharePop()}});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&!sharePop.hidden){closeSharePop();share.focus()}});
$$('#sharePop button').forEach(b=>b.addEventListener('click',async()=>{
  const type=b.dataset.share;
  if(type==='copy'){try{await navigator.clipboard.writeText(pageUrl);toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1600)}catch(e){}}
  else{window.open(shareTargets[type],'_blank','noopener,width=600,height=640')}
  closeSharePop();
}));

// v1.3.0 — KPI count-up on reveal
const countEls=$$('[data-count]');
function runCount(el){
  const target=parseFloat(el.dataset.count);const suffix=el.dataset.suffix||'';const prefix=el.dataset.prefix||'';
  const isInt=Number.isInteger(target);
  const dur=1100;const start=performance.now();
  function tick(now){
    const p=Math.min(1,(now-start)/dur);const eased=1-Math.pow(1-p,3);
    const val=target*eased;
    el.textContent=prefix+(isInt?Math.round(val).toLocaleString():val.toFixed(1))+suffix;
    if(p<1)requestAnimationFrame(tick)
  }
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=prefix+(isInt?target.toLocaleString():target.toFixed(1))+suffix;return}
  requestAnimationFrame(tick);
}
const countIo=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){runCount(e.target);countIo.unobserve(e.target)}}),{threshold:.4});
countEls.forEach(el=>countIo.observe(el));

// v1.3.0 — smooth FAQ accordion
$$('.accordion details').forEach(d=>{
  const summary=d.querySelector('summary');const p=d.querySelector('p');
  const setClosed=()=>{p.style.maxHeight='0px';p.style.opacity='0';p.style.marginBottom='0'};
  const setOpen=()=>{p.style.maxHeight=p.scrollHeight+'px';p.style.opacity='1';p.style.marginBottom='18px'};
  d.hasAttribute('open')?setOpen():setClosed();
  summary.addEventListener('click',(ev)=>{
    ev.preventDefault();
    if(d.hasAttribute('open')){setClosed();setTimeout(()=>d.removeAttribute('open'),320)}
    else{d.setAttribute('open','');requestAnimationFrame(setOpen)}
  });
});


// v1.1.0 — contextual scene sliders. Autoplay pauses on hover/focus and respects reduced motion.
$$('[data-scene-slider]').forEach((slider)=>{
  const slides=[...slider.querySelectorAll('.scene-slide')];
  const dots=[...slider.querySelectorAll('.scene-dot')];
  const prev=slider.querySelector('.scene-arrow.prev');
  const next=slider.querySelector('.scene-arrow.next');
  let index=0,timer=null;
  const show=(n)=>{index=(n+slides.length)%slides.length;slides.forEach((el,i)=>el.classList.toggle('active',i===index));dots.forEach((el,i)=>el.classList.toggle('active',i===index));};
  const stop=()=>{if(timer){clearInterval(timer);timer=null}};
  const start=()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;stop();timer=setInterval(()=>show(index+1),4800)};
  prev?.addEventListener('click',()=>{show(index-1);start()}); next?.addEventListener('click',()=>{show(index+1);start()});
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);start()}));
  slider.addEventListener('mouseenter',stop); slider.addEventListener('mouseleave',start); slider.addEventListener('focusin',stop); slider.addEventListener('focusout',start);
  let touchX=0;slider.addEventListener('touchstart',e=>touchX=e.touches[0].clientX,{passive:true});slider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>42){show(index+(dx<0?1:-1));start()}},{passive:true});
  show(0);start();
});
