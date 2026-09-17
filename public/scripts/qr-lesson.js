/**
 * NoRec.US QR lesson overlay behavior.
 *
 * Kept as a same-origin external file because production CSP uses:
 *   script-src 'self'
 * and intentionally does not allow inline JavaScript.
 */
(() => {
  const audioPlaylist = [
    "/audio/nggyu-dnb.mp3",
    "/audio/nggyu-pop.mp3",
  ];

  const modal = document.getElementById("qr-lesson-modal");
  const yes = document.getElementById("qr-lesson-yes");
  const no = document.getElementById("qr-lesson-no");
  const audio = document.getElementById("qr-lesson-audio");
  const stop = document.getElementById("qr-lesson-stop");
  const playlist = audioPlaylist.filter(Boolean);

  if (!modal || !yes || !no || !(audio instanceof HTMLAudioElement) || !stop) {
    return;
  }

  const previousOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = "hidden";

  const closeModal = () => {
    modal.remove();
    document.documentElement.style.overflow = previousOverflow;
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    stop.hidden = true;
  };

  const startAudio = async () => {
    closeModal();

    if (playlist.length === 0) {
      console.warn("NoRec QR lesson playlist is empty.");
      return;
    }

    try {
      const selected = playlist[Math.floor(Math.random() * playlist.length)];
      audio.src = selected;
      audio.currentTime = 0;
      await audio.play();
      stop.hidden = false;
    } catch (error) {
      // The page remains usable even if playback is blocked or the file is missing.
      stop.hidden = true;
      console.warn("NoRec QR lesson audio could not start.", error);
    }
  };

  yes.addEventListener("click", startAudio, { once: true });
  no.addEventListener("click", closeModal, { once: true });
  stop.addEventListener("click", stopAudio);

  audio.addEventListener("pause", () => {
    if (!audio.ended) stop.hidden = true;
  });

  audio.addEventListener("play", () => {
    stop.hidden = false;
  });

  audio.addEventListener("error", () => {
    stop.hidden = true;
  });

  // Escape is the accessibility equivalent of choosing NO.
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && document.getElementById("qr-lesson-modal")) {
        closeModal();
      }
    },
    { once: true }
  );

  // Put keyboard focus on the tempting button immediately.
  requestAnimationFrame(() => yes.focus());
})();
