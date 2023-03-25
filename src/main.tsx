import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import CreateSpinel from './pages/CreateSpinel'
import MarkdownSpinel from './pages/MarkdownSpinel'
import PlainSpinel from './pages/PlainSpinel'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found <Link to={"/"}>Home</Link></div>
  },
  {
    path: "/new",
    element: <CreateSpinel />
  },
  {
    path: "/all",
    element: <div>all ur spinels</div>
  },
  {
    path: "/markdown",
    element: <MarkdownSpinel />
  },
  {
    path: "/plain",
    element: <PlainSpinel />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
