HERO.IO — App Marketplace (React)
Features

Browse & Search
- View all available applications
- Live search with instant filtering
- Beautiful responsive grid layout

App Details Page
- Full app description
- Ratings graph visualization
- Download count, size, developer info
- Install button with success modal

Install / Uninstall (Persistent)
- Installed apps are saved using localStorage
- Dedicated Installed Apps page
- Uninstall confirmation modal
- Sorting by downloads (Low→High / High→Low)

Smart Error Handling
- Custom 404 Page
- Custom App Not Found Display for searches
- Clear navigation back to Home

Tech Stack

React + React Router — UI + Navigation
Tailwind CSS — Styling
Axios — Fetching static JSON
LocalStorage — Persist installed apps
Custom Hooks & Context — State Management

Installation & Setup

1. Clone the repo
git clone https://github.com/habibsunny204/PH-Assignment-08.git
cd hero-apps

2. Install dependencies
npm install

3. Run the project
npm run dev

Runs at: http://localhost:5173/

Project Structure

src/
 - assets/                 Icons & images
 - components/             Reusable UI
 - context/                InstalledApps context
 - hooks/                  Custom hooks
 - pages/                  App pages
 - routes/                 Router setup
 - ui/                     UI Images
 

Pull requests welcome!
License

Open-source — free to use and modify.

