import ListMenu from "./ListMenu";

const SideMenu = ({konten, children}) => {
    const listMenu = [
        {path: "/laporan/tahunan-ppid", submenu:"Tahunan PPID", konten: "laporan"},
        {path: "/laporan/keuangan-prov-ntb", submenu: "Keuangan Provinsi NTB", konten: "laporan"},
        {path: "/laporan/lkjip-prov-ntb", submenu: "LKjIP Provinsi NTB", konten: "laporan"},

    ]

    return(
        <div className="flex">
            <div className="w-1/4 border-r-2" style={{ visibility: "visible" }}>
                <div className="bg-white p-4">
                    <div className="font-bold mb-4 uppercase">{konten}</div>
                    {listMenu.filter(item => item.konten === "laporan").map(({ path, submenu }) => (
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


        // <h1>OSENFWE</h1>


    )
}

export default SideMenu;