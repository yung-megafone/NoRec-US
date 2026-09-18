(() => {
  const card = document.getElementById('qr-lesson-card');
  const yes = document.getElementById('qr-lesson-yes');
  const no = document.getElementById('qr-lesson-no');
  const audio = document.getElementById('qr-lesson-audio');
  const stop = document.getElementById('qr-lesson-stop');

  if (
    !card ||
    !yes ||
    !no ||
    !(audio instanceof HTMLAudioElement) ||
    !stop
  ) {
    return;
  }

  const playlist = (audio.dataset.playlist || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const dismissCard = () => {
    card.remove();
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    stop.hidden = true;
  };

  const startAudio = async () => {
    dismissCard();

    if (playlist.length === 0) {
      console.warn('NoRec QR lesson playlist is empty.');
      return;
    }

    const selected = playlist[Math.floor(Math.random() * playlist.length)];
    audio.src = selected;
    audio.currentTime = 0;

    try {
      await audio.play();
      stop.hidden = false;
    } catch (error) {
      stop.hidden = true;
      console.warn('NoRec QR lesson audio could not start.', error);
    }
  };

  yes.addEventListener('click', startAudio, { once: true });
  no.addEventListener('click', dismissCard, { once: true });
  stop.addEventListener('click', stopAudio);

  audio.addEventListener('play', () => {
    stop.hidden = false;
  });

  audio.addEventListener('pause', () => {
    stop.hidden = true;
  });

  audio.addEventListener('error', () => {
    stop.hidden = true;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('qr-lesson-card')) {
      dismissCard();
    }
  });
})();
