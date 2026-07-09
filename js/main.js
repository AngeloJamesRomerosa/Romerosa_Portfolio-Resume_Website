// ── RENDERERS ─────────────────────────────────────────────────
// Each function reads its data array from data.js and injects HTML into the matching container

function renderTimeline() {
  document.getElementById('timeline').innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <div class="timeline-meta">
        <span class="timeline-date">${item.date}</span>
        <span class="timeline-badge ${item.badge === 'current' ? 'current' : ''}">
          ${item.badge === 'current' ? 'Current' : item.badge}
        </span>
      </div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-subtitle">${item.subtitle}</div>
      ${item.docs && item.docs.length
        ? `<div class="timeline-docs">
             ${item.docs.map(doc => `
               <a href="${doc}" target="_blank" rel="noopener" class="timeline-doc-thumb">
                 <img src="${doc}" alt="Document" />
               </a>`).join('')}
           </div>`
        : ''}
    </div>
  `).join('');
}

function renderCerts() {
  document.getElementById('certsGrid').innerHTML = certsData.map(c => `
    <div class="cert-card">
      ${c.certImage
        ? `<div class="cert-preview">
             <img src="${c.certImage}" alt="${c.title}" />
           </div>`
        : `<div class="cert-logo">
             ${c.logoUrl
               ? `<img src="${c.logoUrl}" alt="${c.issuer}" />`
               : `<span style="font-size:1.6rem">${c.icon}</span>`}
           </div>`}
      <div class="cert-card-body">
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-date">${c.date}</div>
        ${c.certUrl
          ? `<a href="${c.certUrl}" target="_blank" rel="noopener" class="cert-view-btn">
               <i class="fas fa-eye"></i> View
             </a>`
          : ''}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = projectsData.map(p => `
    <div class="project-card">
      <div class="project-thumb">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" />`
          : `<div class="thumb-placeholder"><i class="fas fa-image"></i><span>Add screenshot</span></div>`}
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <p class="project-desc">${p.description}</p>
        <div class="project-links">
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Preview</a>` : ''}
          ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderStack() {
  document.getElementById('stackGrid').innerHTML = stackData.map(s => `
    <div class="stack-item">
      <div class="stack-icon">
        ${s.iconUrl
          ? `<img src="${s.iconUrl}" alt="${s.label}" />`
          : `<i class="${s.iconClass}"></i>`}
      </div>
      <div class="stack-label">${s.label}</div>
    </div>
  `).join('');
}

// ── TYPEWRITER ─────────────────────────────────────────────────
// Cycles through roles[], typing then deleting each word character by character
const roles = ["AI/ML Engineer", "Backend Developer", "Problem Solver", "Tech Enthusiast"];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

(function typewrite() {
  const word = roles[ri];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; return setTimeout(typewrite, 1800); }
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typewrite, deleting ? 55 : 95);
})();

// ── THEME TOGGLE ───────────────────────────────────────────────
// Flips data-theme on <html> between "dark" and "light"; CSS variables handle the rest
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// ── PARTICLE BACKGROUND ────────────────────────────────────────
// 90 dots move continuously on a full-page canvas; color adapts to current theme
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W = canvas.width = innerWidth;
let H = canvas.height = innerHeight;

const dots = Array.from({ length: 90 }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  r: Math.random() * 1.8 + 0.4,
  vx: (Math.random() - 0.5) * 0.28,
  vy: (Math.random() - 0.5) * 0.28,
  o: Math.random() * 0.45 + 0.08
}));

window.addEventListener('resize', () => {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
});

(function frame() {
  ctx.clearRect(0, 0, W, H);
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  dots.forEach(d => {
    d.x = (d.x + d.vx + W) % W;
    d.y = (d.y + d.vy + H) % H;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = dark
      ? `rgba(59,130,246,${d.o})`
      : `rgba(37,99,235,${d.o * 0.55})`;
    ctx.fill();
  });
  requestAnimationFrame(frame);
})();

// ── INIT ───────────────────────────────────────────────────────
renderTimeline();
renderCerts();
renderProjects();
renderStack();
