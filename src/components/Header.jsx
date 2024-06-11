import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <header className="bg-white border-gray-200 dark:bg-gray-900 mx-10" >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="..\src\assets\img\logo\logoPPIDNTB.png" className="h-16" alt="PPID Logo" />
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <ul className='flex flex-row'>
                            <li className="px-2">
                                <Link to="https://www.facebook.com/humasntbprov" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365177" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </Link>
                            </li>
                            <li className="px-2" >
                                <Link to="https://www.instagram.com/diskominfotikntb/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365177" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link to="https://twitter.com/NTB_Prov" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365177" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link to="https://www.youtube.com/channel/UCuSi3ONPvUJzBFZMsL7NOxA" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365177" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                </Link>
                            </li>
                        </ul>
                        <div className="text-tertiary-900">|</div>
                        <div className='flex flex-row items-center justify-between'>
                            <Link to="https://ntbprov.go.id/" target="_blank" className="flex flex-row items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365177" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <div className="flex flex-col px-4 text-tertiary-900">
                                    <p>WEBSITE UTAMA</p>
                                    <p>NTBPROV.GO.ID</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <Navbar />
        </div>
    )
}

export default Header;