(() => {
  'use strict';

  const search = document.getElementById('source-search');
  const type = document.getElementById('source-type');
  const jurisdiction = document.getElementById('source-jurisdiction');
  const count = document.getElementById('source-count');

  if (!search || !type || !jurisdiction || !count) return;

  const items = [...document.querySelectorAll('.source_filter_item')];

  function update() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;

    for (const item of items) {
      const searchText = item.dataset.search ?? '';
      const itemType = item.dataset.type ?? '';
      const itemJurisdiction = item.dataset.jurisdiction ?? '';

      const match =
        (!q || searchText.includes(q)) &&
        (!type.value || itemType === type.value) &&
        (!jurisdiction.value || itemJurisdiction === jurisdiction.value);

      item.hidden = !match;
      if (match) shown++;
    }

    count.textContent = `${shown} source${shown === 1 ? '' : 's'} shown`;
  }

  search.addEventListener('input', update);
  type.addEventListener('change', update);
  jurisdiction.addEventListener('change', update);
})();
