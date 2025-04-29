import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import Blog from './Pages/Blog'
import Projets from './Pages/Projets'
import Article from './Pages/Article'
import ComingSoon from './Pages/ComingSoon'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <Article /> },
      { path: "/projets", element: <Projets /> },
      { path: "/projets/:id", element: <ComingSoon /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
