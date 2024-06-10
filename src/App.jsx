import Navbar from "./components/Navbar"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer"
import { Outlet} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* tambahin route yg lain */}
      </Routes>
      <Outlet />
      <Footer />
    </div>
  )
}