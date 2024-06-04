import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Navbar />
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to=""></Link>

      <Outlet />
      <Footer />
    </div>
  )
}