import React from "react";
import SubHeader from "./SubHeader";
const Layout = ({ subhead, children }) => {
    return (
        <div className="container mx-auto ">
            <SubHeader subhead = {subhead}/>
            {children}
        </div>
    );
};

export default Layout;
