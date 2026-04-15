# REPBLIK23 Website Project

A React-based company website for REPBLIK23, including:
- Landing page with services, gallery, and contact sections
- Company profile/details page with timeline, mission, vision, and embedded company vlog
- Responsive styling for desktop and mobile

## Project Layout

- `frontend/` - Main React application
- `requirements.txt` - Python environment snapshot (not required to run the React frontend)

## Tech Stack

- React (Create React App)
- React Router
- React Bootstrap + Bootstrap + Bootswatch
- Custom CSS

## Prerequisites

Install these before running:

1. Node.js (recommended: LTS, v18 or newer)
2. npm (comes with Node.js)

Check versions:

- `node -v`
- `npm -v`

## Quick Start (Windows PowerShell)

From the repository root (`R23`):

1. Go to the frontend folder
   - `cd frontend`

2. Install dependencies
   - `npm install`

3. Start development server
   - `npm start`

4. Open in browser
   - `http://localhost:3000`

## Available Scripts

Run all scripts inside the `frontend` folder.

### Start Development Server

- Command: `npm start`
- What it does:
  - Runs the app in development mode
  - Automatically reloads when files change

### Create Production Build

- Command: `npm run build`
- Output folder: `frontend/build`
- What it does:
  - Generates optimized static assets for deployment

### Run Tests

- Command: `npm test`
- What it does:
  - Opens the test runner in watch mode

### Eject (Not Recommended)

- Command: `npm run eject`
- Note:
  - This is irreversible and usually not needed

## Running From a Fresh Clone

If this is your first time running the project:

1. Open terminal in project root
2. `cd frontend`
3. `npm install`
4. `npm start`

## Build and Preview Production Locally

1. `cd frontend`
2. `npm run build`
3. Install a static server if needed:
   - `npm install -g serve`
4. Serve the build:
   - `serve -s build`

## Routes

Current main routes:

- `/` - Home/Landing page
- `/details` - Company profile page

## Static Assets

Images and static files are located in:

- `frontend/public/images/`

If you add new images, place them there and reference with paths like:

- `/images/your-image.jpg`

## Troubleshooting

### 1) `npm start` exits with an error

Try:

1. Ensure you are in `frontend`
2. Reinstall dependencies:
   - `npm install`
3. If still failing, clean install:
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

### 2) Port 3000 already in use

Use another port:

- PowerShell: `$env:PORT=3001; npm start`

### 3) Build fails after CSS edits

Most common cause is unmatched braces in media queries.

Try:

1. Check recently edited CSS blocks
2. Run `npm run build` again after fixing syntax

### 4) Embedded Facebook reel/video is not visible

Possible causes:

- Browser privacy settings or tracking protection
- Third-party cookies blocked
- Regional/network restrictions

Fallback:

- Open the direct Facebook reel link in a new tab

## Development Notes

- Keep desktop styles unchanged when making mobile fixes unless requested
- Prefer mobile-only media query overrides for responsive improvements
- Verify changes using both:
  - `npm start` (behavior/live checks)
  - `npm run build` (production compile check)

## License

No license file is currently defined in this repository. Add one if needed.
