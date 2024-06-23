import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import ReactPaginate from 'react-paginate';

const LaporanPelayananInformasiOld = () => {
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

    const columns = useMemo(() => [
        { Header: 'No', accessor: 'no' },
        { Header: 'Tanggal', accessor: 'tanggal' },
        { Header: 'Informasi yang Diminta', accessor: 'informasiDiminta' },
        { Header: 'OPD', accessor: 'opd' },
        { Header: 'Status', accessor: 'status' },
        { Header: 'Waktu Pemenuhan', accessor: 'waktuPemenuhan' },
        { Header: 'Alasan', accessor: 'alasan' }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }
        },
        useGlobalFilter,
        usePagination
    );

    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <div className="container mx-auto p-4">
            <style>
                {`
                    .table {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .table th,
                    .table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                    }

                    .table th {
                        background-color: #365177;
                        text-align: left;
                        color: white;
                    }

                    .table tr:nth-child(even) {
                        background-color: #f1f1f1;
                    }

                    .table tr:hover {
                        background-color: #ddd;
                    }

                    .pagination {
                        display: flex;
                        list-style: none;
                        padding: 0;
                    }

                    .pagination li {
                        margin: 0 4px;
                    }

                    .pagination li a {
                        border: 1px solid #ddd;
                        padding: 6px 12px;
                        text-decoration: none;
                        color: #333;
                    }

                    .pagination li a:hover {
                        background-color: #ddd;
                    }

                    .pagination li.active a {
                        background-color: #365177;
                        color: white;
                        border: 1px solid #365177;
                    }

                    .pagination li.disabled a {
                        color: #999;
                        cursor: not-allowed;
                    }
                `}
            </style>
            <h1 className="text-2xl font-bold mb-4">Laporan Pelayanan Keberatan</h1>
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search"
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination mt-4">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={({ selected }) => gotoPage(selected)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    className="flex justify-center items-center space-x-2"
                />
                <div className="flex justify-between items-center mt-2">
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <span>
                        | Go to page:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            className="p-2 border border-gray-300 rounded"
                            style={{ width: '50px' }}
                        />
                    </span>
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                        className="p-2 border border-gray-300 rounded"
                    >
                        {[10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default LaporanPelayananInformasiOld;
