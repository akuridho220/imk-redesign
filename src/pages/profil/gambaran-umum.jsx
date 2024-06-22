import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

const GambaranUmumPPID = () =>{
    return(
        <Layout subhead="Profil" detail="Gambaran Umum PPID Provinsi NTB">
            <SideMenu konten="profil">
                <div className="flex flex-col">
                    <p className="font-bold text-footer-900 text-xl md:text-2xl mb-2">Gambaran Umum PPID Provinsi NTB</p>
                    <div className="flex flex-col md:flex-row mb-10">
                        <div className="md:mx-4 mx-2">
                            <img src="..\src\assets\img\images\RuangUtamaPelayanan2.jpg" 
                                alt="ruang utama" 
                                className="w-full h-full md:w-1/2 md:mx-4 md:float-left"/>    
                            <p className="font-bold text-footer-900 text-lg">Latar Belakang</p>
                            <p className="text-justify">Keterbukaan Informasi Publik merupakan aspek yang penting dalam rangka mewujudkan penyelenggaraan negara transparan. Oleh karena itu adalah hak publik untuk memperoleh Informasi sesuai dengan peraturan perundang¬undangan. Hak atas Informasi. Hak setiap Orang untuk memperoleh Informasi juga relevan untuk meningkatkan keterlibatan masyarakat dalam proses pengambilan keputusan publik. Partisipasi masyarakat dapat terlaksana apabila adanya jaminan akan Keterbukaan Informasi Publik.</p>
                        </div>
                    </div>
                    {/* <img src="..\src\assets\img\images\LobbyPendaftaran.jpg" alt="lobi pendaftaran" /> */}
                    <div className="mx-2 md:mx-4 mt-5">
                        <p className="font-bold text-footer-900 text-lg">Dasar Hukum</p>
                        <p className="text-justify">Keberadaan Undang-undang tentang Keterbukaan Informasi Publik sangat penting sebagai landasan hukum yang berkaitan dengan (1) hak setiap Orang untuk memperoleh Informasi; (2) kewajiban Badan Publik menyediakan dan melayani permintaan Informasi secara cepat, tepat waktu, biaya ringan/proporsional, dan cara sederhana; (3) pengecualian bersifat ketat dan terbatas; (4) kewajiban Badan Publik untuk membenahi sistem dokumentasi dan pelayanan Informasi.</p>
                        <p className="text-justify">Atas dasar pemikiran tersebut, maka Pemerintah Provinsi Nusa Tenggara Barat membentuk Pejabat Pengelola Informasi dan Dokumentasi Provinsi Nusa Tenggara Barat sebagaimana tertuang dalam Peraturan Gubernur Nusa Tenggara Barat Nomor 35 Tahun 2012 Tentang Pedoman Pengelolaan Informasi dan Dokumentasi di Lingkungan Pemerintah Provinsi Nusa Tenggara Barat yang mana mangatur tata kerja, tata cara pengelolaan dan pelayanan informasi dan dokumentasi oleh Pejabat Pengelola Informasi dan Dokumentasi Pemerintah Provinsi Nusa Tenggara Barat.</p>
                        <p className="text-justify">Adapun pada Peraturan Gubernur tersebut menetapkan pemangku jabatan dalam struktur PPID Provinsi NTB adalah sebagai berikut :</p>
                        <ul className="text-justify list-decimal list-outside ml-4">
                            <li>Gubernur Nusa Tenggara Barat sebagai Pembina PPID Provinsi NTB;</li>
                            <li>Wakil Gubernur Nusa Tenggara Barat sebagai Pengarah PPID Provinsi NTB;</li>
                            <li>Sekretaris Daerah Pemerintah Provinsi NTB sebagai Atasan PPID;</li>
                            <li>Ketua PPID adalah Kepala Dinas yang membidangi urusan Kominfo (Dishubkominfo Tahun 2012 s.d 2016) dan (Dinas Kominfotik Tahun 2017 s.d sekarang);</li>
                            <li>Ketua PPID dalam pelaksanaan tugas sehari-hari dibantu oleh Kepala Sekretariat, yaitu Kepala Bidang Informasi & Komunikasi Publik Dinas Kominfotik dan masing-masing koordinator bidang;</li>
                            <li>Sekretariat PPID ditempatkan pada Dinas yang membidangi urusan Kominfo dan Kepala Sekretariat adalah Pejabat yang ditunjuk langsung oleh Pembina PPID melalui SK Gubernur, dalam hal ini Dinas Komunikasi Informatika & Statistik Provinsi NTB;</li>
                            <li>PPID Pembantu adalah PPID yang berada pada Perangkat Daerah Lingkup Pemerintah Provinsi NTB.</li>
                        </ul>
                    </div>
                </div>
            </SideMenu>
        </Layout>
    )
}

export default GambaranUmumPPID;