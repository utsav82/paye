import SideNav from "@/components/side-nav";
import MobileSideNav from "@/components/mobile-nav";
import CreateExpense from "@/components/create-expense";
import { createClient } from "@/lib/supabase/server";

export default async function DashBoardLayout({ children }) {

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex">
      <SideNav />
      <MobileSideNav />
      <div className="w-full"> {children}</div>
      <CreateExpense />
    </div>
  );
}
