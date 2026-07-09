# Angelo James Romerosa — Portfolio

Personal portfolio and resume website built with plain HTML, CSS, and JavaScript. No frameworks or build tools required.

---

## Project Structure

```
Per/
├── index.html                    # Page structure (HTML only)
├── images/
│   ├── hero/                     # Your profile photo goes here
│   ├── certifications/           # Certification logos (if using local files)
│   ├── projects/                 # Project screenshots
│   └── stack/                    # Tech stack icons (if using local files)
├── css/
│   ├── style.css                 # Entry point — imports all CSS files
│   ├── variables.css             # Theme colors (dark/light mode)
│   ├── base.css                  # Reset, body, particles, section wrappers
│   ├── navbar.css                # Navigation bar + theme toggle
│   ├── hero.css                  # Hero section + buttons
│   ├── timeline.css              # Education & Experience timeline
│   ├── certifications.css        # Certification cards
│   ├── projects.css              # Project cards
│   ├── stack.css                 # Tech stack grid
│   ├── contacts.css              # Contacts section + footer
│   └── responsive.css            # Mobile breakpoints
└── js/
    ├── data.js                   # YOUR CONTENT — edit this to update the site
    └── main.js                   # Rendering logic, typewriter, particles, theme toggle
```

---

## Modifying Each Section

Quick reference — files to edit per section:

| Section | Files to edit |
|---|---|
| Hero | `index.html`, `js/main.js` |
| Education & Experience | `js/data.js` |
| Certifications | `js/data.js` |
| Projects | `js/data.js`, `images/` folder |
| Tech Stack | `js/data.js` |
| Contacts | `index.html` |

---

### Hero

The hero is the full-screen intro at the top — your photo, name, role, bio, and buttons.

**To change your photo:**
1. Copy your image into `images/hero/` (e.g. `images/hero/photo.jpg`)
2. In `index.html`, find the `<img>` inside `.hero-photo`
3. Set `src="images/hero/photo.jpg"` and delete `style="display:none"`

```html
<!-- Before -->
<img src="" alt="Angelo James Romerosa" style="display:none" />

<!-- After -->
<img src="images/hero/photo.jpg" alt="Angelo James Romerosa" />
```

**To change your name, bio, or location:**
- Open `index.html`
- Edit the text inside `.hero-greeting`, `.hero-name`, `.hero-bio`, `.hero-location`

**To change the rotating job titles (typewriter effect):**
- Open `js/main.js`
- Edit the `roles` array near the top

```js
const roles = ["AI/ML Engineer", "Backend Developer", "Problem Solver", "Tech Enthusiast"];
//              ↑ add, remove, or rename any of these
```

**To link your resume:**
1. Copy your PDF into the project root (e.g. `resume.pdf`)
2. In `index.html`, find the Download Resume button
3. Change `href="#"` to `href="resume.pdf"`

---

### Education & Experience

**Files to edit:** `js/data.js` → `timelineData` array

Add a new object to the array. Entries display newest first (top of array = top of page).

```js
{
  date: "Jun 2025 – Present",
  title: "Job Title or Degree",
  subtitle: "Company or School · Type · Location · Mode",
  badge: "current"
  // badge options:
  //   "current"      → green highlight (use for your active role)
  //   "Internship"   → blue badge
  //   "Education"    → blue badge
  //   any other text → blue badge with that text
}
```

---

### Certifications

**Files to edit:** `js/data.js` → `certsData` array

```js
{
  issuer: "Google",               // shown in small caps above the title
  title: "Associate Cloud Engineer",
  date: "January 2026",
  icon: "🟢",                     // emoji shown when no logo image is set
  logoUrl: ""                     // optional: paste a direct URL to a logo image
                                  // e.g. "https://example.com/google-logo.png"
}
```

To find a logo URL: search the issuer name on [Wikimedia Commons](https://commons.wikimedia.org), open the SVG file, and copy its URL.

---

### Projects

**Files to edit:** `js/data.js` → `projectsData` array  
**Optional:** add screenshot images to an `images/` folder

```js
{
  title: "My Project Name",
  image: "images/screenshot.png",  // relative path to your screenshot
                                   // set to "" to show a placeholder instead
  tags: ["React", "Node.js", "MongoDB"],
  description: "What the project does in 1-2 sentences.",
  liveUrl: "https://myproject.netlify.app",  // set to "" to hide this button
  codeUrl: "https://github.com/AngeloJamesRomerosa/my-repo"  // set to "" to hide
}
```

**To add a screenshot:**
1. Copy your screenshot into `images/projects/` (e.g. `images/projects/project2.png`)
2. Set `image: "images/projects/project2.png"` in the project object in `js/data.js`

---

### Tech Stack

**Files to edit:** `js/data.js` → `stackData` array

```js
{
  label: "React",
  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  // iconUrl: paste a direct image URL — devicons CDN has most tech logos
  // If you can't find a logo URL, use iconClass instead:
  // iconUrl: "", iconClass: "fas fa-code"
}
```

**Finding a devicons URL:** go to [devicon.dev](https://devicon.dev), search your technology, click the icon, and copy the CDN URL.

---

### Contacts

**Files to edit:** `index.html`

Find the `#contacts` section and update:

```html
<!-- Email -->
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>

<!-- Phone -->
<span>+63 XXX XXX XXXX</span>

<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" ...>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
```

---

## Running Locally

Because the files reference each other, open via a local server — not by double-clicking `index.html`.

**VS Code (recommended):**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

**Python (port 5500):**
```bash
python -m http.server 5500
# then open http://localhost:5500
```

**Python (port 8000):**
```bash
python -m http.server 8000
# then open http://localhost:8000
```

**To stop the server:** press `Ctrl+C` in the terminal.

On Windows, `Ctrl+C` propagates to the entire process group, so both the reloader and worker processes are cleanly killed. If you need to stop it programmatically instead:

```python
import os, signal
os.kill(0, signal.CTRL_C_EVENT)
```

---

## Deploying to Netlify

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **Add new site → Deploy manually**
3. Drag and drop the entire project folder
4. Done — Netlify gives you a live URL instantly

To connect a custom domain, go to **Site settings → Domain management**.

---

## Customizing Colors

Open `css/variables.css` to change the color scheme.

```css
:root[data-theme="dark"] {
  --accent: #3b82f6;       /* main blue — change this to any color */
  --bg-primary: #080d1a;   /* page background */
  --bg-card: #0f1c30;      /* card background */
}
```
