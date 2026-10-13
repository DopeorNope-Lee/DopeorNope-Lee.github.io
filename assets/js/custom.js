// Home news: show the latest few items and collapse the rest behind a toggle.
document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('#news ul');
  if (!list) return;
  var SHOW = 5;
  var items = Array.prototype.slice.call(list.children);
  if (items.length <= SHOW) return;
  items.slice(SHOW).forEach(function (li) { li.hidden = true; });
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'news-toggle';
  btn.textContent = 'Show older news';
  btn.addEventListener('click', function () {
    var expand = items[SHOW].hidden;
    items.slice(SHOW).forEach(function (li) { li.hidden = !expand; });
    btn.textContent = expand ? 'Show less' : 'Show older news';
  });
  list.after(btn);
});
