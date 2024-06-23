import React from 'react';

const FormulirPengajuanKeberatan = () => {
    return (
        <div className="content w-full flex flex-col items-center justify-center mx-auto md:m-4">
            <div className='w-full flex flex-col items-center md:w-4/5 bg-slate-100 rounded-lg p-2 md:p-4'>
                <h1 className="text-2xl font-bold mb-4">Formulir Pengajuan Keberatan</h1>
                <p className="mb-4 text-justify">
                    Jika anda tidak puas dengan pelayanan atas permohonan informasi publik serta penyalahgunaan wewenang yang anda temui,
                    silahkan gunakan form di bawah ini untuk mengajukan keberatan. Silahkan isikan form di bawah sesuai dengan keberatan yang akan anda laporkan.
                    Demi keamanan dan kenyamanan pengajuan keberatan, PPID Provinsi NTB hanya akan memproses keberatan dari pemohon yang menyertakan identitas diri lengkap dan resmi.
                </p>
                <form className='w-full'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nama Lengkap*</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Identitas*</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option value="">-- Jenis Identitas --</option>
                            <option value="ktp">KTP</option>
                            <option value="sim">SIM</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">No Identitas*</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Scan Identitas*</label>
                        <input type="file" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Informasi yang Diminta*</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Alasan Pengajuan Keberatan*</label>
                        <div>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Permohonan Informasi Ditolak
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Informasi Berkala Tidak Disediakan
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Permintaan Informasi Tidak Ditanggapi
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Permintaan Informasi Ditanggapi Tidak Sebagaimana Yang Diminta
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Permintaan Informasi Tidak Dipenuhi
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Biaya Yang Dikenakan Tidak Wajar
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Informasi Disampaikan Melebihi Jangka Waktu Yang Ditentukan
                            </label>
                            <label className="block">
                                <input type="checkbox" className="mr-2" />
                                Penyalahgunaan Wewenang Pejabat PPID
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Keterangan Tambahan*</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-tertiary-900 text-white p-2 rounded">Kirim Keberatan</button>
                </form>
            </div>
        </div>
    );
}

export default FormulirPengajuanKeberatan;
