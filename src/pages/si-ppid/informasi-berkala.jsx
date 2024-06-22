import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import BasicTable from "../../components/BasicTable";
import data from "../../data/si-berkala";

const InformasiBerkala = () => {
    const columns = [
        {
            accessorKey: 'no',
            header: 'No',
            size: 20
        },
        {
            accessorKey: 'judul',
            header: 'Judul',
        },
    ];
    return (
        <Layout subhead="SI PPID" 
                detail="Sistem Informasi Pejabat Pengelola Informasi dan Dokumentasi (SI PPID) adalah sebuah sistem yang dirancang untuk mendukung transparansi dan keterbukaan informasi publik. PPID, atau Pejabat Pengelola Informasi dan Dokumentasi, adalah unit atau individu yang bertanggung jawab untuk mengelola dan menyediakan informasi publik kepada masyarakat. SI PPID adalah platform digital yang memfasilitasi fungsi-fungsi ini.">
            <SideMenu konten="si-ppid">
                <div className="flex flex-col">
                    <p className="font-bold text-footer-900 text-lg" >Informasi Berkala</p>
                    <BasicTable columns={columns} data={data}/>
                </div>
            </SideMenu>
        </Layout>
    )
}

export default InformasiBerkala;