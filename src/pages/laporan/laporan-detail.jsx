import { useState } from 'react';
import Layout from "../../components/Layout";
import { useLocation } from 'react-router-dom';

const LaporanDetail = () => {
    const location = useLocation();// Panggil useLocation sebagai fungsi
    const { title } = location.state || {};
    const [showToast, setShowToast] = useState(false);

    return(
        <Layout 
        subhead="Detail Laporan"
    >
        
        {/* Breadcrumb */}
        <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
            <a href="/laporan" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                Laporan
            </a>
            </li>
            <li aria-current="page">
            <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Detail Laporan</span>
            </div>
            </li>
        </ol>
        </nav>

        {/* Artikel Berita */}
        <div className="flex flex-col md:flex-row gap-8 py-6 ">
            <div className="w-full">
                <div className="mt-4 p-8 bg-slate-100 rounded-xl w-full">
                    <h1 className='text-2xl font-bold mb-4'>SPBE terbaru NTB ditargetkan tuntas diakhir 2024</h1>
                    <button className='p-3 bg-primary-900 text-md rounded-xl text-white hover:bg-blue-700 mb-2'
                        onClick={() => setShowToast((state) => !state)}>
                        Unduh Laporan
                    </button>
                    {showToast && (
                        <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-putih-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="sr-only">Check icon</span>
                        </div>
                        <div class="ms-3 text-sm font-normal">Laporan berhasil diunduh <br /> `pura-pura aja`</div>
                        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close"
                            onClick={() =>setShowToast((state) => !state)}>
                            <span class="sr-only">Close</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                    )}
                    <div className="flex flex-row md:flex-col">
                        <div className="w-full">
                            <img
                                alt="Random Image"
                                loading="lazy"
                                width="1080"
                                height="1080"
                                className="rounded-md md:float-left md:w-1/3 md:mr-4 mb-4 md:mb-0"
                                style={{ color: 'transparent' }}
                                src={`https://picsum.photos/seed/${title}/200/300`}
                            />
                            <p style={{ fontSize: '16px' }}>
                                21 Juni 2024 | Kegiatan Statistik Lainnya
                            </p>
                            <br />

                            <div className="Abstract_abstract__J_Qgq !mt-0 text-justify">
                            Di sebuah kota kecil yang indah, hiduplah seorang pria bernama Arman yang bekerja sebagai desainer grafis. Setiap hari, dia pergi ke kafe favoritnya untuk bekerja sambil menikmati kopi. Suatu hari, saat sedang sibuk dengan laptopnya, dia bertemu dengan seorang wanita bernama Sinta yang sedang membaca buku di meja sebelah. Pertemuan mereka dimulai dengan senyuman dan obrolan ringan tentang buku dan desain. Dari perbincangan singkat itu, mereka merasa cocok dan mulai sering bertemu di kafe yang sama.
                            <br />
                            <br />
                            Seiring berjalannya waktu, Arman dan Sinta semakin dekat. Mereka sering menghabiskan waktu bersama, baik di kafe, menonton film, atau berjalan-jalan di taman. Mereka berbagi cerita, tawa, dan mimpi, namun tidak pernah membicarakan perasaan mereka satu sama lain. Keduanya merasa nyaman dengan kebersamaan mereka, namun ada sesuatu yang tidak terungkap. Mereka sadar ada ketertarikan di antara mereka, tapi tidak ada yang berani mengambil langkah untuk menjadikannya hubungan yang resmi.
                            <br />
                            <br />
                            Hari demi hari berlalu, dan hubungan mereka semakin dalam tanpa adanya label. Teman-teman mereka mulai bertanya-tanya tentang status hubungan Arman dan Sinta. Setiap kali ditanya, mereka hanya tersenyum dan menghindari jawaban pasti. Keduanya merasa terjebak dalam zona nyaman, takut untuk merusak apa yang sudah mereka miliki dengan memberi label pada hubungan mereka. Dalam hati, Arman sering bertanya-tanya apakah Sinta merasakan hal yang sama dengannya, namun dia takut merusak kedekatan mereka dengan mengungkapkan perasaannya.
                            <br />
                            <br />
                            Suatu malam, saat mereka duduk di tepi sungai, menikmati angin malam yang sejuk, Sinta akhirnya membuka percakapan yang selama ini mereka hindari. Dengan hati-hati, dia berkata, "Arman, aku merasa kita perlu bicara tentang hubungan kita. Aku tidak ingin terus berada dalam ketidakpastian." Arman merasa jantungnya berdegup kencang. Dia tahu saat itu akan datang, namun tidak menyangka akan terjadi malam itu. Mereka berbicara dengan jujur tentang perasaan masing-masing, ketakutan, dan harapan mereka.
                            <br />
                            <br />
                            Setelah percakapan panjang dan mendalam, mereka memutuskan untuk memberikan hubungan mereka kesempatan untuk berkembang menjadi sesuatu yang lebih dari sekadar hubungan tanpa status. Mereka berdua sadar bahwa perasaan mereka terlalu berharga untuk dibiarkan dalam ketidakjelasan. Dengan hati yang terbuka dan penuh harapan, Arman dan Sinta mulai menjalani hubungan yang baru, kali ini dengan komitmen dan tujuan yang jelas. Mereka belajar bahwa kadang-kadang, untuk menemukan kebahagiaan sejati, seseorang harus berani keluar dari zona nyaman dan mengambil risiko untuk cinta yang sebenarnya.
                            <br />
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    </Layout>
    )
}

export default LaporanDetail;