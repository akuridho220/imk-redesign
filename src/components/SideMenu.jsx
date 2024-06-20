import ListMenu from "./ListMenu";

const SideMenu = ({konten, children}) => {
    const listMenu = [
        {path: "/laporan/tahunan-ppid", submenu:"Tahunan PPID", konten: "laporan"},
        {path: "/laporan/keuangan-prov-ntb", submenu: "Keuangan Provinsi NTB", konten: "laporan"},
        {path: "/laporan/lkjip-prov-ntb", submenu: "LKjIP Provinsi NTB", konten: "laporan"},
        {path: "/profil/gambaran-umum", submenu: "Gambaran Umum", konten: "profil"},
        {path: "/profil/visi-misi", submenu: "Visi Dan Misi", konten: "profil"},
        {path: "/profil/tugas-fungsi", submenu: "Tugas Dan Fungsi", konten: "profil"},
        {path: "/profil/struktur-organisasi", submenu: "Struktur Organisasi", konten: "profil"},
        {path: "/si-ppid/informasi-setiap-saat", submenu: "Informasi Setiap Saat", konten: "si-ppid"},
        {path: "/si-ppid/informasi-berkala", submenu: "Informasi Berkala", konten: "si-ppid"},
        {path: "/si-ppid/informasi-serta-merta", submenu: "Informasi Serta Merta", konten: "si-ppid"},
        

    ]

    // filter list menu bds konten halaman
    const filteredMenu = listMenu.filter(item => item.konten === konten);

    return(
        <div className="flex">
            <div className="w-1/4 border-r-2" style={{ visibility: "visible" }}>
                <div className="bg-white p-4">
                    <div className="font-bold mb-4 uppercase">{konten}</div>
                    {filteredMenu.map(({ path, submenu }) => (
                        <ListMenu key={path} path={path} submenu={submenu} />
                    ))}
                </div>
            </div>

            <div className="w-3/4" style={{ visibility: "visible" }}>
                <div className="bg-white p-4">
                    {children}
                </div>  
            </div>
        </div>
    )
}

export default SideMenu;