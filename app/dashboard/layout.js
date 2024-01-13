import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Bike, File, Inbox, LayoutDashboard, Home, Users2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Nav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
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
              variant: "ghost",
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
        <Button variant="outline" className="m-4 mt-2 p-3">
          <svg
          className="mr-1"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          Create group
        </Button>
        <Separator />
      </div>

      <div className="w-full"> {children}</div>
    </div>
  );
}
