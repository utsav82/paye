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
const SideNav = ({ className }) => {
    return (
        <div className={cn("p-5", className)}>
            <div className="flex items-center gap-2 my-5">
                <div
                    className="w-48 justify-evenly flex items-center"
                >
                    <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                            src="https://avatar.vercel.sh/shadcn.png"
                            className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Alicia Koch</span>
                        <span className="text-sm ">m@gmail.com</span>
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
                        href: "/dashboard/expense_share",
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
                    {
                        title: "Logout",
                        icon: LogOut,
                        href: "/",
                        variant: "ghost",
                    },
                ]}
            />


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

        </div>
    )
}

export default SideNav
