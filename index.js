const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
    toggle.classList.toggle('open');
  });

  document.body.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !toggle.contains(e.target)) {
      nav.classList.remove('active');
      toggle.classList.remove('open');
    }
  });