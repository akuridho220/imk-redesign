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
        <Layout subhead="SI PPID">
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