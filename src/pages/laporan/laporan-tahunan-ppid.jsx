import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanTahunanPPID = () =>{
    const data = [
        {judul: "Laporan tahunan", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan tahunan1", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan tahunan2", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan tahunan3", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "Laporan tahunan4", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"}
    ]
    return(
        <Layout 
            subhead="Laporan"
            detail="Detail laporan tahunan PPID"
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

export default LaporanTahunanPPID;