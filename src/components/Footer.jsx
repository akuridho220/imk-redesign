import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-footer-900">
            <footer className="bg-footer-900 dark:bg-gray-900 mx-10">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mb-6 md:mb-0 md:w-2/3 w-full">
                            <div className="flex flex-col md:w-4/5 text-justify">
                                <h2 className="font-bold text-putih-100">PPID Provinsi Nusa Tenggara Barat</h2>
                                <p className="text-putih-200">Sekretariat : Jl. Udayana No. 14 Selaparang, Kota Mataram, Nusa Tenggara Barat (Kantor Dinas Kominfotik Prov. NTB)</p>
                                <p className="text-putih-200">Unit Pelayanan Informasi dan Dokumentasi : Gedung Kemitraan, Jalan Udayana No. 14, Kota Mataram</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:w-1/3">
                            <div className="mb-10">
                                <h2 className="mb-6 text-sm font-semibold text-putih-100 uppercase dark:text-white">Kontak</h2>
                                <ul className="text-putih-200 dark:text-gray-400 ">
                                    <li className="mb-4 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        <p className="hover:underline ml-2">(0370) 644264/645294</p>
                                    </li>
                                    <li className="mb-4 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        <p className="hover:underline ml-2">Fax (0370) 644264</p>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <p className="hover:underline ml-2">ppid@ntbprov.go.id</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-putih-200 uppercase dark:text-white">Link Terkait</h2>
                                <ul className="text-putih-100 dark:text-gray-400">
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        <Link to="#" className="hover:underline ">Website NTB Prov</Link>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        <Link to="#" className="hover:underline">NTB Satu Data</Link>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        <Link to="#" className="hover:underline">NTB Care</Link>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        <Link to="#" className="hover:underline">Corona NTB</Link>
                                    </li>
                                    <li className="flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        <Link to="#" className="hover:underline">NTB Mall</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="text-sm text-putih-100 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Kelompok 1 3SI3</a>. Polstat STIS.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;