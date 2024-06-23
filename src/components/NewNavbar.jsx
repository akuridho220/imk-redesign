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
                                    <a href="/" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" aria-current="page">BERANDA</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/si-ppid" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">SI PPID</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/profil" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">PROFIL</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/laporan" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">LAPORAN</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/berita" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">BERITA</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/galeri" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">GALERI</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/statistik" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">STATISTIK</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a href="/kontak" className="text-white bg-tertiary-900 hover:bg-white hover:text-tertiary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">HUBUNGI KAMI</a>
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