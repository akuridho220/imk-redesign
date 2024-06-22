import { useState } from 'react';
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

const LaporanLKJIPNTB = () => {
    const data = [
        { judul: "Laporan lkjip ntb", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb1", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb2", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb3", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb4", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb1", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb2", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb3", tgl: "20 Juni 2024", jenis: "PPID" },,
        { judul: "Laporan lkjip ntb1", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb2", tgl: "20 Juni 2024", jenis: "PPID" },
        { judul: "Laporan lkjip ntb3", tgl: "20 Juni 2024", jenis: "PPID" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Jumlah item per halaman

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
            subhead="Laporan LKjIP"
            detail="Laporan ini menjadi salah satu instrumen penting dalam upaya meningkatkan transparansi dan akuntabilitas pemerintah daerah, serta memberikan akses informasi yang lebih luas kepada masyarakat."
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

export default LaporanLKJIPNTB;
