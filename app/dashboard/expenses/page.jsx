import ExpenseCard from "@/components/expense-card"
import { SearchComponent } from "@/components/search";
export const metadata = {
  title: "Expenses",
};
import { createClient } from "@/lib/supabase/server";

async function page() {

  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();

  // fetch from subbase expenses made by current user 
  const { data: expensesData, error: expensesError } = await supabase
    .from("expenses")
    .select()
    .eq('created_by', userData.user.id);

  return (
    <div className="container flex flex-col gap-4 my-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight ml-2">
        Your Expenses
      </h2>
      <SearchComponent />
      {expensesData.map((expenseData, index) => (
        <ExpenseCard key={index} expenseData={expenseData} />
      ))}
    </div>
  )
}

export default page
