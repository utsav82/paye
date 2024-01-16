"use client"
import React, { useState } from 'react';
import SideNav from './side-nav';
const MobileSideNav = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <div className="md:hidden  bg-background z-10 fixed">
            <button onClick={toggleNav} className="p-3 focus:outline-none">
                <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                {/* Side Navigation */}
                {isNavOpen && <SideNav className={"h-screen ease-in"} />}
            </button>
        </div>
    );
};

export default MobileSideNav;
