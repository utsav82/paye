import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Bike, File, Inbox, LayoutDashboard, Home, Users2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
export default function DashBoardLayout({ children }) {
  return (
    <div className="flex">
      <div className="hidden md:block p-5">
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
              variant: "default",
            },
            {
              title: "My Expenses",
              icon: File,
              href: "/dashboard/expenses",
              variant: "ghost",
            },
            {
              title: "Notifications",
              icon: Inbox,
              href: "/dashboard/notifications",
              variant: "ghost",
            },
          ]}
        />
        <Separator />
        <div className="group flex gap-4 pl-2 m-2 font-semibold items-center">
          <Users2 className="h-4 w-4" /> <div> Your Groups</div>
        </div>
        <Separator />
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
      <div className="w-full"> {children}</div>
    </div>
  );
}
