(() => {
  'use strict';
  const validViews = new Set(['overview', 'experience', 'projects', 'skills', 'education', 'resume']);
  const views = [...document.querySelectorAll('.view')];
  const navLinks = [...document.querySelectorAll('[data-view-link]')];
  const board = document.querySelector('.content-board');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const projects = [
    { name:'OutcomeOS', image:'assets/outcomeos.svg', category:'own', label:'INDEPENDENT BUILD', idx:'01', url:'https://outcomeos-ruddy.vercel.app/', code:'https://github.com/lotsmanroman781-gif/outcomeos', desc:'A decision-intelligence workspace for team forecasts, market signals, evidence, and measurable outcomes.', skills:'Python · PostgreSQL · JavaScript · Panta API' },
    { name:'TeamFlow', image:'assets/teamflow.svg', category:'own', label:'INDEPENDENT BUILD', idx:'02', url:'https://team-flow-rose.vercel.app/', code:'https://github.com/lotsmanroman781-gif/TeamFlow', desc:'Project and team coordination, workspace permissions, task boards, and AI-assisted planning.', skills:'React · Node.js · Express · MongoDB' },
    { name:'DecisionGap OS', image:'assets/decisiongap.svg', category:'own', label:'INDEPENDENT BUILD', idx:'03', url:'https://decision-gap-os.vercel.app/', code:'https://github.com/lotsmanroman781-gif/DecisionGap-Os', desc:'Customer decision intelligence and merchant-governed recommendations for ecommerce workflows.', skills:'JavaScript · Node.js · APIs · AI' },
    { name:'StatGPT', image:'assets/statgpt.svg', category:'study', label:'EPAM CASE STUDY', idx:'04', url:'https://statgpt.dialx.ai/', code:'https://github.com/epam/statgpt-backend', desc:'A public EPAM AI product that provides natural-language access to statistical information. Reviewed as an external technical case study.', skills:'Python · FastAPI · LangChain · LLMs' },
    { name:'AI DIAL', image:'assets/aidial.svg', category:'study', label:'EPAM CASE STUDY', idx:'05', url:'https://dialx.ai/', code:'https://github.com/epam/ai-dial-sdk', desc:'EPAM’s open-source platform and SDK for enterprise AI integrations and model adapters. Explored as a technical reference.', skills:'Python · AI APIs · FastAPI · SDK design' }
  ];

  const gallery = document.getElementById('project-gallery');
  if (gallery) {
    gallery.innerHTML = projects.map(p => `
      <article class="project-card" data-category="${p.category}">
        <a class="project-visual" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${p.name} official project website"><img src="${p.image}" alt="Conceptual interface illustration for ${p.name}" loading="lazy" /><span class="visual-arrow" aria-hidden="true">↗</span></a>
        <div class="project-card-body"><div class="project-category"><span class="project-kind">${p.label}</span><span>${p.idx} / 05</span></div><h3>${p.name}</h3><p>${p.desc}</p><div class="project-tech">${p.skills}</div><div class="project-card-links"><a href="${p.url}" target="_blank" rel="noopener noreferrer">Project website ↗</a><a href="${p.code}" target="_blank" rel="noopener noreferrer">Source ↗</a></div></div>
      </article>`).join('');
  }

  const overview = document.getElementById('overview-gallery');
  if (overview) {
    overview.innerHTML = [projects[0],projects[3],projects[4]].map(p => `
      <a class="mini-work" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${p.name} project website"><span class="mini-image"><img src="${p.image}" alt="Conceptual ${p.name} preview" loading="lazy" /></span><strong class="mini-work-name">${p.name} ↗</strong><span class="mini-work-label">${p.category==='own'?'Independent build':'EPAM case study'}</span></a>
    `).join('');
  }

  const renderView = (name) => {
    const next = validViews.has(name) ? name : 'overview';
    views.forEach(v => {
      const shown = v.id === next;
      v.hidden = !shown;
      v.classList.toggle('is-active',shown);
      if (shown) {
        const scroller = v.querySelector('.view-scroll');
        if (scroller) scroller.scrollTop = 0;
      }
    });
    navLinks.forEach(a => {
      const current = a.dataset.viewLink === next;
      a.classList.toggle('is-active',current);
      if (current) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
    if (board) board.dataset.currentView = next;
    document.title = (next==='overview'?'Roman Lotsman':`${next.charAt(0).toUpperCase()}${next.slice(1)} | Roman Lotsman`)+' — Backend & AI';
    window.scrollTo({top:0,behavior:'instant'});
  };
  const readHash = () => (location.hash || '#overview').slice(1);
  window.addEventListener('hashchange',() => renderView(readHash()));
  renderView(readHash());
  document.addEventListener('keydown',(e) => {
    if(e.key==='Escape' && readHash()!=='overview') window.location.hash = 'overview';
  });
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const selected=button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b=>{ const active=b===button; b.classList.toggle('is-on',active); b.setAttribute('aria-pressed',String(active));});
      document.querySelectorAll('.project-card').forEach(card=>{card.hidden=selected!=='all' && card.dataset.category!==selected;});
    });
  });
})();
