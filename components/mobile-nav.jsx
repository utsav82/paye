"use client"
import React, { useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Bell, File, Inbox, LayoutDashboard, LogOut, Hand } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import SignOutButton from "./sign-out-button";
import { createClient } from "@/lib/supabase/client";

const MobileSideNav = () => {


    const [user, setUser] = useState(null);

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const { data } = await supabase.auth.getUser();
            setUser(data.user.user_metadata);
        }
        fetchUser();
    }, []);

    if (!user) return null;

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
                    <div className="flex items-center gap-2 my-5">
                        <div
                            className="w-48 justify-evenly flex items-center"
                        >
                            <Avatar className="mr-2 h-8 w-8">
                                <AvatarImage
                                    src={user.picture}
                                    className="grayscale"
                                />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-md font-semibold">{user.name}</span>
                                {/* <span className="text-sm text-wrap">{user.email}</span> */}
                            </div>
                        </div>
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
                                title: "Money owed",
                                icon: Inbox,
                                href: "/dashboard/owe",
                                variant: "ghost",
                            },
                            {
                                title: "Shared Expenses",
                                icon: Hand,
                                href: "/dashboard/share",
                                variant: "ghost",
                            },
                        ]}
                    />
                    <Separator />
                    <Nav
                        links={[
                            {
                                title: "Notifications",
                                icon: Bell,
                                href: "/dashboard/notifications",
                                variant: "ghost",
                            },
                        ]}
                    />
                    <SignOutButton />
                </div>
            </div>}
        </div>
    );
};

export default MobileSideNav;
