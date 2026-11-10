const svg = document.querySelector('.canvas>svg');
const panel = document.getElementById('panel');
const content = document.getElementById('content');
const canvas = document.getElementById('canvas');
const originalWidth = Number(svg.getAttribute('width'));
const originalHeight = Number(svg.getAttribute('height'));
const isTouch = matchMedia('(pointer:coarse)').matches;
let active = null, pinned = false, timer = null, zoomLevel = 100;
let suppressClick = false, lastTap = 0, lastTapX = 0, lastTapY = 0;

function updateZoom(n) {
  zoomLevel = n;
  svg.style.width = originalWidth * n / 100 + 'px';
  svg.style.height = originalHeight * n / 100 + 'px';
  document.getElementById('zoomValue').value = Math.round(n) + ' %';
  document.getElementById('zoom').value = n;
}

function scale(n) {
  updateZoom(Math.max(10, Math.min(300, n)));
  hide(true);
}

function zoomAt(cx, cy, factor) {
  const prev = zoomLevel, next = Math.max(10, Math.min(300, prev * factor));
  if (next === prev) return;
  const box = canvas.getBoundingClientRect();
  const x = cx - box.left, y = cy - box.top;
  const padding = parseFloat(getComputedStyle(canvas).paddingLeft);
  const svgX = x + canvas.scrollLeft - padding;
  const svgY = y + canvas.scrollTop - padding;
  const ratio = next / prev;
  updateZoom(next);
  canvas.scrollLeft = svgX * ratio - x + padding;
  canvas.scrollTop = svgY * ratio - y + padding;
}

function hide(force = false) {
  if (pinned && !force) return;
  panel.hidden = true;
  active = null;
  pinned = false;
}

function deferHide() {
  clearTimeout(timer);
  timer = setTimeout(() => hide(), 220);
}

function place(el) {
  const box = el.getBoundingClientRect();
  const w = panel.offsetWidth, h = panel.offsetHeight, gap = 12;
  let left = box.right + gap, top = box.top;
  if (isTouch || innerWidth < 650) {
    left = 12;
    top = innerHeight - h - 12;
  } else {
    if (left + w > innerWidth - 12) left = box.left - w - gap;
    left = Math.max(12, Math.min(left, innerWidth - w - 12));
    top = Math.max(12, Math.min(box.top, innerHeight - h - 12));
  }
  panel.style.left = Math.max(12, left) + 'px';
  panel.style.top = Math.max(12, top) + 'px';
}

function show(el, pin = false) {
  clearTimeout(timer);
  if (pinned && !pin && active !== el) return;
  active = el;
  pinned = pin;
  const id = el.dataset.node;
  const data = (window.GEOUCI_VISTAS || {})[id] || {elemento: id, imagenes: []};
  document.getElementById('nodeId').textContent = id + (pinned ? ' · Fijado' : '');
  document.getElementById('title').textContent = data.elemento;
  document.getElementById('note').textContent = data.nota || '';
  content.replaceChildren();
  const imgs = Array.isArray(data.imagenes) ? data.imagenes : [];
  if (!imgs.length) {
    const p = document.createElement('p');
    p.className = 'na';
    p.textContent = 'NA';
    content.append(p);
    const hint = document.createElement('p');
    hint.className = 'hint';
    hint.textContent = 'Añade una imagen en assets y su asociación en asociaciones.js.';
    content.append(hint);
  }
  imgs.forEach(item => {
    const figure = document.createElement('figure');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const cap = document.createElement('figcaption');
    const cu = document.createElement('strong');
    const name = document.createElement('p');
    const filename = typeof item === 'string' ? item : item.archivo;
    const url = 'assets/' + filename.split('/').map(encodeURIComponent).join('/');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    img.src = url;
    img.alt = item.vista || data.elemento;
    img.addEventListener('load', () => {
      if (active === el && !panel.hidden) place(el);
    }, {once: true});
    img.addEventListener('error', () => {
      a.remove();
      const err = document.createElement('p');
      err.className = 'missing';
      err.textContent = 'NA · Archivo no encontrado: ' + filename;
      figure.prepend(err);
      if (active === el && !panel.hidden) place(el);
    }, {once: true});
    a.append(img);
    cu.textContent = item.cu || 'CU sin especificar';
    name.textContent = item.vista || filename;
    cap.append(cu, name);
    figure.append(a, cap);
    content.append(figure);
  });
  panel.hidden = false;
  place(el);
}

document.querySelectorAll('g[data-node]').forEach(el => {
  el.addEventListener('click', () => {
    if (suppressClick) return;
    if (pinned && active === el) {
      hide(true);
      return;
    }
    show(el, true);
  });
  el.addEventListener('focus', () => show(el));
  el.addEventListener('blur', deferHide);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      show(el, true);
    }
  });
  if (!isTouch) {
    el.addEventListener('mouseenter', () => show(el));
    el.addEventListener('mouseleave', deferHide);
  }
});

panel.addEventListener('mouseenter', () => clearTimeout(timer));
panel.addEventListener('mouseleave', deferHide);
document.getElementById('close').addEventListener('click', () => hide(true));
document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(true); });
canvas.addEventListener('scroll', () => { if (active && !panel.hidden) place(active); });
window.addEventListener('resize', () => { if (active && !panel.hidden) place(active); });
document.getElementById('zoom').addEventListener('input', e => scale(Number(e.target.value)));
document.getElementById('fit').addEventListener('click', () => {
  scale(Math.max(10, Math.min(150, (canvas.clientWidth - 40) / originalWidth * 100)));
  canvas.scrollTo(0, 0);
});
document.getElementById('actual').addEventListener('click', () => scale(100));

const pointers = new Map();
let pinch = null;
canvas.addEventListener('click', e => {
  if (e.target.closest('g[data-node]') || suppressClick) return;
  const t = Date.now();
  if (t - lastTap < 350 && Math.hypot(e.clientX - lastTapX, e.clientY - lastTapY) < 50) {
    zoomAt(e.clientX, e.clientY, 1.6);
    lastTap = 0;
  } else {
    lastTap = t;
    lastTapX = e.clientX;
    lastTapY = e.clientY;
  }
  hide(true);
});

if (isTouch) {
  canvas.addEventListener('pointerdown', e => {
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY, ox: e.clientX, oy: e.clientY});
    if (pointers.size === 2) {
      const p = [...pointers.values()];
      pinch = {dist: Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y), midX: (p[0].x + p[1].x) / 2, midY: (p[0].y + p[1].y) / 2};
      suppressClick = true;
    } else {
      suppressClick = false;
    }
  });
  canvas.addEventListener('pointermove', e => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY, ox: prev.ox, oy: prev.oy});
    if (pointers.size === 2 && pinch) {
      const p = [...pointers.values()];
      const dist = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      const midX = (p[0].x + p[1].x) / 2, midY = (p[0].y + p[1].y) / 2;
      canvas.scrollLeft -= midX - pinch.midX;
      canvas.scrollTop -= midY - pinch.midY;
      zoomAt(midX, midY, dist / pinch.dist);
      pinch = {dist, midX, midY};
      suppressClick = true;
    } else if (pointers.size === 1) {
      if (Math.hypot(e.clientX - prev.ox, e.clientY - prev.oy) > 10) suppressClick = true;
      canvas.scrollLeft -= e.clientX - prev.x;
      canvas.scrollTop -= e.clientY - prev.y;
    }
  });
  function releasePointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
  }
  canvas.addEventListener('pointerup', releasePointer);
  canvas.addEventListener('pointercancel', releasePointer);
  canvas.addEventListener('contextmenu', e => e.preventDefault());
}
