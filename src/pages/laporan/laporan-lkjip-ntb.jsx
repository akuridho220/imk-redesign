import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanLKJIPNTB = () =>{
    const data = [
        {judul: "Laporan lkjip ntb", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan lkjip ntb1", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan lkjip ntb2", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan lkjip ntb3", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan lkjip ntb4", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"}
    ]
    return(
        <Layout 
            subhead="Laporan"
            detail="Detail laporan LKJIP NTB"
        >
            <SideMenu konten="laporan">
                <div className="grid grid-cols-2 gap-4">
                    {data.map(({judul, tgl, jenis, path}) => (
                        <Card  judul={judul} tgl={tgl} jenis={jenis} path={path}/>
                    ))}
                </div>
            </SideMenu>
        </Layout>
    )
}

export default LaporanLKJIPNTB;