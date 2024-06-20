import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

const StrukturPPID = () =>{
    return(
        <Layout subhead="Profil" detail="Struktur Organisasi PPID NTB">
            <SideMenu konten="profil">
                <div>
                    <img src="..\src\assets\img\images\SrukturOrganisasiPPIDNTB.png" alt="struktur organisasi" />
                </div>
            </SideMenu>
        </Layout>
    )
}

export default StrukturPPID;