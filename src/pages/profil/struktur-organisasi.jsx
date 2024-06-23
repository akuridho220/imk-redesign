import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

const StrukturPPID = () =>{
    return(
        <Layout subhead="Profil" detail="Struktur Organisasi PPID NTB">
            <SideMenu konten="profil">
                <div className="flex flex-col">
                    <p className="font-bold text-footer-900 text-xl md:text-2xl mb-2">Struktur Organisasi PPID NTB</p>
                    <img src="/images/SrukturOrganisasiPPIDNTB.png" 
                        alt="struktur organisasi" 
                        className="w-full"/>
                </div>
            </SideMenu>
        </Layout>
    )
}

export default StrukturPPID;