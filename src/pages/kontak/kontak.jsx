import BoxHeader from "../../components/BoxHeader";

const Kontak = () => {
    return (
        <div className="content flex flex-col items-center m-4">
            <BoxHeader title="Kontak Kami"/>
            <div className="flex flex-col md:flex-row my-10 md:w-3/4">
                <div className="flex flex-col md:w-1/2">
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31561.86469763236!2d116.102117!3d-8.573573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0a05868bf9d%3A0x873f581b2730c881!2sDinas%20Komunikasi%20Informatika%20dan%20Statistik%20Prov%20NTB!5e0!3m2!1sid!2sid!4v1718273473073!5m2!1sid!2sid" width="100%" height="320" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="p-2 text-sm">
                        <div className="flex flex-col text-justify">
                            <h2 className="font-bold">PPID Provinsi Nusa Tenggara Barat</h2>
                            <p className=""><span className="font-medium">Sekretariat :</span> Jl. Udayana No. 14 Selaparang, Kota Mataram, Nusa Tenggara Barat (Kantor Dinas Kominfotik Prov. NTB)</p>
                            <p className=""><span className="font-medium">Pelayanan Informasi dan Dokumentasi :</span> Gedung Kemitraan, Jalan Udayana No. 14, Kota Mataram</p>
                            <p><span className="font-medium">Telp : </span>(0370) 644264/645294</p>
                            <p><span className="font-medium">Fax : </span>(0370) 644264</p>
                            <p><span className="font-medium">Email : </span>ppid@ntbprov.go.id</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label for="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label for="judul-pesan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul Pesan</label>
                            <input type="text" id="judul-pesan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />    
                        </div>
                        <div className="mb-5">
                            <label for="pesan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Isi Pesan</label>
                            <textarea id="pesan" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="text-white bg-primary-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontak;