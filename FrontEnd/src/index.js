import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import "./index.css"
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import Root from "./components/RootLayout.js"
import Products from "./components/Products.jsx"
import About from "./components/about.jsx"
const user = false;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path = "/" element={<Header/>}>
        <Route index element={<Hero />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<div><About/></div>} />
      
      
      </Route>
         
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path = "auth/google/home" element = {<div>google auth</div>}/>

    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

