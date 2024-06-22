import { Link, useLocation } from "react-router-dom";

const ListMenu = ({ path, submenu }) => {

    const location = useLocation();
    return (
        <Link to={path} className={`block px-3 py-2 mb-1 border-b-2 border-transparent ${location.pathname === path ? 
            'text-putih-100 bg-primary-900' 
            :   
            'text-blue-10'}
            transition-colors duration-300 ease-in-out hover:border-secondary-900`
            }>
            <span className="mr-2">&raquo;</span>{submenu}
        </Link>
    );
}

export default ListMenu;
