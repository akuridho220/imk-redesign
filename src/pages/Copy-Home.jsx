import React from 'react';
import Carousel from '../components/Carousel';
import SingleItemCarousel from '../components/SingleItemCarousel';

const CopyHome = () => {
    const slides = [
        "../src/assets/img/images/LobbyPendaftaran.jpg",
        "../src/assets/img/images/RuangUtamaPelayanan2.jpg",
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

    const xs = [
        {
            title: "Statistik 1",
            data : ["1","2","3"]
        },
        {
            title: "Statistik 2",
            data: ["1","2","3","4"]
        }
    ]

    const newsItems = [
        {
            judul: "Berita 1",
            tanggal: "Tanggal 1",
            deskripsi: "Ringkasan berita 1",
            gambar: "https://via.placeholder.com/100"
        },
        {
            judul: "Berita 2",
            tanggal: "Tanggal 2",
            deskripsi: "Ringkasan berita 2",
            gambar: "https://via.placeholder.com/100"
        },
        {
            judul: "Berita 3",
            tanggal: "Tanggal 3",
            deskripsi: "Ringkasan berita 3",
            gambar: "https://via.placeholder.com/100"
        }
    ];

    return (
        <div>
            <div className="relative mb-4 h-96">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover" />
                    ))}
                </Carousel>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl gap-4 top-full transform -translate-y-1/2">
                    <button className="bg-tertiary-900 py-16 px-12 rounded shadow-lg">Permohonan Informasi</button>
                    <button className="bg-tertiary-900 py-16 px-12 rounded shadow-lg">Pengajuan Keberatan</button>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center font-bold gap-4 mt-28 mb-4 px-5">
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Daftar Informasi Publik</button>
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Laporan Pelayanan Informasi</button>
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Laporan Pelayanan Keberatan</button>
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Satu Data NTB</button>
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Pengaduan NTB</button>
                <button className="bg-tertiary-900 text-white w-1/6 h-32 px-4 py-6 rounded">Data Covid 19 NTB</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Berita Terbaru</h2>
                    <SingleItemCarousel autoSlide={true} autoSlideInterval={3000}>
                        {newsItems.map((news, index) => (
                            <div key={index} className="flex p-4 bg-gray-200 rounded-lg">
                                <img src={news.gambar} alt={`news-${index}`} className="w-1/3 h-24 object-cover rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{news.judul}</h3>
                                    <p className="italic">{news.tanggal}</p>
                                    <p>{news.deskripsi}</p>
                                </div>
                            </div>
                        ))}
                    </SingleItemCarousel>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Berita Populer</h2>
                    <SingleItemCarousel autoSlide={true} autoSlideInterval={3000}>
                        {newsItems.map((news, index) => (
                            <div key={index} className="flex p-4 bg-gray-200 rounded-lg">
                                <img src={news.gambar} alt={`news-${index}`} className="w-1/3 h-24 object-cover rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{news.judul}</h3>
                                    <p className="italic">{news.tanggal}</p>
                                    <p>{news.deskripsi}</p>
                                </div>
                            </div>
                        ))}
                    </SingleItemCarousel>
                </div>
            </div>
            <div>
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {statistiks.map((statistik, index) => (
                        <div className='w-full flex flex-col items-center md:px-10 md:py-4' key={index}>
                            <p className='font-bold text-footer-900 text-lg'>{statistik.title}</p>
                            <div className='w-full flex flex-row'>
                                {statistik.data.map((stat) => (
                                    <div className='flex flex-col w-full bg-blue-200 m-4 items-center rounded-lg p-2 md:p-4'>
                                        <p>{stat.value}</p>
                                        <p>{stat.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CopyHome;