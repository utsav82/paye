import SideNav from "@/components/side-nav";
import MobileSideNav from "@/components/mobile-nav";
import CreateExpense from "@/components/create-expense";

export default async function DashBoardLayout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <MobileSideNav />
      <div className="w-full"> {children}</div>
      <CreateExpense />
    </div>
  );
}
