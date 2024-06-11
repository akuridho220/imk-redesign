import Navbar from "./components/Navbar"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer"
import { Outlet} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Laporan from "./pages/Laporan.jsx";
import LaporanTahunanPPID from "./pages/laporan/laporan-tahunan-ppid.jsx";
import LaporanKeuanganNTB from "./pages/laporan/laporan-keuangan-ntb.jsx";
import LaporanLKJIPNTB from "./pages/laporan/laporan-lkjip-ntb.jsx";


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/laporan" element={<LaporanTahunanPPID />}/>
        <Route path="/laporan/tahunan-ppid" element={<LaporanTahunanPPID />}/>
        <Route path="/laporan/keuangan-prov-ntb" element={<LaporanKeuanganNTB />}/>
        <Route path="/laporan/lkjip-prov-ntb" element={<LaporanLKJIPNTB />}/>
        <Route path="/blogs" element={<Blog />}/>
        {/* tambahin route yg lain */}
      </Routes>
      <Outlet />
      <Footer />
    </div>
  )
}
