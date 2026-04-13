/* =============================================
   Preview Mode Toggle — Light/Dark Mockup Switcher
   Controls how mockup screenshots appear.
   Separate from page theme.
   ============================================= */

(function() {
  'use strict';

  var STORAGE_KEY = 'alohost-preview-mode';

  function getMode() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function setMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-preview', mode);
    updateButtons(mode);
  }

  function updateButtons(mode) {
    var btns = document.querySelectorAll('.preview-switch button');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-mode') === mode) {
        btns[i].classList.add('active');
      } else {
        btns[i].classList.remove('active');
      }
    }
  }

  function createBar() {
    if (document.querySelector('.preview-bar')) return;

    var bar = document.createElement('div');
    bar.className = 'preview-bar';
    bar.innerHTML =
      '<span class="preview-text">Vista de mockups:</span>' +
      '<div class="preview-switch">' +
        '<button data-mode="light" class="active">' +
          '<span class="p-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></span>' +
          'Modo Dia' +
        '</button>' +
        '<button data-mode="dark">' +
          '<span class="p-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></span>' +
          'Modo Noche' +
        '</button>' +
      '</div>';

    var nav = document.querySelector('.top-nav') || document.querySelector('nav');
    if (nav && nav.nextSibling) {
      nav.parentNode.insertBefore(bar, nav.nextSibling);
    } else if (nav) {
      nav.parentNode.insertBefore(bar, nav.nextSibling);
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }

    var btns = bar.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        setMode(this.getAttribute('data-mode'));
      });
    }
  }

  var mode = getMode();
  document.documentElement.setAttribute('data-preview', mode);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      createBar();
      updateButtons(mode);
    });
  } else {
    createBar();
    updateButtons(mode);
  }
})();
