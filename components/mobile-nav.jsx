"use client"
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Bike, File, Inbox, LayoutDashboard, Home, Users2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import CreateGroup from "./create-group-button";


const MobileSideNav = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <div className="md:hidden bg-background z-10 fixed">
            {!isNavOpen && <button onClick={toggleNav} className="p-3 focus:outline-none">
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
            </button>}
            {/* Side Navigation */}
            {isNavOpen && <div className="p-5 h-screen ease-in-out">
                <div onClick={toggleNav} >
                    <div className="flex items-center gap-2 mt-5 mb-2">
                        <UserNav />
                        <ModeToggle />
                    </div>
                    <Nav
                        links={[
                            {
                                title: "Dashboard",
                                icon: LayoutDashboard,
                                href: "/dashboard",
                                variant: "ghost",
                            },
                            {
                                title: "My Expenses",
                                icon: File,
                                href: "/dashboard/expenses",
                                variant: "ghost",
                            },
                            {
                                title: "Expense shares",
                                icon: Inbox,
                                href: "/dashboard/expense_share",
                                variant: "ghost",
                            },
                        ]}
                    />
                    <Separator />
                    <div className="group flex gap-4 pl-2 pt-2 m-2 font-semibold items-center">
                        <Users2 className="h-4 w-4" /> <div> Your Groups</div>
                    </div>
                    <Nav
                        links={[
                            {
                                title: "Flat Mates",
                                icon: Home,
                                href: "/dashboard/flat-mates",
                                variant: "ghost",
                            },
                            {
                                title: "Goa Trip",
                                icon: Bike,
                                href: "/dashboard/goa-trip",
                                variant: "ghost",
                            },
                        ]}
                    />
                </div>
                <CreateGroup></CreateGroup>
                <Separator className="hidden sm:block" />
            </div>}
        </div>
    );
};

export default MobileSideNav;
