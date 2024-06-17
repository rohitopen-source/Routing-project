import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './pages/Blog';
import Blogdetails from './pages/Blogdetails';
import Error404 from './pages/Error404';
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes= createBrowserRouter(
  [
    {
      path:'/',
      element :<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'course',
      element:<Course/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'blog/:id',
      element:<Blogdetails/>
    },
    {
      path:'*',
      element:<Error404/>
    }
  ]
)
root.render(
  <React.StrictMode>
   <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
