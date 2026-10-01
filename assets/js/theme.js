(function () {
  // Clé renouvelée : l'ancienne gardait des choix faits quand la nuit était le défaut
  var KEY = 'amgma-theme-v2';
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.hidden = false;
  var themeColor = document.querySelector('meta[name="theme-color"]');

  // Thème jour par défaut ; la nuit est une option mémorisée (localStorage)
  function getTheme() {
    return document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';
  }

  function syncButton() {
    var isDark = getTheme() === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.setAttribute('title',
      isDark ? 'Activer le mode jour' : 'Activer le mode nuit');
  }

  function apply(theme, persist) {
    var isDark = theme === 'dark';
    document.documentElement.classList.toggle('theme-dark', isDark);
    if (themeColor) themeColor.setAttribute('content', isDark ? '#0E0D10' : '#FBF8F3');
    if (persist) {
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }
    syncButton();
  }

  syncButton();

  btn.addEventListener('click', function (e) {
    var next = getTheme() === 'dark' ? 'light' : 'dark';
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
    }).catch(function () {}); // transition sautée (double activation) : rien à animer
  });
})();
