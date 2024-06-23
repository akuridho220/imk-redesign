import Header from "./components/Header.jsx";
import Footer from "./components/Footer"
import { Outlet} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import FormulirPermohonanInformasi from './pages/formulir/FormulirPermohonanInformasi.jsx';
import FormulirPengajuanKeberatan from './pages/formulir/FormulirPengajuanKeberatan.jsx';
import LaporanTahunanPPID from "./pages/laporan/laporan-tahunan-ppid.jsx";
import LaporanKeuanganNTB from "./pages/laporan/laporan-keuangan-ntb.jsx";
import LaporanLKJIPNTB from "./pages/laporan/laporan-lkjip-ntb.jsx";
import LaporanPelayananKeberatan from "./pages/laporan/laporan-pelayanan-keberatan.jsx";
import LaporanPelayananInformasi from "./pages/laporan/laporan-pelayanan-informasi.jsx";
import GambaranUmumPPID from "./pages/profil/gambaran-umum.jsx";
import TugasFungsiPPID from "./pages/profil/tugas-fungsi.jsx";
import VisiMisiPPID from "./pages/profil/visi-misi.jsx";
import Berita from "./pages/berita/Berita.jsx";
import BeritaDetail from "./pages/berita/BeritaDetail.jsx";
import Galeri from "./pages/Galeri.jsx";
import Kontak from "./pages/kontak/kontak.jsx";
import InformasiSetiapSaat from "./pages/si-ppid/informasi-setiap-saat.jsx";
import InformasiBerkala from "./pages/si-ppid/informasi-berkala.jsx";
import InformasiSertaMerta from "./pages/si-ppid/informasi-serta-merta.jsx";
import StrukturPPID from "./pages/profil/struktur-organisasi.jsx";
import Statistik from "./pages/statistik/statistik.jsx";
import SampleInformasi from "./pages/si-ppid/sample-informasi.jsx";
import LaporanDetail from "./pages/laporan/laporan-detail.jsx";


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/formulir/permohonan-informasi" element={<FormulirPermohonanInformasi />}/>
        <Route path="/formulir/pengajuan-keberatan" element={<FormulirPengajuanKeberatan />}/>
        <Route path="/si-ppid" element={<Navigate to="/si-ppid/informasi-setiap-saat" />}/>
        <Route path="/si-ppid/informasi-setiap-saat" element={<InformasiSetiapSaat />}/>
        <Route path="/si-ppid/informasi-berkala" element={<InformasiBerkala />}/>
        <Route path="/si-ppid/informasi-serta-merta" element={<InformasiSertaMerta />}/>
        <Route path="/laporan" element={<Navigate to="/laporan/tahunan-ppid" />}/>
        <Route path="/laporan/tahunan-ppid" element={<LaporanTahunanPPID />}/>
        <Route path="/laporan/keuangan-prov-ntb" element={<LaporanKeuanganNTB />}/>
        <Route path="/laporan/lkjip-prov-ntb" element={<LaporanLKJIPNTB />}/>
        <Route path="/laporan/detail" element={<LaporanDetail />}/>
        <Route path="/laporan/pelayanan-keberatan" element={<LaporanPelayananKeberatan />}/>
        <Route path="/laporan/pelayanan-informasi" element={<LaporanPelayananInformasi />}/>
        <Route path="/profil" element={<Navigate to="/profil/gambaran-umum" />}/>
        <Route path="/profil/gambaran-umum" element={<GambaranUmumPPID />}/>
        <Route path="/profil/tugas-fungsi" element={<TugasFungsiPPID />}/>
        <Route path="/profil/visi-misi" element={<VisiMisiPPID />}/>
        <Route path="/profil/struktur-organisasi" element={<StrukturPPID />} />
        <Route path="/berita" element={<Berita />}/>
        <Route path="/berita/detail" element={<BeritaDetail />}/>
        <Route path="/galeri" element={<Galeri />}/>
        <Route path="/kontak" element={<Kontak />}/>
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/informasi" element={<SampleInformasi />} />

        {/* tambahin route yg lain */}
      </Routes>
      <Outlet />
      <Footer />
    </div>
  )
}
