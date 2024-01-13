import SideNav from "@/components/side-nav";
import MobileSideNav from "@/components/mobile-nav";
export default function DashBoardLayout({ children }) {
  return (
    <div className="flex">
      <SideNav className={"hidden md:block "} />
      <MobileSideNav />
      <div className="w-full"> {children}</div>
    </div>
  );
}
