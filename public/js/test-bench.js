(() => {
  'use strict';
  const js = document.getElementById('js-status');
  const origin = document.getElementById('origin-status');
  if (js) js.textContent = 'JavaScript status: PASS — local external script executed.';
  if (origin) {
    const ok = location.protocol === 'https:' && location.hostname === 'norec.us';
    origin.textContent = ok
      ? 'Origin check: PASS — canonical HTTPS origin.'
      : `Origin check: CHECK — currently ${location.origin}`;
  }
})();
