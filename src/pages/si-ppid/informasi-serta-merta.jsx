import BasicTable from "../../components/BasicTable";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import data from "../../data/si-serta-merta";

const InformasiSertaMerta = () => {
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
        <Layout subhead="SI PPID">
            <SideMenu konten="si-ppid">
                <div className="flex flex-col">
                    <p className="font-bold text-footer-900 text-lg" >Informasi Serta Merta</p>
                    <BasicTable columns={columns} data={data}/>
                </div>
            </SideMenu>
        </Layout>
    )
}

export default InformasiSertaMerta;