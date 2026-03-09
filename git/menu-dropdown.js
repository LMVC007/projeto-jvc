document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-ofertas');
  const submenu = document.getElementById('submenu-ofertas');

  function openSubmenu() {
    submenu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeSubmenu() {
    submenu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', e => {
    e.preventDefault();
    if (submenu.classList.contains('show')) {
      closeSubmenu();
    } else {
      openSubmenu();
    }
  });

  document.addEventListener('click', e => {
    if (!submenu.contains(e.target) && e.target !== toggle) {
      closeSubmenu();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-lancamentos');
  const submenu = document.getElementById('submenu-lancamentos');

  function openSubmenu() {
    submenu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeSubmenu() {
    submenu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', e => {
    e.preventDefault();
    if (submenu.classList.contains('show')) {
      closeSubmenu();
    } else {
      openSubmenu();
    }
  });

  document.addEventListener('click', e => {
    if (!submenu.contains(e.target) && e.target !== toggle) {
      closeSubmenu();
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-categorias');
  const submenu = document.getElementById('submenu-categorias');

  function openSubmenu() {
    submenu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeSubmenu() {
    submenu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', e => {
    e.preventDefault();
    if (submenu.classList.contains('show')) {
      closeSubmenu();
    } else {
      openSubmenu();
    }
  });

  document.addEventListener('click', e => {
    if (!submenu.contains(e.target) && e.target !== toggle) {
      closeSubmenu();
    }
  });
});