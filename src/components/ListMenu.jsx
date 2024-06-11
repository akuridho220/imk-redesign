import { Link, useLocation } from "react-router-dom";

const ListMenu = ({ path, submenu }) => {

    const location = useLocation();
    return (
        <Link to={path} className={`block py-1 ${location.pathname === path ? 'text-blue-600' : 'text-blue-10'}`}>
            <span className="mr-2">&raquo;</span>{submenu}
        </Link>
    );
}

export default ListMenu;
