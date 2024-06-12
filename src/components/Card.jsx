import { Link } from "react-router-dom";

const Card = (props) => {
    return(
        <div className="p-5 bg-white rounded-xl hover:bg-slate-100 ease-linear transition-all duration-150">
            <Link to={props.path}>
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
                            style={{ color: "transparent;" }} 
                        />
                    </div>
                    <div className="w-full md:w-5/6">
                        <p>
                            <small className="text-black-body flex items-center"> 
                            {props.tgl} 
                            | 
                            <span className="rounded-full bg-blue-700 px-2 py-1">{props.jenis}</span>
                            </small>
                        </p>
                        <p className="text-main-primary mt-2 text-xl">{props.judul}</p>
                    </div>
                </div>
            {/* </a> */}
            </Link>
        </div>
    )
}

export default Card;