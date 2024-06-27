"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs2";

export function HeroTabs() {
  const tabs = [
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dashboard</p>
          <Image
            src="/dashboard.png"
            alt="dashboard image"
            width="1000"
            height="1000"
            unoptimized={true}
            className="object-cover rounded-xl mx-auto mt-10"
          />
        </div>
      ),
    },
    {
      title: "Expenses",
      value: "expenses",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Expenses</p>
          <Image
            src="/expenses.png"
            alt="expenses image"
            width="1000"
            height="1000"
            unoptimized={true}
            className="object-cover rounded-xl mx-auto mt-10" />
        </div>
      ),
    },
    {
      title: "Shares",
      value: "shares",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Expense Shares</p>
          <Image
            src="/shares.png"
            alt="shares image"
            width="1000"
            height="1000"
            unoptimized={true}
            className="object-cover rounded-xl mx-auto mt-10" />
        </div>
      ),
    },
    {
      title: "Expense Details",
      value: "details",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Expense Details</p>
          <Image
            src="/details.png"
            alt="details image"
            width="1000"
            height="1000"
            unoptimized={true}
            className="object-cover rounded-xl mx-auto mt-10" />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

