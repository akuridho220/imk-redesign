import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

const VisiMisiPPID = () =>{
    return(
        <Layout subhead="Profil" detail="Visi dan Misi PPID NTB">
            <SideMenu konten="profil">
                <div className="flex flex-col">
                    <p className="font-bold text-footer-900 text-xl md:text-2xl mb-2">Visi dan Misi PPID NTB</p>
                    <img 
                        src="/images/VisiMisi-PPIDNTB.jpeg" 
                        alt="visi misi" 
                        className="w-full"
                        loading="lazy"/>
                        
                </div>
            </SideMenu>
        </Layout>
    )
}

export default VisiMisiPPID;