import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componeant/Main/Main.jsx';
import Header from './Componeant/Header/Header.jsx';
import Home from './Componeant/Home/Home.jsx';
import Login from './Componeant/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Header />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
