import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="..\src\assets\img\logo\logoPPIDNTB.png" className="h-16" alt="PPID Logo" />
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <ul className='flex flex-row'>
                            <li className="px-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CF2729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></li>
                            <li className="px-2" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CF2729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></li>
                            <li className="px-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CF2729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></li>
                            <li className="px-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CF2729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></li>
                        </ul>
                        <div className="text-primary-900">|</div>
                        <div className='flex flex-row items-center justify-between'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#CF2729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            <div className="flex flex-col px-4 text-primary-900">
                                <p>WEBSITE UTAMA</p>
                                <p>NTBPROV.GO.ID</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-primary-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primary-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li >
                                <a href="#" className="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" aria-current="page">BERANDA</a>
                            </li>
                            <li className="">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-profile" class="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">PROFIL <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown-profile" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil NTB</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil PPID NTB</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-si-ppid" class="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">SI PPID <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown-si-ppid" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informasi Setiap Saat</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informasi Berkala</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informasi Serta Merta</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Daftar Informasi Publik</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Laporan Pelayanan Informasi</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informasi yang Dikecualikan</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>                                
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-laporan" class="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">LAPORAN <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown-laporan" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Laporan Tahunan PPID</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Laporan Keuangan Provinsi NTB</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LKJIP Provinsi NTB</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Transparansi Anggaran NTB</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="">
                                <a href="#" className="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">REGULASI</a>
                            </li>
                            <li>
                                <a href="#" className="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">BERITA</a>
                            </li>
                            <li>                                
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-galeri" class="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">GALERI <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown-galeri" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Foto</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Video</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="text-white bg-primary-900 hover:bg-white hover:text-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">HUBUNGI KAMI</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;