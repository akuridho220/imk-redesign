import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanKeuanganNTB = () =>{
    const data = [
        {judul: "Laporan blablaba", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan blablaba1", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan blablaba2", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan blablaba3", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan blablaba4", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"}
    ]

    return(
        <Layout 
            subhead="Laporan"
            detail="Detail laporan keuangan NTB"
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

export default LaporanKeuanganNTB;