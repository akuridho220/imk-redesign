import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <nav className="bg-tertiary-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-tertiary-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-tertiary-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li >
                                <Link to="/" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" aria-current="page">BERANDA</Link>
                            </li>
                            <li className="">
                                <Link to="/si-ppid" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">SI PPID</Link>
                            </li>
                            <li className="">
                                <Link to="/profil" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">PROFIL</Link>
                            </li>
                            <li className="">
                                <Link to="/laporan" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">LAPORAN</Link>
                            </li>
                            <li>
                                <Link to="/berita" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">BERITA</Link>
                            </li>
                            <li>                                
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-galeri" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">GALERI <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown-galeri" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link to="/galeri" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Foto</Link>
                                        </li>
                                        <li>
                                            <Link to="/galeri" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Video</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/kontak" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">HUBUNGI KAMI</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;