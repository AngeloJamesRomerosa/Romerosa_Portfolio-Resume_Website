// ==============================================================
//  YOUR DATA — this is the only file you need to edit
// ==============================================================

// ── EDUCATION & EXPERIENCE ─────────────────────────────────────
// badge: use "current" (lowercase) for the green highlight,
//        or any other string like "Internship", "Education"
const timelineData = [
  {
    date: "Apr 2026 – Present",
    title: "Junior AI/ML Software Engineer",
    subtitle: "MabuhayTech Corporation · Contract · National Capital Region, Philippines · On-site",
    badge: "current"
  },
  {
    date: "Jun 2024 – Jul 2024",
    title: "Back End Developer",
    subtitle: "HTech Corporation · Internship · Alabang, Muntinlupa City · Hybrid",
    badge: "Internship"
  },
  {
    date: "Feb 2021",
    title: "Quality Assurance Tester",
    subtitle: "Creotec Philippines Inc. · Internship · Laguna, Calabarzon · Remote",
    badge: "Internship"
  },
  {
    date: "2021 – 2025",
    title: "BS Computer Science — Major in Intelligent Systems",
    subtitle: "De La Salle University - Dasmariñas",
    badge: "Education"
  }
  // Add more entries here:
  // { date: "...", title: "...", subtitle: "...", badge: "..." }
];


// ── CERTIFICATIONS ─────────────────────────────────────────────
// icon   : emoji fallback shown when logoUrl is empty
// logoUrl: URL to a logo — use a CDN URL, or a local file in images/certifications/
// certUrl: link to the certificate image/PDF — set to "" to hide the View button
const certsData = [
  {
    issuer: "Cisco",
    title: "Linux Essentials",
    date: "April 2025",
    icon: "🔵",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
    certUrl: ""  // add path to cert image/PDF here, e.g. "images/certifications/linux-essentials.jpg"
  },
  {
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    date: "April 2025",
    icon: "🔵",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
    certUrl: ""  // add path to cert image/PDF here
  },
  {
    issuer: "Cisco",
    title: "Networking Basics",
    date: "May 2025",
    icon: "🔵",
    logoUrl: "images/certifications/Cisco Networking Basics.jpg",
    certUrl: "images/certifications/Cisco Networking Basics.jpg"
  }
  // Add more certifications:
  // { issuer: "Google", title: "Associate Cloud Engineer", date: "Jan 2026", icon: "🟢", logoUrl: "images/certifications/google.png" }
];


// ── PROJECTS ───────────────────────────────────────────────────
// image  : path to a screenshot saved in images/projects/
//          e.g. "images/projects/ai-livestream.png"
//          Leave "" to show a placeholder until you add one.
// liveUrl: set to "" to hide the Live Preview button
// codeUrl: set to "" to hide the Code button
const projectsData = [
  {
    title: "AI Livestreaming AKOOL",
    image: "",  // e.g. "images/projects/ai-livestream.png"
    tags: ["Python", "FastAPI", "Docker", "Agora RTC", "AKOOL API", "Vanilla JS", "WebSocket"],
    description: "Real-time AI face-swap livestreaming platform. FastAPI backend with WebSocket streaming, browser-side background removal via MediaPipe, and AKOOL's Live Faceswap API. Containerised with Docker and deployed on Render.",
    liveUrl: "https://ai-livestreaming-akool-render.onrender.com/",
    codeUrl: "https://github.com/AngeloJamesRomerosa/AI_Livestreaming_AKOOL_Render"
  }
  // Add more projects:
  // {
  //   title: "My New Project",
  //   image: "images/projects/project2.png",
  //   tags: ["React", "Node.js"],
  //   description: "What it does in 1-2 sentences.",
  //   liveUrl: "https://myproject.netlify.app",
  //   codeUrl: "https://github.com/AngeloJamesRomerosa/my-repo"
  // }
];


// ── TECH STACK ─────────────────────────────────────────────────
// iconUrl  : CDN URL to a tech logo (recommended), OR a local file in images/stack/
//            e.g. iconUrl: "images/stack/react.svg"
// iconClass: Font Awesome class — only used when iconUrl is ""
const stackData = [
  { label: "Python",     iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "HTML",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "PHP",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { label: "FastAPI",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { label: "Docker",     iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "Redis",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { label: "Git",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "GCP",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { label: "Streamlit",  iconUrl: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
  { label: "Turbo C",    iconUrl: "", iconClass: "fas fa-code" }
  // Add more:
  // { label: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
];
