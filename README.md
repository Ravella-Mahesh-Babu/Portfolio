# Ravella Mahesh Babu - Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Responsive design with dark/light mode

## Project Structure

```
portfolio/
|- public/
|  |- Ravella_Mahesh_Babu_Resume.txt
|- src/
|  |- components/
|  |  |- layout/
|  |  |- ui/
|  |- data/
|  |- hooks/
|  |- sections/
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- tailwind.config.js
|- postcss.config.js
|- netlify.toml
|- vercel.json
```

## Installation

```bash
npm install
```

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form id from your endpoint (`https://formspree.io/f/YOUR_FORM_ID`).
3. Create a local env file:

```bash
cp .env.example .env
```

4. Set the id:

```bash
VITE_FORMSPREE_ID=YOUR_FORM_ID
```

5. Restart `npm run dev` after changing env values.
6. On Vercel/Netlify, add `VITE_FORMSPREE_ID` in project environment variables.

## Run in Development

```bash
npm run dev
```


## Production Build

```bash
npm run build
npm run preview
```

## Deployment

### GitHub Pages

Live URL: https://Ravella-Mahesh-Babu.github.io/portfolio/

1. Push this repo to `Ravella-Mahesh-Babu/portfolio`.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Add a repository secret named `VITE_FORMSPREE_ID` with value `mgaanqdn`.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow).

`vite.config.js` already uses `base: '/portfolio/'`.

### Vercel / Netlify

- `vercel.json` and `netlify.toml` are included if you prefer those hosts.
- Set `VITE_FORMSPREE_ID` in the host env vars.

## Customization Notes

- Update contact/social links in `src/data/portfolioData.js`.
- Resume PDF lives at `public/resume/Ravella_Mahesh_Babu_Resume.pdf`.
