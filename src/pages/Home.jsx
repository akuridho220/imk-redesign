import React from 'react';
import Carousel from '../components/Carousel';
import ReactCardSlider from 'react-card-slider-component';
import SingleItemCarousel from '../components/SingleItemCarousel';

const Home = () => {
    const slides = [
        "../src/assets/img/images/LobbyPendaftaran.jpg",
        "../src/assets/img/images/RuangUtamaPelayanan2.jpg",
    ];

    const latestInfo = [
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
        { title: "This is a title", description: "This is a description", clickEvent: () => {} },
    ];

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

            <div className="flex flex-col items-center justify-center mt-24 mb-4">
                <h2 className="text-xl font-semibold mb-2">Informasi Publik Terbaru</h2>
                <p className=" mb-8">Informasi terbaru yang ada</p>
                <div className="flex justify-center gap-4 w-full md:w-3/4 lg:w-full">
                    <ReactCardSlider slides={latestInfo} className="w-3/4" />
                </div>
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
        </div>
    );
}

export default Home;