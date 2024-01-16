import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bike, File, Inbox, LayoutDashboard, Home, Users2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import CreateGroup from "./create-group-button";
const SideNav = ({ className }) => {
    return (
        <div className={cn("p-5", className)}>
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
            <CreateGroup></CreateGroup>
            <Separator className="hidden sm:block" />
        </div>
    )
}

export default SideNav
