# Music Distribution Platform

A white-label music distribution platform built with Next.js 15, featuring a complete dashboard for managing music tracks with authentication, CRUD operations, and responsive design.

## Features

### Core Features ✅
- **Authentication System**: Mock login with session management using localStorage
- **Dashboard**: Display tracks in a responsive table with search and filter functionality
- **Track Upload**: Form to add new tracks with validation
- **Track Details**: Dynamic route to view individual track information
- **API Routes**: RESTful API endpoints for track management
- **Responsive Design**: Mobile, tablet, and desktop friendly

### Technical Features ✅
- **Next.js 15**: Latest stable version with App Router
- **React Hooks**: useState, useEffect for state management
- **Dynamic Routing**: `/track/[id]` for track details
- **API Integration**: Mock backend with Next.js API routes
- **Tailwind CSS**: Modern, responsive styling
- **Form Validation**: Client-side validation for upload form
- **Search & Filter**: Real-time search and status filtering
- **Session Management**: Persistent login state

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
│   │   │   └── page.jsx              # Dashboard with tracks table
│   │   ├── login/
│   │   │   └── page.jsx              # Login form
│   │   ├── upload/
│   │   │   └── page.jsx              # Track upload form
│   │   ├── track/
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Track details page
│   │   ├── globals.css               # Global styles
│   │   ├── layout.js                 # Root layout
│   │   └── page.js                   # Home page (redirects)
│   └── data/
│       └── tracks.js                 # Shared data store
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd music
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Usage

1. **Login**: Enter any username and password to access the platform
2. **Dashboard**: View all tracks with search and filter options
3. **Upload**: Add new tracks using the upload form
4. **Details**: Click "View Details" to see individual track information
5. **Navigation**: Use the navigation links to move between pages

## API Endpoints

### GET /api/tracks
Returns all tracks
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

### POST /api/tracks
Creates a new track
```json
{
  "title": "New Track",
  "artist": "Artist Name",
  "releaseDate": "2024-12-01",
  "genre": "Rock"
}
```

### GET /api/tracks/[id]
Returns a specific track by ID

## Features Implemented

### ✅ Required Features
- [x] Login Page with mock authentication
- [x] Dashboard with tracks table (Title, Artist, Release Date, Status)
- [x] Track Upload form with validation
- [x] Track Details page with dynamic routing
- [x] Next.js API routes for data management
- [x] React functional components and hooks
- [x] Responsive design for all screen sizes

### ✅ Bonus Features
- [x] Search functionality on dashboard
- [x] Filter by track status
- [x] Session persistence with localStorage
- [x] Modern UI with Tailwind CSS
- [x] Form validation and error handling
- [x] Loading states and user feedback

## Technical Implementation

### State Management
- **useState**: Form data, loading states, error handling
- **useEffect**: Authentication checks, data fetching
- **localStorage**: Session persistence

### Routing
- **App Router**: Next.js 15 App Router for file-based routing
- **Dynamic Routes**: `/track/[id]` for track details
- **Navigation**: Programmatic navigation with useRouter

### API Design
- **RESTful**: GET/POST endpoints following REST conventions
- **Error Handling**: Proper HTTP status codes and error messages
- **Data Validation**: Server-side validation for POST requests

### UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper labels, semantic HTML
- **User Feedback**: Loading states, success/error messages
- **Modern Design**: Clean, professional interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality
- ESLint configuration for Next.js
- Consistent code formatting
- Proper error handling
- TypeScript-ready structure

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

### Build for Production
```bash
npm run build
npm run start
```

## Future Enhancements

- [ ] Real authentication with JWT tokens
- [ ] File upload for actual audio files
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User roles and permissions
- [ ] Advanced filtering and sorting
- [ ] Track analytics and statistics
- [ ] PWA capabilities
- [ ] Real-time updates with WebSockets

## License

This project is created for assessment purposes.

## Contact

For questions or support, please contact the development team.