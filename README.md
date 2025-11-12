# Entertainment Web App

A modern, full-stack entertainment web application built with Next.js that allows users to browse, search, and bookmark movies and TV series. Features a beautiful, responsive UI with trending content carousel and personalized bookmark management.

## 🌐 Live Site

- Deployed on Vercel: [entertainment-web-app-three-zeta.vercel.app](https://entertainment-web-app-three-zeta.vercel.app/)

## 🚀 Features

- **Browse Content**: View movies and TV series with detailed information
- **Trending Section**: Interactive carousel showcasing trending content
- **Search Functionality**: Search across all movies and TV series
- **Bookmarking**: Save your favorite movies and TV series for later
- **User Authentication**: Secure login and registration with JWT
- **Logout Functionality**: Secure logout with session termination
- **Responsive Design**: Fully responsive UI that works on all devices
- **Category Filtering**: Filter content by Movies, TV Series, or view all
- **Bookmark Management**: Separate views for bookmarked movies and TV series

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **UI Library**: React 19.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken) + bcrypt
- **Carousel**: Embla Carousel
- **Deployment**: Ready for Vercel deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database (local or cloud instance like MongoDB Atlas)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd enetertainment-web-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection URI.

4. **Set up the database**

   Ensure your MongoDB database is running and contains a database named `moviesDB` with a `movies` collection. The app expects movies with the following structure:

   ```typescript
   {
     _id: string;
     title: string;
     isTrending: boolean;
     isBookmarked: boolean;
     rating: string;
     thumbnail: {
       regular: {
         small: string;
         medium: string;
         large: string;
       };
       trending?: {
         small: string;
         large: string;
       };
     };
     year: number;
     category: "Movie" | "TV Series";
   }
   ```

## 🚀 Running the Application

1. **Development mode**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production build**

   ```bash
   npm run build
   npm start
   ```

3. **Linting**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
enetertainment-web-app/
├── app/
│   ├── (main)/              # Main application routes
│   │   ├── bookmarks/       # Bookmarks page
│   │   ├── movies/          # Movies page
│   │   ├── tv-series/       # TV Series page
│   │   ├── search/          # Search page
│   │   └── page.tsx         # Home page
│   ├── api/                 # API routes
│   │   ├── bookmark/        # Bookmark API
│   │   ├── login/           # Login API
│   │   ├── logout/          # Logout API
│   │   ├── movies/          # Movies API
│   │   └── register/        # Registration API
│   ├── login/               # Login page
│   └── register/            # Registration page
├── components/              # React components
│   ├── AuthComponent.tsx
│   ├── BookmarkController.tsx
│   ├── EmblaCarousel.tsx
│   ├── Header.tsx
│   ├── Logout.tsx
│   ├── MovieDetails.tsx
│   ├── MoviesList.tsx
│   ├── NavBar.tsx
│   ├── PlayDisplay.tsx
│   ├── Search.tsx
│   └── Trending.tsx
├── lib/
│   └── mongodb.ts          # MongoDB connection
├── public/
│   └── assets/             # Static assets (images, icons)
└── type.d.ts               # TypeScript type definitions
```

## 🎯 Key Features Explained

### Authentication

- Secure user registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Secure logout with session termination

### Bookmarking System

- Add/remove bookmarks for movies and TV series
- Persistent bookmarks stored in MongoDB
- Separate views for bookmarked content

### Trending Carousel

- Interactive carousel using Embla Carousel
- Displays trending movies and TV series
- Smooth scrolling and navigation

### Search

- Real-time search across all content
- Filter results by title
- Responsive search interface

## 🔐 API Endpoints

- `GET /api/movies` - Fetch all movies
- `GET /api/bookmark` - Get user bookmarks
- `POST /api/bookmark` - Add/remove bookmark
- `POST /api/login` - User login
- `POST /api/logout` - User logout (clears authentication token)
- `POST /api/register` - User registration

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom design system. The UI is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. Contributions are not currently accepted.

## 📧 Support

For issues or questions, please contact the project maintainer.

---

Built with ❤️ using Next.js and React
