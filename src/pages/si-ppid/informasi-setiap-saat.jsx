import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import BasicTable from "../../components/BasicTable";
import BoxHeader from "../../components/BoxHeader";
import data from "../../data/si-tiap-saat";


const InformasiSetiapSaat = () => {
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
                <div>
                    <BasicTable columns={columns} data={data}/>
                </div>
            </SideMenu>
        </Layout>
    )
}

export default InformasiSetiapSaat;