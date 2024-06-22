import { Link } from "react-router-dom";
import { useState } from 'react';
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanKeuanganNTB = () => {
    const data = [
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2021", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2022", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2024", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2024", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2024", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2023", tgl: "20 Juni 2024", jenis: "Provinsi" },
        { judul: "Laporan Keuangan Provinsi NTB Tahun 2024", tgl: "20 Juni 2024", jenis: "Provinsi" }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Layout
            subhead="Laporan Keuangan"
            detail="Dokumen yang memuat informasi terperinci mengenai kondisi keuangan dan pengelolaan dana yang dilakukan oleh PPID Provinsi NTB selama satu tahun tertentu."
        >
            <SideMenu konten="laporan">
                <div className="grid grid-cols-2 gap-4">
                    {currentItems.map(({ judul, tgl, jenis, path }, index) => (
                        <Card key={index} judul={judul} tgl={tgl} jenis={jenis} path={path} />
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
            </SideMenu>
        </Layout>
    );
};

export default LaporanKeuanganNTB;
