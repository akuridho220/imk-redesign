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
                <BasicTable columns={columns} data={data}/>
            </SideMenu>
        </Layout>
    )
}

export default InformasiSertaMerta;