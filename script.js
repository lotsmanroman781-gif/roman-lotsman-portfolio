(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!opened));
      nav.classList.toggle('open', !opened);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
    }));
    document.addEventListener('keydown', e => {if(e.key === 'Escape'){toggle.setAttribute('aria-expanded','false'); nav.classList.remove('open');}});
  }
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.project-card')];
  filters.forEach(button => button.addEventListener('click', () => {
    const kind = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    cards.forEach(card => { card.hidden = kind !== 'all' && card.dataset.type !== kind; });
  }));
  const copy = document.getElementById('copy-email');
  if (copy) copy.addEventListener('click', async () => {
    const original = 'Copy email ⧉';
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText('lotsmanroman781@gmail.com');
      else { const input = document.createElement('textarea'); input.value='lotsmanroman781@gmail.com'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); }
      copy.textContent = 'Email copied ✓';
    } catch { copy.textContent = 'Copy manually: lotsmanroman781@gmail.com'; }
    setTimeout(() => { copy.textContent = original; }, 3000);
  });
})();
