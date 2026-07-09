// ==============================================================
//  YOUR DATA — this is the only file you need to edit
// ==============================================================

// ── EDUCATION & EXPERIENCE ─────────────────────────────────────
// badge: use "current" (lowercase) for the green highlight,
//        or any other string like "Internship", "Education"
// docs : array of image/PDF paths shown as small thumbnails inline
//        e.g. docs: ["images/Education&Experience/cert1.jpg", "images/Education&Experience/cert2.jpg"]
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
    date: "2021 – 2025",
    title: "BS Computer Science — Major in Intelligent Systems",
    subtitle: "De La Salle University - Dasmariñas",
    badge: "Education",
    docs: [
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_1stYear_1stSem_2021_2022.jpg",
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_1stYear_2ndSem_2021_2022.jpg",
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_2ndYear_1stSem_2022_2023.jpg",
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_2ndYear_2ndSem_2022_2023.jpg",
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_3rdYear_2ndSem_2023_2024.jpg",
      "images/Education&Experience/De_La_Salle_University_Dasmariñas/DeansHonor_4thYear_1stSem_2024_2025.jpg"
    ]
  },
  {
    date: "Feb 2021",
    title: "Quality Assurance Tester",
    subtitle: "Creotec Philippines Inc. · Internship · Laguna, Calabarzon · Remote",
    badge: "Internship",
    docs: ["images/Education&Experience/Creotec_Work_Immersion.jpg"]
  }
  // Add more entries here:
  // { date: "...", title: "...", subtitle: "...", badge: "...", docs: ["images/Education&Experience/file.jpg"] }
];


// ── CERTIFICATIONS ─────────────────────────────────────────────
// icon     : emoji fallback when no logoUrl
// logoUrl  : small issuer logo (CDN URL or local file)
// certImage: the actual certificate image shown large on the card
// certUrl  : what opens when View is clicked (usually same as certImage)
const certsData = [
  {
    issuer: "Cisco",
    title: "Linux Essentials",
    date: "April 2025",
    icon: "🔵",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
    certImage: "images/certifications/Cisco Linux Essentials.jpg",
    certUrl: "images/certifications/Cisco Linux Essentials.jpg"
  },
  {
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    date: "April 2025",
    icon: "🔵",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
    certImage: "images/certifications/Cisco Introduction to Cybersecurity.jpg",
    certUrl: "images/certifications/Cisco Introduction to Cybersecurity.jpg"
  },
  {
    issuer: "Cisco",
    title: "Networking Basics",
    date: "May 2025",
    icon: "🔵",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
    certImage: "images/certifications/Cisco Networking Basics.jpg",
    certUrl: "images/certifications/Cisco Networking Basics.jpg"
  }
  // Add more certifications:
  // { issuer: "Google", title: "...", date: "...", icon: "🟢", logoUrl: "...", certImage: "images/certifications/file.jpg", certUrl: "images/certifications/file.jpg" }
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
