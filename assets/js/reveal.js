(function () {
  var targets = document.querySelectorAll('section > .wrap, .principle, .member, .stat');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('reveal', 'shown'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('shown');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
