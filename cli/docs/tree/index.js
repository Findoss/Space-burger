import { D } from './descr.js';

(async () => {
  const $app = document.querySelector('.app');

  const raw = await fetch('../cli/docs/tree/dist/tree.txt');
  let text = await raw.text();

  Object.entries(D).forEach(([k, v]) => {
    const regexpKey = new RegExp(`(${k})\n`, 'g');
    const regexpI = new RegExp(/\[(i.+?)]/, 'g');
    const regexpQ = new RegExp(/\[(\?.+?)\]/, 'g');
    const regexpR = new RegExp(/\[(r.+?)\]/, 'g');

    v = v.replaceAll(regexpR, '<span class="res">[$1]</span>');
    v = v.replaceAll(regexpI, '<span class="tags">[$1]</span>');
    v = v.replaceAll(regexpQ, '<span class="question">[$1]</span>');
    text = text.replaceAll(regexpKey, `$1 - <span class="desc">${v}</span>\n`);
  });

  $app.innerHTML = text;
})();
