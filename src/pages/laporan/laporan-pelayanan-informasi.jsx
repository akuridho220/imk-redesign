import React, { useState, useMemo } from 'react';
import LaporanTable from '../../components/LaporanTable';

const LaporanPelayananInformasi = () => {
    const data = useMemo(() => [
        {
            no: 1,
            tanggal: '10 Juni, 2024',
            informasiDiminta: 'Data statistik migrasi internal dan internasional di Provinsi Nusa Tenggara Barat selama lima tahun terakhir.',
            opd: 'dpmpddukcapilntb',
            status: 'Ditolak',
            waktuPemenuhan: 2,
            alasan: '-kami tidak menguasai informasi yang diminta'
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
            accessorKey: 'opd',
            header: 'OPD',
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
            accessorKey: 'alasan',
            header: 'Alasan',
        }
    ];


    return (
        <div className="content w-full flex flex-col md:items-center mx-auto md:m-4">
            <div className='flex flex-col md:w-4/5 bg-slate-100 rounded-lg p-2 md:p-4'>    
                <h1 className="text-2xl font-bold mb-4">Laporan Pelayanan Informasi</h1>
                <LaporanTable columns={columns} data={data}/>
            </div>
        </div>
    );
};

export default LaporanPelayananInformasi;
