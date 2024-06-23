import React, { useState, useMemo } from 'react';
import LaporanTable from '../../components/LaporanTable';

const LaporanPelayananKeberatan = () => {
    const data = useMemo(() => [
        {
            no: 1,
            tanggal: '24 Mei, 2024',
            namaLengkap: 'bKzRcIEfmc',
            informasiDiminta: 'wNNuGjVEVM',
            alasanPengajuan: 'Permohonan Informasi Di Tolak , Permintaan Informasi Tidak Dipenuhi , Informasi Berkala Tidak Disediakan , Penyalahgunaan Wewenang Pejabat PPID , Informasi Disampaikan Melebihi Jangka Waktu Yang Ditentukan , Biaya Yang Dikenakan Tidak Wajar , Permintaan Informasi Tidak Ditanggapi , Permintaan Informasi Ditanggapi Tidak Sebagaimana Yang Diminta',
            status: 'Menunggu',
            waktuPemenuhan: 0
        },
        {
            no: 2,
            tanggal: '24 Mei, 2024',
            namaLengkap: 'bKzRcIEfmc',
            informasiDiminta: 'wNNuGjVEVM',
            alasanPengajuan: 'Permintaan Informasi Ditanggapi Tidak Sebagaimana Yang Diminta , Informasi Berkala Tidak Disediakan , Permintaan Informasi Tidak Ditanggapi , Penyalahgunaan Wewenang Pejabat PPID , Permintaan Informasi Tidak Dipenuhi , Permohonan Informasi Di Tolak , Biaya Yang Dikenakan Tidak Wajar',
            status: 'Menunggu',
            waktuPemenuhan: 0
        },
        // Add more data as needed
    ], []);

    const columns = [
        {
            accessorKey: 'no',
            header: 'No',
            size: 20
        },
        {
            accessorKey: 'tanggal',
            header: 'Tanggal',
        },
        {
            accessorKey: 'informasiDiminta',
            header: 'Informasi yang Diminta',
        },
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            accessorKey: 'waktuPemenuhan',
            header: 'Waktu Pemenuhan',
        },
        {
            accessorKey: 'alasanPengajuan',
            header: 'Alasan Pengajuan',
        }
    ];

    return (
        <div className="content w-full flex flex-col items-center mx-auto md:m-4">
            <div className='flex flex-col md:w-4/5 bg-slate-100 rounded-lg p-2 md:p-4'>
                <h1 className="text-2xl font-bold mb-4">Laporan Pelayanan Keberatan</h1>
                <LaporanTable columns={columns} data={data}/>
            </div>
        </div>
    );
};

export default LaporanPelayananKeberatan;
