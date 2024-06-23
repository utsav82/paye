import SideNav from "@/components/side-nav";
import MobileSideNav from "@/components/mobile-nav";
import CreateExpense from "@/components/create-expense";
import { Suspense } from "react";
export default async function DashBoardLayout({ children }) {
  return (
    <div className="flex ">
      <Suspense fallback={null}>
        <SideNav />
        <MobileSideNav />
      </Suspense>
      <div className="w-full"> {children}</div>
      <CreateExpense />
    </div>
  );
}
