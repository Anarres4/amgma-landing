(function () {
  var KEY = 'amgma-theme';
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  function getTheme() {
    return document.documentElement.classList.contains('theme-light') ? 'light' : 'dark';
  }

  function syncButton() {
    var isLight = getTheme() === 'light';
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label',
      isLight ? 'Activer le mode nuit' : 'Activer le mode jour');
    btn.setAttribute('title',
      isLight ? 'Activer le mode nuit' : 'Activer le mode jour');
  }

  function apply(theme, persist) {
    var isLight = theme === 'light';
    document.documentElement.classList.toggle('theme-light', isLight);
    if (persist) {
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }
    syncButton();
  }

  syncButton();

  btn.addEventListener('click', function (e) {
    var next = getTheme() === 'light' ? 'dark' : 'light';
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!document.startViewTransition || reduced) {
      apply(next, true);
      return;
    }

    var rect = btn.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');

    var maxR = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    var t = document.startViewTransition(function () {
      apply(next, true);
    });

    t.ready.then(function () {
      document.documentElement.animate(
        {
          clipPath: [
            'circle(0px at ' + x + 'px ' + y + 'px)',
            'circle(' + maxR + 'px at ' + x + 'px ' + y + 'px)'
          ]
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  });
})();
