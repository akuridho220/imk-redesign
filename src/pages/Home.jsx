import React from 'react';
import Carousel from '../components/Carousel';
import { useNavigate } from 'react-router-dom';
import SingleItemCarousel from '../components/SingleItemCarousel';
import Card from '../components/Card';

const Home = () => {
    const navigate = useNavigate();
    const slides = [
        "../public/images/LobbyPendaftaran.jpg",
        "../public/images/RuangUtamaPelayanan2.jpg",
    ];

    const statistiks = [
        {
            title: "Statistik Informasi Publik",
            data : [
                {
                    name: "DIP Berkala",
                    value: 1447,
                },
                {
                    name: "DIP Serta Merta",
                    value: 61,
                },
                {
                    name: "DIP Setiap Saat",
                    value: 194,
                },
            ]       
        },
        {
            title: "Statistik Permohonan Informasi",
            data: [
                {
                    name: "Menunggu",
                    value: 16,
                },
                {
                    name: "Diproses",
                    value: 7,
                },
                {
                    name: "Dipenuhi",
                    value: 121,
                },
                {
                    name: "Ditolak",
                    value: 12,
                },
            ]
        }
    ]

    const latestNews = [
        { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "PPID", path: "/berita/detail" },
        { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "Provinsi", path: "/berita/detail" },
        { judul: "Diskominfotik targetkan 100 persen Badan Publik NTB diakhir 2022", tgl: "20 Juni 2022", jenis: "Pelatihan", path: "/berita/detail" }
    ];

    const popularNews = [
        { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2025", tgl: "20 Juni 2024", jenis: "PPID", path: "/berita/detail" },
        { judul: "PPID, Sarana Efektif Pendukung Transformasi Digital", tgl: "20 Juni 2024", jenis: "Provinsi", path: "/berita/detail" },
        { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2026", tgl: "20 Juni 2024", jenis: "Pelatihan", path: "/berita/detail" }
    ];

    const handleCardClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <div className='w-full flex flex-col'>
            <div className="relative mb-4 h-94 flex flex-col">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover" />
                    ))}
                </Carousel>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl gap-4 top-96 transform-translate-y-1/2 m-2 md:m-4 md:mx-auto">
                    <button
                        className="bg-tertiary-900 md:w-[30%] w-1/2 border-white-100 border-4 py-6 px-4 md:py-16 md:px-12 rounded-xl shadow-lg hover:text-orange-200 hover:border-orange-300"
                        onClick={() => navigate('/formulir/permohonan-informasi')}
                    >
                        Permohonan Informasi
                    </button>
                    <button
                        className="bg-tertiary-900 md:w-[30%] w-1/2 border-white-100 border-4 py-6 px-4 md:py-16 md:px-12 rounded-xl shadow-lg hover:text-orange-200 hover:border-orange-300"
                        onClick={() => navigate('/formulir/pengajuan-keberatan')}
                    >
                        Pengajuan Keberatan
                    </button>
                </div>
            </div>

            <div className="inset-0 flex flex-col md:flex-row items-center justify-center font-bold gap-4 mt-28 mb-4 px-5 ">
                <div className='flex flex-row items-center gap-6 w-full md:w-1/3'>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => navigate('/si-ppid/informasi-setiap-saat')}
                    >Daftar Informasi Publik</button>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => navigate('/laporan/pelayanan-informasi')}
                    >Laporan Pelayanan Informasi</button>
                </div>
                <div className='flex flex-row items-center gap-6 w-full md:w-1/3'>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => navigate('/laporan/pelayanan-keberatan')}
                    >Laporan Pelayanan Keberatan</button>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => window.location.href = "https://data.ntbprov.go.id/"}
                    >
                        Satu Data NTB</button>
                </div>
                <div className='flex flex-row items-center gap-6 w-full md:w-1/3'>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => window.location.href = "https://v2.ppid.ntbprov.go.id/pengaduan.html"}
                    >
                        Pengaduan NTB</button>
                    <button
                        className="bg-tertiary-900 text-white w-1/2 h-32 px-4 py-6 rounded-lg hover:text-orange-200"
                        onClick={() => window.location.href = "https://corona.ntbprov.go.id/"}
                    >Data Covid 19 NTB</button>
                </div>
            </div>

            <div className="flex flex-col mt-16 md:px-20 p-4">
                <h2 className="flex justify-center text-xl font-bold ">Berita Terbaru</h2>
                <p className="flex justify-center text-justify mb-6">Berikut daftar berita terkini dari kegiatan Pejabat Pengelola Informasi dan Dokumentasi NTB.</p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className='w-full'>
                        <SingleItemCarousel
                            autoSlide={true}
                            autoSlideInterval={3000}
                            onClick={(path) => navigate(path)}
                        >
                            {latestNews.map((news, index) => (
                                <Card
                                    key={index}
                                    judul={news.judul}
                                    tgl={news.tgl}
                                    jenis={news.jenis}
                                    path={news.path}
                                    onClick={() => handleCardClick(news.path)}
                                />
                            ))}
                        </SingleItemCarousel>
                    </div>
                    <div className='w-full'>
                        <SingleItemCarousel
                            autoSlide={true}
                            autoSlideInterval={3000}
                            onClick={(path) => navigate(path)}
                        >
                            {popularNews.map((news, index) => (
                                <Card
                                    key={index}
                                    judul={news.judul}
                                    tgl={news.tgl}
                                    jenis={news.jenis}
                                    path={news.path}
                                    onClick={() => handleCardClick(news.path)}
                                />
                            ))}
                        </SingleItemCarousel>
                    </div>
                </div>
                <div className='w-full mt-10 p-2'>
                    <Carousel autoSlide={true} autoSlideInterval={3000}>
                        {statistiks.map((statistik, index) => (
                            <div className='w-full flex flex-col items-center md:px-10 md:py-4 bg-slate-100 roundel-lg' key={index}>
                                <p className='font-bold text-footer-900 text-lg p-2 md:p-4'>{statistik.title}</p>
                                <div className='w-full flex flex-col md:flex-row items-center'>
                                    {statistik.data.map((stat) => (
                                        <div className='flex flex-col w-2/5 md:w-full bg-blue-200 m-4 items-center rounded-lg p-2 md:p-4'>
                                            <p className='font-medium text-footer-900 md:text-xl text-base'>{stat.value}</p>
                                            <p className='font-bold text-footer-900 md:text-base text-xs'>{stat.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;
