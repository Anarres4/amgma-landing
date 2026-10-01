(function () {
  var video = document.querySelector('[data-product-video]');
  if (!video) return;
  var btn = document.querySelector('[data-video-toggle]');

  // Pas de lecture automatique si l'utilisateur préfère moins de mouvement
  // ou a activé l'économie de données : le poster reste, le bouton lance.
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var userPaused = reduced || saveData;

  video.removeAttribute('controls');
  video.muted = true; // requis pour la lecture automatique (iOS notamment)

  function play() {
    var p = video.play();
    // Lecture refusée (mode économie d'énergie…) : on reste sur le poster
    if (p && p.catch) p.catch(sync);
  }

  function sync() {
    if (!btn) return;
    var paused = video.paused;
    btn.classList.toggle('is-paused', paused);
    btn.setAttribute('aria-label', paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
  }

  if (btn) {
    btn.hidden = false;
    btn.addEventListener('click', function () {
      if (video.paused) {
        userPaused = false;
        play();
      } else {
        userPaused = true;
        video.pause();
      }
    });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    sync();
  }

  if (!('IntersectionObserver' in window)) {
    if (!userPaused) play();
    return;
  }

  // preload="none" : rien n'est téléchargé avant que la section approche.
  // Hors écran, la vidéo se met en pause (batterie, CPU).
  var io = new IntersectionObserver(function (entries) {
    // Plusieurs entrées possibles par lot (défilement rapide) : la dernière fait foi
    var visible = entries[entries.length - 1].isIntersecting;
    if (visible && !userPaused) play();
    else if (!visible && !video.paused) video.pause();
  }, { rootMargin: '200px 0px' });
  io.observe(video);
})();
