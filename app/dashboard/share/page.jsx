import React from "react";
import DataTable from "@/components/tabledata";
import { createClient } from "@/lib/supabase/server";
export const metadata = {
  title: "Expense Shares",
};

const page = async () => {

  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) throw userError;

  const { data: shareData, error: shareError } = await supabase
    .from('share')
    .select('*,expense:expenses(title,date,created_by:users(name,id))')
    .eq('user_id', userData.user.id);


  const pendingTransactions = shareData.filter(transaction => transaction.status.toLowerCase() === 'pending');
  const completedTransactions = shareData.filter(transaction => transaction.status.toLowerCase() === 'successful');

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-semibold leading-none tracking-tight border-b py-3">Pending transactions</h3>
      <DataTable data={pendingTransactions} />
      <h3 className="text-2xl font-semibold leading-none tracking-tight border-b py-3">Sucessful transactions</h3>
      <DataTable data={completedTransactions} />
    </div>
  );
};

export default page;
