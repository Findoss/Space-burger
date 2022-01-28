import { D } from './descr.js';

(async () => {
  const $app = document.querySelector('.app');

  const raw = await fetch('../cli/docs/tree/dist/tree.txt');
  let text = await raw.text();

  Object.entries(D).forEach(([k, v]) => {
    const regexpKey = new RegExp(`(${k})\n`, 'g');

    text = text.replaceAll(regexpKey, `$1 - <i>${v}</i>\n`);
  });

  $app.innerHTML = text;
})();
