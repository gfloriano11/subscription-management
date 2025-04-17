import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import SelectCategory from './pages/SelectCategory.jsx'
import AddSubscription from './pages/AddSubscription.jsx'
import AddSubscriptionInfo from './pages/AddSubscriptionInfo.jsx'
import Menu from './pages/Menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>
  },
  {
    path: '/home',
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'add', element: <SelectCategory/> },
      { path: 'add/:category', element: <AddSubscription/> },
      { path: 'add/:category/:subscription', element: <AddSubscriptionInfo/> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
