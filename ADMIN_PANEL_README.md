# Admin Panel Documentation

## Overview
The admin panel provides a complete content management system for the Global Robotics Academy website. It allows administrators to manage competitions, programs, teams, gallery items, contact submissions, and admin users.

## Access
- **Login URL**: `/admin/login`
- **Dashboard URL**: `/admin`
- **Authentication**: JWT token-based authentication

## Features

### 1. Dashboard (`/admin`)
- Overview statistics (competitions, programs, teams, gallery, contact submissions)
- Quick action buttons to add new content
- System information display

### 2. Competitions Management (`/admin/competitions`)
- **CRUD Operations**: Create, Read, Update, Delete competitions
- **Fields**:
  - Name (required)
  - Description (required)
  - Category (Robotics, AI, STEM, Coding, Drone, Innovation)
  - Eligibility
  - Age Groups (comma-separated)
  - Registration Requirements
  - Competition Details
  - Order (for sorting)
  - Active status toggle

### 3. Programs Management (`/admin/programs`)
- **CRUD Operations**: Create, Read, Update, Delete programs
- **Fields**:
  - Name (required)
  - Description (required)
  - Category (Drone Competition, Innovation Challenge, Coding Competition, STEM Competition, AI Competition, Robotics Competition)
  - Duration
  - Prerequisites (comma-separated)
  - Learning Outcomes (comma-separated)
  - Order (for sorting)
  - Active status toggle

### 4. Teams Management (`/admin/teams`)
- **CRUD Operations**: Create, Read, Update, Delete teams
- **Fields**:
  - Name (required)
  - Description (required)
  - Category (Junior, Senior, College, Professional)
  - Achievements (one per line)
  - Members (one per line: name,role)
  - Order (for sorting)
  - Active status toggle

### 5. Gallery Management (`/admin/gallery`)
- **CRUD Operations**: Create, Read, Update, Delete gallery items
- **Fields**:
  - Title (required)
  - Description (required)
  - Category (Training, Team Activities, Robot Testing, Competition, Other)
  - Type (Image or Video)
  - Image URL (for images)
  - Video URL (for videos)
  - Order (for sorting)
  - Active status toggle

### 6. Contact Submissions (`/admin/contact`)
- **View**: Read-only view of contact form submissions
- **Features**:
  - View full message details
  - Reply via email (opens mail client)
  - Delete submissions
- **Fields Displayed**:
  - Name
  - Email
  - Phone (if provided)
  - Subject
  - Message
  - Submission date

### 7. Admin Users Management (`/admin/users`)
- **CRUD Operations**: Create, Read, Update, Delete admin users
- **Fields**:
  - Username (required)
  - Email (required)
  - Password (required for new users, optional for updates)
  - Role (Admin or Super Admin)
- **Security**: Passwords are hashed using bcrypt

## File Structure

```
frontend/src/
├── components/admin/
│   ├── AdminLayout.jsx       # Admin panel layout with sidebar
│   ├── AdminLayout.css       # Layout styles
│   └── ProtectedRoute.jsx    # Authentication wrapper
├── pages/admin/
│   ├── Dashboard.jsx         # Dashboard home page
│   ├── Dashboard.css         # Dashboard styles
│   ├── Login.jsx             # Admin login page
│   ├── Login.css             # Login styles
│   ├── Competitions.jsx      # Competitions management
│   ├── Programs.jsx          # Programs management
│   ├── Teams.jsx             # Teams management
│   ├── Gallery.jsx           # Gallery management
│   ├── Contact.jsx           # Contact submissions view
│   ├── Users.jsx             # Admin users management
│   └── shared.css            # Shared styles for all admin pages
└── services/
    ├── api.js                # API service with auth token handling
    └── adminService.js       # Admin-specific API calls
```

## Backend API Endpoints

### Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `GET /` - Get all admins
- `GET /:id` - Get admin by ID
- `POST /` - Create new admin
- `PUT /:id` - Update admin
- `DELETE /:id` - Delete admin

### Other Routes
- `/api/competitions` - Competitions CRUD
- `/api/programs` - Programs CRUD
- `/api/teams` - Teams CRUD
- `/api/gallery` - Gallery CRUD
- `/api/contact` - Contact submissions

## Authentication Flow

1. User navigates to `/admin/login`
2. Enters username and password
3. Backend validates credentials and returns JWT token
4. Token is stored in localStorage as `adminToken`
5. Token is included in all subsequent API requests
6. Protected routes check for token presence
7. On 401 error, user is redirected to login

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Initial Setup

1. **Create first admin user** (via backend or direct database):
   ```javascript
   {
     username: "admin",
     email: "admin@example.com",
     password: "your-secure-password",
     role: "super-admin"
   }
   ```

2. **Start the backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Start the frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the admin panel**:
   - Navigate to `http://localhost:5173/admin/login`
   - Login with your admin credentials

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected routes
- Automatic token expiration handling
- 401 error redirects to login
- Password field optional on updates (prevents accidental password changes)

## Responsive Design

The admin panel is fully responsive and works on:
- Desktop (>= 768px)
- Tablet (< 768px)
- Mobile

Sidebar collapses on smaller screens for better mobile experience.

## Customization

### Colors
The admin panel uses a dark theme with accent colors. You can customize colors in:
- `AdminLayout.css` - Sidebar and header colors
- `shared.css` - Button and badge colors

### Layout
- Sidebar width: 260px (open), 70px (collapsed)
- Header height: Fixed with padding
- Content area: Scrollable

## Troubleshooting

### Login Issues
- Check that backend is running
- Verify admin user exists in database
- Check JWT_SECRET in backend environment
- Clear localStorage and try again

### API Errors
- Ensure VITE_API_URL is set correctly
- Check CORS configuration in backend
- Verify MongoDB connection

### Route Issues
- Ensure all admin routes are protected
- Check ProtectedRoute component
- Verify token storage in localStorage

## Future Enhancements

Potential improvements:
- Image upload functionality (currently uses URLs)
- Role-based access control (RBAC)
- Activity logging
- Export data to CSV
- Bulk operations
- Search and filtering
- Pagination for large datasets
- Real-time notifications
- Two-factor authentication
