import React from "react";
import DataTable from "@/components/tabledata2";
import { createClient } from "@/lib/supabase/server";
export const metadata = {
  title: "Money to Receive",
};

const page = async () => {

  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) throw userError;

  const { data: expenses, error: expensesError } = await supabase
    .from("expenses")
    .select("*")
    .eq("created_by", userData.user.id);

  const expenseIds = expenses.map((expense) => expense.id);

  const { data: owedShares, error: owedSharesError } = await supabase
    .from("share")
    .select('user_id, users(name, email), share_amount,created_at,expense_id')
    .in("expense_id", expenseIds)
    .neq("user_id", userData.user.id)
    .eq("status", "pending");

  if (owedSharesError) throw owedSharesError;

  const mergedData = owedShares.map((share) => {
    const expense = expenses.find((exp) => exp.id === share.expense_id);
    return {
      ...share,
      expense_title: expense.title,
    };
  });

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-semibold leading-none tracking-tight border-b py-5">Money to Receive</h3>
      <DataTable data={mergedData} />
    </div>
  );
};

export default page;
