# 📷 React Image Gallery
 
A responsive, paginated image gallery built with React. Fetches live photos from the [Lorem Picsum](https://picsum.photos) API and displays them in a clean dark UI with author credits.
 
## ✨ Features
 
- Browse hundreds of photos with **next / previous pagination**
- **Responsive grid layout** that adapts to any screen size
- Click any image to view the **original source**
- Author name displayed on every photo card
- Clean dark theme UI
## 🛠️ Tech Stack
 
- **React** — component-based UI
- **Axios** — API requests
- **Lorem Picsum API** — free photo library (`https://picsum.photos`)
- **CSS Grid** — responsive layout
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js (v16+)
- npm or yarn
### Installation
 
```bash
# Clone the repo
git clone https://github.com/your-username/react-image-gallery.git
 
# Navigate into the project
cd react-image-gallery
 
# Install dependencies
npm install
 
# Start the development server
npm start
```
 
The app will open at `http://localhost:3000`.
 
## 📁 Project Structure
 
```
src/
├── App.jsx        # Main gallery component
├── App.css        # Styles
└── index.js       # Entry point
```
 
## 🔌 API
 
This project uses the free [Lorem Picsum API](https://picsum.photos/v2/list).
 
```
GET https://picsum.photos/v2/list?page=1&limit=30
```
 
No API key required.
 
## 📸 Screenshots
 
![Gallery](public/assets/Screenshot%202026-04-19%20124130.png)
![Gallery](public/assets/Screenshot%202026-04-19%20124119.png)
 
## 📄 License
 
MIT