# Roman Lotsman — One-Screen Portfolio

An **original, single-page interactive portfolio** with a dashboard overview that fits in one desktop viewport. Inspired by the *idea* of interactive, section-based personal sites (e.g., masonliu.dev) but not copied from any site. Clicking navigation switches views inside the same page instead of vertically scrolling through multiple long sections.

## Contents

- `index.html` — all six views (Overview, Work experience, Projects, Skills, Education, Resume)
- `styles.css` — responsive layout, visual system, project image hover-zoom
- `script.js` — single-page navigation (`#experience`, `#projects`, ...), filters, card rendering
- `assets/` — original illustration assets and portrait extracted from the newest user-supplied resume
- `Roman-Lotsman-Resume.pdf` — **new, truthful portfolio resume** and embedded preview

## Deploy for free to Vercel

1. Unzip the archive.
2. Open your existing portfolio repository folder (do NOT delete `.git`). Replace its `index.html`, `styles.css`, `script.js`, `assets/`, and `Roman-Lotsman-Resume.pdf` with the corresponding files in this ZIP.
3. Run:

   ```bash
   git add .
   git commit -m "Build one-screen interactive portfolio with updated resume"
   git push origin main
   ```

   If the branch is not `main`, check with `git branch --show-current`, and push that name.
4. Vercel should redeploy the connected repository. For a new Vercel project choose **Framework Preset: Other**, **Root Directory: .**, and leave build command blank. This is a static site without npm dependencies.
5. For local testing from the project root: `python3 -m http.server 8000`, then open `http://localhost:8000`.

## What changed compared to the previous portfolio

- Desktop first screen shows profile, an engineering snapshot, project previews, skill highlights, and the education / resume panel **without vertical page scrolling**.
- The six views appear within the same screen when clicked. A long-page scroll isn't required on desktop; content-rich individual views can scroll *inside their panel* when necessary.
- Mobile naturally scrolls because preventing scrolling on small screens would hide content.
- Project images enlarge on hover and open the actual project/product URLs when clicked.
- Added a clear **Work experience** tab and a **Resume** tab with embedded PDF and working download link.
- Education updated to **Sept 2015 – July 2019**, per the latest uploaded resume (the previous version incorrectly used 2019–2022).
- User-provided portrait reused from that PDF; contact details and technical skills updated.
- Five project entries: OutcomeOS, TeamFlow, DecisionGap OS (independent builds); EPAM StatGPT and AI DIAL (external research/case studies).

## Important distinction: claims in the uploaded CV

The uploaded PDF listed SoftServe (2019–2022) and EPAM (2022–present) as employers, but the user explicitly stated earlier in this chat that they **never worked at these companies or contributed to the two EPAM products**. Therefore, this website and its downloadable PDF do **not** repeat those employer claims as factual work history. Instead, the Work experience tab documents independent engineering activity and clearly labeled technical case studies. **Do not replace the bundled resume with false employment or contribution claims.** Real employers, dates, and contributions can be added whenever substantiated.

The university and education dates appear as self-reported details from the user's new PDF and were not independently verified.

## Public URLs

- OutcomeOS: https://outcomeos-ruddy.vercel.app/
- TeamFlow: https://team-flow-rose.vercel.app/
- DecisionGap OS: https://decision-gap-os.vercel.app/
- StatGPT (EPAM product): https://statgpt.dialx.ai/
- AI DIAL (EPAM product): https://dialx.ai/

### Accessibility / compatibility

- Standard HTML, CSS, JavaScript. No framework required.
- Keyboard links and focus styles; Escape returns to Overview.
- Honors reduced-motion settings.
- Browser PDF preview with open/download fallback.
- Responsive down to mobile; font services are optional and system fonts substitute when offline.
