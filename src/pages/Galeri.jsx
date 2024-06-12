import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import VideoThumbnail from "../components/VideoThumbnail";

const Galeri = () => {
    const location = useLocation();

    return(
        <Layout 
            subhead="Galeri"
            detail="galeri adalah blalalal"
        >

            {/* Frame Galeri Video */}
            <h3 className="font-semibold">Videografis Badan Pusat Statistik</h3>
            <div className="flex flex-col md:flex-row gap-4 mt-4 mb-5">
                <iframe
                src="https://www.youtube.com/embed/2GEsm-Cfwao?rel=0"
                title="Hari Media Sosial Indonesia #CintaData #HariBesar ##HariMedsos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="max-sm:aspect-video max-sm:w-full rounded-lg md:rounded-xl flex-grow"
                allowfullscreen={true}
                ></iframe>

                <div className="inline-flex md:flex-col gap-4 max-sm:overflow-x-auto no-scrollbar max-sm:-mx-4 max-sm:px-4">
                    <VideoThumbnail />
                    <VideoThumbnail />
                    <VideoThumbnail />
                    <VideoThumbnail />
                </div>
            </div>


            {/* Frame Galeri Foto */}
            <div className="rounded-full bg-red-500 py-2">
                <h1 className="text-center">Galeri PPID NTB</h1>
            </div>

            <ul className="flex flex-row items-center justify-center">
                <Link to="/galeri/semua" className={`mx-5 px-4 py-2 ${location.pathname === '/galeri/semua' ? 'bg-red-400 rounded-full text-white' : 'text-black'}`}>Semua</Link>
                <Link to="/galeri/rapat" className="mx-5 bg-red-400 rounded-full px-4 py-2 text-white">Rapat</Link>
                <Link to="/galeri/pelatihan" className="mx-5 bg-red-400 rounded-full px-4 py-2 text-white">Pelatihan</Link>
                <Link to="/galeri/dbip" className="mx-5 bg-red-400 rounded-full px-4 py-2 text-white">DBIP</Link>
            </ul>


        </Layout>
    )
}

export default Galeri;