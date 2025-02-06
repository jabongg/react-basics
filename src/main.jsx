import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Writer from './Writer.jsx'
import Counter from './Counter.jsx'
import Designer from './Designer.jsx';
import BackgroundChanger from './BackgroundChanger.jsx';
import PasswordGenerator from './PasswordGenerator.jsx';
import CurrencyConverter from './CurrencyConverter.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Github from './components/github/Github.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout> <Home /> </Layout>, // Wrap Home in Layout
    },
    {
      path:"about",
      element: <Layout><About /></Layout>, // Wrap About in Layout
    },
    {
      path:"contact",
      element: <Layout><Contact /></Layout>, // Wrap Contact in Layout
    },
    {
      path:"github",
      element: <Layout><Github /></Layout> // Wrap Github in Layout
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { <App /> } */}
    {/* <Writer /> */}
    {/* <Counter /> */}
    {/* <BackgroundChanger /> */}
    {/* <PasswordGenerator /> */}
    {/* <CurrencyConverter /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
