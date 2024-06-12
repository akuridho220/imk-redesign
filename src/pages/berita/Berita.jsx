// import Card from "../../components/Card";
// import Layout from "../../components/Layout";

// const Berita = () => {
//     return(
//         <Layout 
//             subhead="Berita"
//             detail="ini isinya tentang berita-berita ya cuy"
//         >
//             <div className="flex flex-col md:flex-row gap-8 py-6 mt-4">
//                 <div className="w-full md:w-2/3 lg:w-4/5">
//                     {/* search and total record */}
//                     <div className="flex items-stretch justify-start mb-4 -mt-3">
//                         <h1>jumlah baris sini</h1>
//                         <h1>search</h1>
//                     </div>
//                     {/* list berita */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <Card />
//                         <Card />
//                         <Card />
//                     </div>
//                     {/* pagination */}
//                     <div className="text-center mt-4">
//                         <p>diisi pagination</p>
//                     </div>

//                 </div>


//                 <div className="w-full md:w-1/3 lg:w-1/5">
//                 {/* saat size kecil */}
//                 <div className="max-sm:hidden">
//                     <div className="mb-6">
//                         <h4>Berita Terpopuler</h4>
//                     </div>
//                     <div className="bg-grey p-4 rounded-xl flex flex-col gap-y-8">
//                         <div className="flex flex-col gap-y-4">
//                             <h1>ini div berita-1</h1>
//                             <h1>ini div berita-2</h1>
//                             <h1>ini div berita-3</h1>
//                         </div>
//                     </div>

//                 </div>

//                 {/* saat size biasa */}
//                 <div className="w-full bg-grey rounded-lg p-3 md:hidden">
//   <div className="w-full">
//     <button className="transition-all duration-100 w-full font-semibold" type="button" onClick={() => setIsOpen(!isOpen)}>
//       <div className="text-inherit flex justify-start items-center gap-x-4">
//         <div className="flex flex-row flex-nowrap gap-x-2 items-center flex-grow">
//           <div className="rounded-md bg-sp p-1">
//             <div className="w-3 h-3">
//               <div className="w-full aspect-square bg-contain bg-white" style={{ maskImage: 'url("/assets/icons/filter.svg")', maskRepeat: 'no-repeat', maskPosition: 'center center', maskSize: 'contain' }}></div>
//             </div>
//           </div>
//           <p style={{ fontSize: '100%' }}>Filter Berita</p>
//         </div>
//         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className={`svg-inline--fa fa-chevron-down h-5 w-5 text-black flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//           <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
//         </svg>
//       </div>
//     </button>

//     <div className={`accordion-content ${isOpen ? 'block' : 'hidden'} transition-duration-150`}>
//       <div className="flex flex-col">
//         <div className="bg-grey p-4 rounded-xl flex flex-col gap-y-8">
//           <div className="flex flex-col gap-y-4">
//             <h1>ini div berita-1</h1>
//             <h1>ini div berita-2</h1>
//             <h1>ini div berita-3</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Berita;


import { useState } from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const Berita = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout 
        subhead="Berita"
        detail="ini isinya tentang berita-berita ya cuy"
    >
        <div className="flex flex-col md:flex-row gap-8 py-6 mt-4">
            <div className="w-full md:w-2/3 lg:w-4/5">
                {/* search and total record */}
                <div className="flex items-stretch justify-start mb-4 -mt-3">
                    <h1>jumlah baris sini</h1>
                    <h1>search</h1>
                </div>
                {/* list berita */}
                <div className="grid grid-cols-2 gap-4">
                    <Card />
                    <Card />
                    <Card />
                </div>
                {/* pagination */}
                <div className="text-center mt-4">
                    <p>diisi pagination</p>
                </div>

            </div>

            <div className="w-full md:w-1/3 lg:w-1/5">
              {/* hanya muncul saat mode layar kecil */}
              <div className="max-sm:hidden">
                <div className="mb-6">
                    <h4>Berita Terpopuler</h4>
                </div>
                <div className="bg-grey p-4 rounded-xl flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-4">
                        <h1>ini div berita-1</h1>
                        <h1>ini div berita-2</h1>
                        <h1>ini div berita-3</h1>
                    </div>
                </div>
              </div>

              {/* hanya muncul saat mode layar besar */}
              <div className="w-full bg-grey rounded-lg p-3 md:hidden">
                <div className="w-full bg-grey rounded-lg p-3">
                    <button className="transition-all duration-100 w-full font-semibold flex justify-between items-center" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <div className="flex items-center gap-x-4">
                            <div className="rounded-md bg-sp p-1">
                            <div className="w-3 h-3">
                                {/* ganti asset ttg beritaaa */}
                                <div className="w-full aspect-square bg-contain bg-white" style={{ maskImage: 'url("/assets/icons/filter.svg")', maskRepeat: 'no-repeat', maskPosition: 'center center', maskSize: 'contain' }}></div>
                            </div>
                            </div>
                            <p style={{ fontSize: '100%' }}>Filter Berita</p>
                        </div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className={`svg-inline--fa fa-chevron-down h-5 w-5 text-black flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                    </button>

                  <div className={`accordion-content ${isOpen ? 'block' : 'hidden'} transition-duration-150`}>
                    <div className="flex flex-col">
                      <div className="bg-grey p-4 rounded-xl flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-4">
                          <h1>ini div berita-1</h1>
                          <h1>ini div berita-2</h1>
                          <h1>ini div berita-3</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

        </div>
    </Layout>
  );
}

export default Berita;
