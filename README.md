# Roman Lotsman — Personal Portfolio

A complete static portfolio website with live project links, actual project screenshots, PDF guides, project detail dialogs, hover zoom, and email-copy interaction.

## Included

- `index.html`: portfolio content and links
- `style.css`: responsive design and hover effects
- `app.js`: project details and email-copy interaction
- `images/`: screenshots captured from the deployed projects
- `guides/`: supplied project PDF guides
- `vercel.json`: static hosting configuration

No npm installation, build command, database, API key, or environment variable is needed. This is plain HTML, CSS, and JavaScript.

## Preview locally

Open a terminal inside this folder and run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Stop with Ctrl+C. Email copying works on localhost or HTTPS.

## Push to a new GitHub repository

1. Unzip this download and open the `Roman-Lotsman-Portfolio` folder.
2. Create an EMPTY GitHub repository named `roman-lotsman-portfolio`. Do not initialize it with a README, license, or .gitignore.
3. In Terminal, change into the extracted folder. On macOS you can type `cd `, drag the folder into Terminal, and press Return.
4. Run these commands:

```bash
git init
git add .
git commit -m "Add Roman Lotsman portfolio"
git branch -M main
git remote add origin https://github.com/lotsmanroman781-gif/roman-lotsman-portfolio.git
git push -u origin main
```

Use your actual repository URL if its name differs. These instructions assume a new, empty repository. GitHub authentication may be requested by your Git credential manager.

## Deploy on Vercel

1. Sign into Vercel and choose Add New → Project.
2. Import the GitHub repository.
3. Set Framework Preset to **Other**.
4. Leave Root Directory at the repository root.
5. Leave Build Command blank (disable its override if present).
6. Set Output Directory to `.` (a single dot; override if necessary).
7. Leave Install Command blank and add no environment variables.
8. Click Deploy and open the returned deployment URL.

Check each project image, the Visit live project buttons, and the PDF guide links after deployment. Later pushes to the connected production branch normally trigger new Vercel deployments.

## Live projects

- TeamFlow: https://team-flow-rose.vercel.app/
- DecisionGap OS: https://decision-gap-os.vercel.app/
- OutcomeOS: https://outcomeos-ruddy.vercel.app/

TeamFlow screenshot shows the interactive demo with sample data. DecisionGap screenshot shows the public fictional storefront. OutcomeOS screenshot shows its public landing page. These are captures of actual deployed pages, not evidence of backend or integration verification.

## Edit your portfolio

Update personal text, email, links, and project cards in `index.html`. Project detail text and dialog links are in `app.js`. Replace screenshots in `images/` to update the previews, and replace files in `guides/` to update documentation.

This export includes only portable portfolio files; it does not contain Sites metadata, Git credentials, or the source code of the three linked applications. The supplied PDF guides retain their original contents and embedded links.
