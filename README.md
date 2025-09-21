

# Music Distribution Platform

A modern, full-stack, white-label music distribution platform built with Next.js 15, featuring a complete dashboard for managing tracks, authentication, CRUD operations, and responsive design.

This project demonstrates clean architecture, modern web development practices, and user-centered design principles—making it suitable for production use, academic submission, or portfolio showcase.

## Features

### Core Features

- **Authentication System**: Mock login with session persistence (localStorage)
- **Dashboard**: Responsive tracks table with search and filter options
- **Track Upload**: Intuitive form to add new tracks with validation
- **Track Details**: Dynamic route to view individual track info (`/track/[id]`)
- **API Routes**: RESTful endpoints for CRUD operations
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop

### Technical Features

- **Next.js 15 (App Router)**: Latest stable version with modern routing
- **React 19**: Functional components and hooks (useState, useEffect)
- **Tailwind CSS**: Utility-first styling with responsive design
- **State Management**: React hooks for clean, lightweight management
- **Form Validation**: Client-side validation with error handling
- **Session Management**: Persistent login state using localStorage
- **Real-time Search & Filter**: Instant data filtering for better UX

## Project Structure

```
music/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tracks/
│   │   │       ├── route.js          # GET/POST /api/tracks
│   │   │       └── [id]/
│   │   │           └── route.js      # GET /api/tracks/[id]
│   │   ├── dashboard/
│   │   │   └── page.jsx              # Dashboard page
│   │   ├── login/
│   │   │   └── page.jsx              # Login page
│   │   ├── upload/
│   │   │   └── page.jsx              # Track upload page
│   │   ├── track/
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Track details page
│   │   ├── globals.css               # Global styles
│   │   ├── layout.js                 # Root layout
│   │   └── page.js                   # Home page (redirects)
│   └── data/
│       └── tracks.js                 # Mock track data store
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## Data Model

```javascript
Track Object:
{
  id: number,
  title: string,
  artist: string,
  releaseDate: string (YYYY-MM-DD),
  genre: string,
  status: "Published" | "Draft" | "Submitted"
}
```

## API Endpoints

- **GET /api/tracks** → Retrieve all tracks
- **POST /api/tracks** → Add a new track
- **GET /api/tracks/[id]** → Retrieve details of a specific track

**Example Response (GET /api/tracks):**

```json
[
  {
    "id": 1,
    "title": "Dreamscape",
    "artist": "Aria Smith",
    "releaseDate": "2024-05-10",
    "genre": "Pop",
    "status": "Published"
  }
]
```

## User Journey

1. **Login** → Enter any username/password (mock authentication)
2. **Dashboard** → View all tracks in a responsive table
3. **Search & Filter** → Find tracks by title, artist, or status
4. **Upload** → Add new tracks with validation
5. **Details** → Click a track to see detailed info
6. **Navigation** → Switch seamlessly between all features

## Key Benefits

### For Users

- Clean, intuitive interface
- Works on all devices (responsive)
- Fast, modern performance
- Real-time updates

### For Developers

- Scalable and clean architecture
- Latest React & Next.js stack
- Ready for TypeScript integration
- Easy to extend for real-world apps

## Use Cases

- **Independent Artists** → Manage personal catalogs
- **Record Labels** → Track multiple artists/releases
- **Distributors** → White-label solution for clients
- **Music Managers** → Organize and monitor statuses
- **Portfolio/Demo** → Showcase full-stack web development

## Technical Highlights

- **Next.js 15 App Router** for modern routing
- **React 19 Hooks** for state and side-effects
- **Tailwind CSS** for rapid responsive UI
- **RESTful API** design with mock serverless functions
- **Error Handling** with HTTP status codes
- **Persistent Authentication** with localStorage

## Future Enhancements

- Real authentication (JWT, OAuth)
- Database integration (PostgreSQL / MongoDB)
- File upload for actual music/audio files
- Advanced analytics & reporting
- Multi-user roles & permissions
- Real-time updates with WebSockets
- Progressive Web App (PWA) support

## Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd music

# Install dependencies
npm install
# or
yarn install

# Start dev server
npm run dev
# or
yarn dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## Deployment

Supports deployment on:

- **Vercel (recommended)**
- Netlify
- AWS Amplify
- Railway
- Heroku

Build for production:

```bash
npm run build
npm run start
```

## License

This project was created for educational and assessment purposes.


