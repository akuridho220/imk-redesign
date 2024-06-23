import { Link } from "react-router-dom";

const NewNavbar = () => {

    return (
        <div className="w-full" id="navbar">
            <div className="bg-tertiary-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center p-3 md:p-4">
                    <label for="menu-toggle" className="pointer-cursor lg:hidden block justify-center text-sm text-gray-500 rounded-lg md:hidden "><svg className="fill-current text-white " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="hidden md:flex items-center md:w-auto w-full justify-center" id="menu">
                        <nav className="w-full mx-auto">
                            <ul className="w-full justofy-items-center md:flex flex-col md:flex-row items-center justify-center text-base text-gray-700 pt-4 lg:pt-0 md:gap-8">
                                <li className="flex items-center justify-center">
                                    <Link to="/" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" aria-current="page">BERANDA</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/si-ppid" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">SI PPID</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/profil" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">PROFIL</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/laporan" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">LAPORAN</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/berita" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">BERITA</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/galeri" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">GALERI</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/statistik" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">STATISTIK</Link>
                                </li>
                                <li className="flex items-center justify-center">
                                    <Link to="/kontak" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">HUBUNGI KAMI</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNavbar;