import SideNav from "@/components/side-nav";
import MobileSideNav from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import CreateExpense from "@/components/create-expense";
export default function DashBoardLayout({ children }) {
  return (
    <div className="flex">
      <SideNav className={"hidden md:block "} />
      <MobileSideNav />
      <div className="w-full"> {children}</div>
      <CreateExpense />
    </div>
  );
}
