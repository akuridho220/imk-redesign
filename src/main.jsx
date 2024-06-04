import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import './index.css'
import 'flowbite'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='blogs' element={<Blog />}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
