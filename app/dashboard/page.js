import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { RecentExpenses } from "@/components/recent-expenses";

export const metadata = {
  title: "Dashboard",
};

import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createClient();

  const { data: userData } = await supabase.auth.getUser();

  const { data: expenses, error: expensesError } = await supabase
    .from("expenses")
    .select("*")
    .eq("created_by", userData.user.id);

  const totalExpensesCount = expenses.length;
  const totalExpensesAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const expenseIds = expenses.map((expense) => expense.id);

  const { data: owedShares, error: owedSharesError } = await supabase
    .from("share")
    .select("share_amount")
    .in("expense_id", expenseIds)
    .neq("user_id", userData.user.id)
    .eq("status", "pending");

  const totalMoneyOwed = owedShares.reduce(
    (sum, share) => sum + share.share_amount,
    0
  );

  const { data: userShareData, error: userShareError } = await supabase
    .from("share")
    .select("share_amount")
    .eq("user_id", userData.user.id)
    .eq("status", "pending");

  const totalUserShareAmount = userShareData.reduce(
    (sum, share) => sum + share.share_amount,
    0
  );

  return (
    <>
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Dashboard
            </h2>

            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
            </div>
          </div>
          <div className="bg-green-200 rounded p-4 sm:p-8 mb-4">
            <div className="flex items-center justify-between relative rounded">
              <div className="rounded">
                <p className="text-sm text-green-800 font-semibold text-wrap max-w-sm">
                  Welcome back!
                </p>
                <p className="text-sm text-green-800 font-semibold text-wrap max-w-sm z-1">
                  Track expenses, manage groups, and stay on top of your
                  finances effortlessly.
                </p>
              </div>
              <Image
                src="/dash.png"
                width={100}
                height={100}
                unoptimized={true}
                className="top--20 right-10 hidden w-32 sm:w-48 sm:block absolute rounded-full z--1"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="sm:col-span-2">
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
                <CardDescription>
                  {` You made ${totalExpensesCount} expenses this month.`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentExpenses expenses={expenses} />
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card className="bg-[url('/b4.svg')] bg-cover">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Expenses
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {"₹" + totalExpensesAmount}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[url('/b2.svg')] bg-cover">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Money To Receive
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {"₹" + totalMoneyOwed}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[url('/b3.svg')] bg-cover">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                   Money To Pay
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {"₹" + totalUserShareAmount}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
