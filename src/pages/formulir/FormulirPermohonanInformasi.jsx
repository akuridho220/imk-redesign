import React from 'react';

const FormulirPermohonanInformasi = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Formulir Permohonan Informasi</h1>
            <p className="mb-4">
            Jika Anda tidak menemukan informasi yang Anda butuhkan pada halaman Daftar Informasi Publik atau file tidak dapat di unduh, silahkan gunakan form di bawah ini untuk meminta informasi serta dilengkapi dengan SCAN IDENTITAS diri/kelompok. Khusus permohonan informasi yang mengatasnamakan kelompok/organisasi agar menyertakan scan ijin resmi pendirian organisasi. Demi keamanan dan kenyamanan permohonan dan penggunaan informasi, PPID Provinsi NTB hanya akan memproses permohonan informasi dari pemohon yang menyertakan identitas diri lengkap dan resmi.
            </p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nama Lengkap*</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Alamat*</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Pekerjaan*</label>
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
                    <label className="block text-gray-700">Telpon / HP*</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">SKPD Tujuan Permohonan Informasi*</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option value="">-- SKPD Tujuan --</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rincian Informasi Yang Dibutuhkan*</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Tujuan Penggunaan*</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cara Mendapatkan Salinan Informasi*</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option value="">-- Cara Mendapatkan --</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cara Pengambilan Informasi*</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option value="">-- Cara Pengambilan --</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Kirim Permohonan</button>
            </form>
        </div>
    );
}

export default FormulirPermohonanInformasi;
