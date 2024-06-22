import { useState } from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Link } from 'react-router-dom';
import { AccordionContent } from 'flowbite-react';

const Berita = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Jumlah item per halaman

  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState([
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "Provinsi" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2022", tgl: "20 Juni 2022", jenis: "Pelatihan" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2022", tgl: "20 Juni 2022", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2023", tgl: "20 Juni 2023", jenis: "Provinsi" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2023", tgl: "20 Juni 2023", jenis: "Pelatihan" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2021", tgl: "20 Juni 2021", jenis: "PPID" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2021", tgl: "20 Juni 2021", jenis: "Provinsi" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2022", tgl: "20 Juni 2022", jenis: "Pelatihan" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2022", tgl: "20 Juni 2022", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2023", tgl: "20 Juni 2023", jenis: "Provinsi" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2023", tgl: "20 Juni 2023", jenis: "Pelatihan" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2021", tgl: "20 Juni 2021", jenis: "Provinsi" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2022", tgl: "20 Juni 2022", jenis: "Pelatihan" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2022", tgl: "20 Juni 2022", jenis: "PPID" },
    { judul: "Diskominfotik targetkan 100% Badan Publik NTB diakhir 2023", tgl: "20 Juni 2023", jenis: "Provinsi" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2023", tgl: "20 Juni 2023", jenis: "Pelatihan" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" },
    { judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID" }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const data_pop = [
    {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
    {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "Provinsi", path:"/laporan/detail"},
    {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "Pelatihan", path:"/laporan/detail"},
    {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
    {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2024", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"}
  ]

  return (
    <Layout 
        subhead="Berita"
        detail="Berita PPID Provinsi NTB merujuk pada laporan atau informasi yang berkaitan dengan kegiatan, perkembangan, atau peristiwa yang terkait dengan PPID (Pejabat Pengelola Informasi dan Dokumentasi) di Provinsi Nusa Tenggara Barat (NTB)"
    >
        <div className="flex flex-col md:flex-row gap-8 py-6 mt-6">
            <div className="w-full md:w-2/3 lg:w-4/5">
                {/* search and total record */}
                <div className="flex items-center justify-between mb-4 -mt-3">
                  <h1 className="font-bold text-2xl">Berita Terbaru</h1>
                  <input
                    type="text"
                    placeholder="Cari Berita ..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border p-2 px-4 rounded-2xl"
                  />
                </div>
                {/* list berita */}
                <div className="grid grid-cols-2 gap-4">
                  {currentItems.map(({ judul, tgl, jenis }, index) => (
                    <Card key={index} judul={judul} tgl={tgl} jenis={jenis} />
                  ))}
                </div>
                {/* pagination */}
                <div className="text-center mt-4">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(index + 1)}
                      className={`mx-1 px-3 py-1 rounded ${
                        currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

            </div>


          {/* Berita Pop */}
            <div className="w-full md:w-1/3 lg:w-1/5">
              {/* hanya muncul saat mode layar kecil */}
              <div className="max-sm:hidden">
                <div className="mb-6">
                    <h4 className='font-bold text-2xl'>Berita Terpopuler</h4>
                </div>
                {/* <Card berita="populer"  /> */}
                {data_pop.map(({ judul, tgl, jenis}) => (
                      <Card berita="berita" judul={judul} tgl={tgl} jenis={jenis}/>
                  ))}
              </div>

              {/* hanya muncul saat mode layar besar */}
              <div className="w-full bg-grey rounded-lg p-3 md:hidden">
                <div className="w-full bg-grey rounded-lg p-3">
                    <button className="bg-slate-100 py-4 px-3 rounded-xl transition-all duration-100 w-full font-semibold flex justify-between items-center" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <div className="flex items-center gap-x-4">
                            <div className="rounded-md bg-sp p-1">
                            <div className="w-3 h-3">
                                {/* ganti asset ttg beritaaa */}
                                <div className="w-full aspect-square bg-contain bg-white" style={{ maskImage: 'url("/assets/icons/filter.svg")', maskRepeat: 'no-repeat', maskPosition: 'center center', maskSize: 'contain' }}></div>
                            </div>
                            </div>
                            <p style={{ fontSize: '100%' }}>Filter Berita</p>
                        </div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className={`svg-inline--fa fa-chevron-down h-5 w-5 text-black flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                    </button>

                  {/* Tampilan Populer saat width kecil */}
                  <div className={`accordion-content ${isOpen ? 'block' : 'hidden'} transition-duration-150`}>
                    <div className="my-3 flex flex-col">
                      <div className="bg-grey px-1 rounded-xl flex flex-col pb-2">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col px-1">
                              {/* <div className="w-1/3">
                                <img className="w-full h-125 rounded" src="https://picsum.photos/id/237/200/300" alt="" />
                              </div>
                              <div className="w-2/3 px-1 py-1">
                                <h1 className='font-bold'>PPID Provinsi Jakarta menerima kunjungan</h1>
                              </div> */}
                              {data_pop.map(({ judul, tgl, jenis}) => (
                                  <Card berita="berita" judul={judul} tgl={tgl} jenis={jenis}/>
                              ))}
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

        </div>
    </Layout>
  );
}

export default Berita;
