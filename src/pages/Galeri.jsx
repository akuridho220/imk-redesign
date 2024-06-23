import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import VideoThumbnail from "../components/VideoThumbnail";
import FotoThumbnail from "../components/FotoThumbnail";
import { useState } from "react";
import foto1 from '../assets/img/images/foto-thumb1.jpg';
import foto2 from '../assets/img/images/foto-thumb2.jpg';
import foto3 from '../assets/img/images/foto-thumb3.jpeg';
import foto4 from '../assets/img/images/foto-thumb4.jpg';

const Galeri = () => {
    const location = useLocation();
    const[kategori, setKategori] = useState("semua");

    const ubahKategori = (kategori) => {
        setKategori(kategori)
    }

    console.log(kategori)

    return(
        <Layout 
            subhead="Galeri"
            detail="Kumpulan digital dari gambar dan video yang disusun dalam satu tempat untuk memudahkan akses dan penayangan. Biasanya digunakan untuk memamerkan karya, mendokumentasikan acara, atau menyimpan kenangan."
        >

            {/* Frame Galeri Video */}
            <h1 className='text-2xl font-bold my-5'>Videografis PPID Provinsi NTB</h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 mb-5">
                <iframe
                src="https://www.youtube.com/embed/-BsGY4hvMBo?si=maZRHrewk3-oA01N"
                title="Hari Media Sosial Indonesia #CintaData #HariBesar ##HariMedsos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="max-sm:aspect-video max-sm:w-full rounded-lg md:rounded-xl flex-grow"
                allowfullscreen={true}
                ></iframe>

                <div className="inline-flex md:flex-col gap-4 max-sm:overflow-x-auto no-scrollbar max-sm:-mx-4 max-sm:px-4">
                    <VideoThumbnail foto={foto1} />
                    <VideoThumbnail foto={foto2} />
                    <VideoThumbnail foto={foto3} />
                    <VideoThumbnail foto={foto4} />
                </div>
            </div>


            {/* Frame Galeri Foto */}
            <div className="rounded-full bg-primary-900 py-2 mt-10">
                <h1 className="text-center text-putih-100">Galeri PPID NTB</h1>
            </div>
            <div>
                {/* Links */}
                <ul className="flex flex-row flex-wrap items-center justify-center sm:grid-cols mt-4">
                    <li className="mx-5">
                        <button className={`px-4 py-2 border-b-4 border-primary-900 ${kategori === 'semua' ? 'border-none bg-primary-900 rounded-full text-white' : 'text-black'}`} onClick={() => ubahKategori('semua')}>Semua</button>
                    </li>
                    <li className="mx-5">
                        <button className={`px-4 py-2 border-b-4 border-primary-900 ${kategori === 'rapat' ? 'border-none bg-primary-900 rounded-full text-white' : 'text-black'}`} onClick={() => ubahKategori('rapat')}>Rapat</button>
                    </li>
                    <li className="mx-5">
                        <button className={`px-4 py-2 border-b-4 border-primary-900 ${kategori === 'pelatihan' ? 'border-none bg-primary-900 rounded-full text-white' : 'text-black'}`} onClick={() => ubahKategori('pelatihan')}>Pelatihan</button>
                    </li>
                    <li className="mx-5">
                        <button className={`px-4 py-2 border-b-4 border-primary-900 ${kategori === 'dbip' ? 'border-none bg-primary-900 rounded-full text-white' : 'text-black'}`} onClick={() => ubahKategori('dbip')}>DBIP</button>
                    </li>
                </ul>

                {/* Grid of Photos */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-7">
                    {/* Tampilkan foto berdasarkan kategori */}
                    {kategori === 'semua' && (
                        <FotoThumbnail konten="semua" />
                    )}
                    {kategori === 'rapat' && (
                        <FotoThumbnail konten="rapat" />
                    )}
                    {kategori === 'pelatihan' && (
                        <FotoThumbnail konten="pelatihan" />
                    )}
                    {kategori === 'dbip' && (
                        <FotoThumbnail konten="dbip" />
                    )}
                </div>
            </div>



        </Layout>
    )
}

export default Galeri;