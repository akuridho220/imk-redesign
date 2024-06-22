import { Link, useLocation } from "react-router-dom";

const Card = (props) => {
    const location = useLocation();
    const basePath = location.pathname.startsWith('/laporan') ? '/laporan/detail' : '/berita/detail';

    return(
    <>
        {props.berita == null ? 
            (<div className="p-5 bg-slate-200 rounded-xl hover:bg-base-100 ease-linear transition-all duration-150">
                <Link to={{
                    pathname: basePath,
                    state: { 
                    title: "contoh judul"
                    }
                }}>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="w-full md:w-1/6">
                            <img 
                                alt={props.judul}
                                width="1080" 
                                height="1080" 
                                decoding="async" 
                                data-nimg="1" 
                                className="rounded-md object-cover object-top h-full w-full" 
                                src="https://picsum.photos/id/237/200/300"
                                style={{ color: "transparent" }} 
                            />
                        </div>
                        <div className="w-full md:w-5/6">
                            <p>
                                <small className="text-black-body flex items-center flex-wrap"> 
                                    <span className="mr-4 mb-1">{props.tgl} </span>
                                    <span className={`rounded-full ${props.jenis === "Provinsi" ? 'bg-red-700' : props.jenis === "PPID" ? 'bg-green-700' : 'bg-blue-700'} text-white px-2 mb-1`}>
                                        {props.jenis}
                                    </span>
                                </small>
                            </p>
                            <p className="text-main-primary mt-1 text-xl">{props.judul}</p>
                        </div>
                    </div>
                </Link>
            </div>)
            :
            (
            <Link to='/berita/detail' className="bg-slate-100 hover:bg-base-100 mx-1 rounded flex flex-col mb-4 p-3">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="w-1/3">
                        <img className=" rounded" src="https://picsum.photos/id/237/120/150" alt="" />
                      </div>
                      <div className="w-2/3 ml-1 flex flex-row flex-wrap mt-1">
                        <small className='font-bold text-xs tracking-tight'>PPID Provinsi Jakarta menerima kunjungan</small>
                        {/* <span className={`rounded-full ${props.jenis === "Provinsi" ? 'bg-red-700' : props.jenis === "PPID" ? 'bg-green-700' : 'bg-blue-700'} text-white px-2 mb-1`}>
                            {props.jenis}
                        </span> */}
                        <small className='text-xs tracking-tight'>10 Juni 2024</small>
                      </div>
                    </div>
                </div>
            </Link>
        )
        }
    </>
    )
}

export default Card;