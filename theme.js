(function () {
  var STORAGE_KEY = 'theme';
  var THEMES = ['cosmic', 'mono'];

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  var stored = readStored();
  var initial = THEMES.indexOf(stored) >= 0 ? stored : 'cosmic';
  apply(initial);

  function updateLabel(btn) {
    var current = document.documentElement.getAttribute('data-theme');
    btn.textContent = current === 'mono' ? '◐' : '☾';
    btn.setAttribute(
      'aria-label',
      'Switch to ' + (current === 'mono' ? 'cosmic' : 'mono') + ' theme'
    );
  }

  function bind() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    updateLabel(btn);
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      apply(current === 'mono' ? 'cosmic' : 'mono');
      updateLabel(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();