'use client';
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { useState } from 'react';
import * as Icon from 'react-feather';

function LaporanTable({ data, columns }) {
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState('');

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
        sorting: sorting,
        globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });
    return (
        <div className="flex flex-col my-2">
            <div className="-my-2 sm:-mx-6 overflow-x-auto">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6">
                    <div className="flex bg-gray-100 rounded-t-lg">
                        <div className="flex items-center text-sm p-4">
                        {/* <p className="px-2">Search:</p> */}
                        <input
                            type="text"
                            placeholder="Cari Berita ..."
                            value={filtering}
                            onChange={(e) => setFiltering(e.target.value)}
                            className="px-4 py-2 border rounded-xl md:w-full w-[75%]"
                        />
                        {/* <input type="text" className="p-2 border rounded md:w-full w-[75%]" value={filtering} onChange={(e) => setFiltering(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-b-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200 md:text-sm text-xs font-medium text-gray-700 uppercase tracking-wider">
                                {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                    <th key={header.id} scope="col" 
                                    className={header.getSize() == 20 ? 'w-[5%] px-6 py-3 cursor-pointer' : 'px-6 py-3 cursor-pointer'}
                                    onClick={header.column.getToggleSortingHandler()}>
                                        <div className="flex items-center">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{ asc: <Icon.ChevronUp size={16} />, desc: <Icon.ChevronDown size={16} /> }[header.column.getIsSorted() ?? '      ']}
                                        </div>
                                    </th>
                                    ))}
                                </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 md:text-sm text-xs">
                                {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} 
                                        className="px-8 py-3 md:text-sm text-gray-600 
                                        hover:text-primary-900 hover:border-b border-primary-900">
                                        <p className=''>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
                                    </td>
                                    ))}
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex text-white py-2 text-sm justify-end space-x-2 mt-2">
                <div className=" bg-secondary-900 active:bg-secondary-800 hover:bg-secondary-800  rounded-md p-2 flex items-center">
                <Icon.ChevronsLeft onClick={() => table.setPageIndex(0)} className="cursor-pointer " />
                </div>
                <div className=" bg-secondary-900 active:bg-secondary-800 hover:bg-secondary-800  rounded-md p-2 flex items-center">
                <button disabled={!table.getCanPreviousPage()}>
                    <Icon.ChevronLeft onClick={() => table.previousPage()} className="cursor-pointer " />
                </button>
                </div>
                <p className="px-4 py-2 bg-secondary-900 active:bg-secondary-800 hover:bg-secondary-800 rounded-md flex items-center">
                {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                </p>
                <div className=" bg-secondary-900 active:bg-secondary-800 hover:bg-secondary-800  rounded-md p-2 flex items-center">
                <button disabled={!table.getCanNextPage()}>
                    <Icon.ChevronRight onClick={() => table.nextPage()} className="cursor-pointer " />
                </button>
                </div>
                <div className=" bg-secondary-900 active:bg-secondary-800 hover:bg-secondary-800  rounded-md p-2 flex items-center">
                <Icon.ChevronsRight onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="cursor-pointer " />
                </div>
            </div>
        </div>
    );
}

export default LaporanTable;