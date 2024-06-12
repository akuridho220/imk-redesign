import React from "react";
import SubHeader from "./SubHeader";
const Layout = ({ subhead, detail, children }) => {
    return (
        <div className="container mx-auto ">
            <SubHeader subhead = {subhead} detail = {detail}/>
            {children}
        </div>
    );
};

export default Layout;
