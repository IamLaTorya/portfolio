# LaTorya Hoyle-Sadler | ToyMind Interactive Developer Portfolio
## Overview
This project is a responsive Single Page Application (SPA) built with React and Vite to showcase my software engineering projects, technical growth, and interactive development philosophy. 

### Features
------
- React Router single-page navigation
- Dynamic GitHub API project gallery
- Searchable projects
- Dynamic project detail pages using `useParams()`
- Custom `useFetch`
- Loading and error state management 
- Interactive Experience page featuring:
    - Developer Journey
    - Skill Tree
    - ToyMind Interactive Achievement Hall
- Controlled Contact form with real-time validation
- Dark/Light mode toggle
- Responsive design

### Technologies Used
------
- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- GitHub REST API

### Architecture
------
#### Data Flow
GitHub API → `useFetch` → Projects → Project Cards → Project Details (`/projects/:id`)

#### Component Structure
- `components/` - reusable UI
- `pages/` - application views
- `hooks/` - custom hooks
- `data/` - project data
- `assets/` - images and media

#### Hook Cycle
The custom `useFetch` hook uses `useEffect()` with a dependency array to fetch data while preventing infinite render loops. React state (`useState`) manages application state including loading, errors, search filtering, dark mode, and controlled form inputs.

### Self-Audit
------
- ✅ Zero console errors
- ✅ Zero infinite re-render loops
- ✅ React Router navigation without page reloads
- ✅ Responsive layouts
- ✅ Real-time form validation
- ✅ Production build completed successfully

### Live Demo
<!-- Live Site: will go here -->
GitHub: [Portfolio Repository](https://github.com/IamLaTorya/portfolio)

