# Roman Lotsman — Updated Portfolio

A responsive, static HTML/CSS/JavaScript portfolio ready for deployment to Vercel with **Framework Preset: Other**. No installation or build command is required.

## Deployment / replacing your old portfolio

1. Download this ZIP and extract it.
2. Open a terminal inside your existing cloned Git repository (`roman-lotsman-portfolio`).
3. Copy `index.html`, `styles.css`, `script.js`, and the `assets/` folder from the ZIP into your repository root. Keep your existing `.git` directory intact.
4. Run:
   ```bash
   git add .
   git commit -m "Update portfolio from resume and add AI platform case studies"
   git push origin main
   ```
   If your branch is not `main`, use `git branch --show-current` and push that branch instead.
5. Vercel will normally redeploy automatically if the existing project is linked to this repository. Otherwise import your repository in Vercel, choose **Other**, set root to `./`, and leave the Build Command and Output Directory at defaults.

To test locally, open `index.html` in your browser or run `python3 -m http.server 8000` in the extracted folder.

## Changes included

- Updated identity, verified PDF source details (email, subject areas, listed education).
- Added StatGPT and AI DIAL as public **industry case studies**, with official URLs and EPAM attribution.
- Preserved independent projects: OutcomeOS, TeamFlow and DecisionGap OS.
- Project illustrations scale on hover; clicking opens the corresponding official website.
- Responsive navigation, project filters, accessibility improvements, and background information adapted from the supplied resume.
- No frontend dependencies and no API secrets.

## Important factual checks before publishing

The uploaded resume lists employment at **SoftServe** and **EPAM Systems**, but you stated in this conversation that you did **not** work for those companies. Therefore this website intentionally does **not** claim those employment records or attribute the companies' proprietary/open-source projects to you. The projects appear as separately labeled public case studies.

The resume also states a B.Sc. at KPI from 2019 to 2022. That information is reproduced from your document but has not been independently verified. It may be worth confirming the exact credential and dates before posting publicly.

The original supplied resume is **not** bundled as a public download, because it contains employment and project authorship claims you said were not accurate. After updating the resume to reflect verified experience, you can optionally add that revised file and a download link.

Links to independent project deployments were taken from earlier conversation and have not been live-tested from this environment. Please open them manually before publication. Social link and email are configurable in `index.html`.

## Structure

```
index.html
styles.css
script.js
assets/
  favicon.svg
  preview-og.svg
  outcomeos.svg
  teamflow.svg
  decisiongap.svg
  statgpt.svg
  aidial.svg
```

Illustrative screenshots in `assets` were newly created for this portfolio and are *not* screenshots of external products.
