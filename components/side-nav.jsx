import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bell, File, Inbox, LayoutDashboard, LogOut } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import SignOutButton from "./sign-out-button";
import { createClient } from "@/lib/supabase/server";
const SideNav = async () => {

    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    const user = data.user.user_metadata;
    if (error) {
        return <div>Error occured</div>
    }

    return (
        <div className="p-5 hidden md:block ">
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
                        title: "Expense shares",
                        icon: Inbox,
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

            {/* 
             TODO: Add Groups 
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
            <CreateGroup></CreateGroup>
            */}

        </div >
    )
}

export default SideNav
