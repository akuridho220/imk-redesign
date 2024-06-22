import { useState } from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useLocation } from 'react-router-dom';

const BeritaDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();// Panggil useLocation sebagai fungsi
    const { title } = location.state || {};

    const data_pop = [
        {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2025", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "PPID, Sarana Efektif Pendukung Transformasi Digitall", tgl: "20 Juni 2024", jenis: "Provinsi", path:"/laporan/detail"},
        {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2026", tgl: "20 Juni 2024", jenis: "Pelatihan", path:"/laporan/detail"},
        {judul: "PPID, Sarana Efektif Pendukung Transformasi Digital", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"},
        {judul: "SPBE terbaru NTB ditargetkan tuntas diakhir 2027", tgl: "20 Juni 2024", jenis: "PPID", path:"/laporan/detail"}
      ]

    return(
        <Layout 
        subhead="Artikel Berita"
    >
        
        {/* Breadcrumb */}
        <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
            <a href="/berita" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                Berita
            </a>
            </li>
            <li aria-current="page">
            <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Konten Berita</span>
            </div>
            </li>
        </ol>
        </nav>

        {/* Artikel Berita */}
        <div className="flex flex-col md:flex-row gap-8 py-6 ">
            <div className="w-full md:w-2/3 lg:w-4/5">
                <div className="mt-4 p-8 bg-slate-100 rounded-xl w-full">
                    <h1 className='text-2xl font-bold mb-4'>SPBE terbaru NTB ditargetkan tuntas diakhir 2024</h1>
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

                            <div className="mt-0">
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


        {/* Berita Populerr */}
            <div className="w-full md:w-1/3 lg:w-1/5">
              {/* hanya muncul saat mode layar kecil */}
              <div className="max-sm:hidden">
                <div className="mb-6">
                    <h4>Berita Terpopuler</h4>
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
    )
}

export default BeritaDetail;