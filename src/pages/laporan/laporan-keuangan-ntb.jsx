import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanKeuanganNTB = () =>{
    const data = [
        {judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan Keuangan Provinsi NTB Tahun 2021", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan Keuangan Provinsi NTB Tahun 2022", tgl: "20 Juni 2024", jenis: "Provinsi", path:"/laporan/detail"},
        {judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "Provinsi", path:"/laporan/detail"},
        {judul: "Laporan Keuangan Provinsi NTB Tahun 2024", tgl: "20 Juni 2024", jenis: "Provinsi", path:"/laporan/detail"}
    ]

    return(
        <Layout 
            subhead="Laporan Keuangan"
            detail="Dokumen yang memuat informasi terperinci mengenai kondisi keuangan dan pengelolaan dana yang dilakukan oleh PPID Provinsi NTB selama satu tahun tertentu."
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