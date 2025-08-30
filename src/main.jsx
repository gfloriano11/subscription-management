import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import Menu from './pages/Menu.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import SelectCategory from './pages/SelectCategory.jsx'
import AddSubscription from './pages/AddSubscription.jsx'
import AddSubscriptionInfo from './pages/AddSubscriptionInfo.jsx'
import Subscription from './pages/Subscription.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/home',
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'add', element: <SelectCategory/> },
      { path: 'add/:category', element: <AddSubscription/> },
      { path: 'add/:category/:subscription', element: <AddSubscriptionInfo/> },
      { path: 'subscription/:id', element: <Subscription/>}
    ]
  },
  {
    path: '/profile',
    element: <App/>,
    children: [
      { index: true, element: <Profile/> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
