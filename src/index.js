import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import Blog from './Pages/Blog'
import Article from './Pages/Article'
import ComingSoon from './Pages/ComingSoon'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Project from './Pages/Project'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <Article /> },
      { path: "/projects", element: <Project /> },
      { path: "/projects/:id", element: <ComingSoon /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
