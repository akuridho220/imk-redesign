import React from "react";
import SubHeader from "./SubHeader";
const Layout = ({ subhead, detail, children }) => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-36 py-6">
            <SubHeader subhead = {subhead} detail = {detail}/>
            {children}
        </div>
    );
};

export default Layout;
