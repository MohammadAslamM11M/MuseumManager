import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSpeed, MdOutlineArchive, MdAddToQueue } from "react-icons/md";

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <MdOutlineSpeed />,
        },
        {
            path: "/archives",
            name: "Archives",
            icon: <MdOutlineArchive />,
        },
        {
            path: "/entry",
            name: "Entry",
            icon: <MdAddToQueue />,
        },
    ];
    return (
        <div className="container-fluid">
            <div className="sidebar">
                <div className="top_section">
                    {menuItem.map((item, index) => (
                        <Link to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
