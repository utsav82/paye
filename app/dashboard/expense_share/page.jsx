import React from "react";
import DataTable from "@/components/tabledata";

const data = [
  {
    id: "728ed52g",
    amount: 10000,
    status: "pending",
    groupName: "Movie Night",
    payer: "Rishabh",
    date: "30-Mar-2023",
  },
  {
    id: "728ed52h",
    amount: 100,
    status: "Completed",
    groupName: "House Rent",
    payer: "Rishi",
    date: "17-Mar-2020",
  },
  {
    id: "728ed52i",
    amount: 12000,
    status: "pending",
    groupName: "Ayodhya Trip",
    payer: "Karan",
    date: "11-Mar-2019",
  },
  {
    id: "728ed52j",
    amount: 8000,
    status: "pending",
    groupName: "Night Out",
    payer: "Deepanshu",
    date: "1-Mar-2019",
  },
  {
    id: "728ed52k",
    amount: 100000,
    status: "Completed",
    groupName: "Fresher Party",
    payer: "Pranjal",
    date: "6-Mar-2018",
  },
];

const pendingTransactions = data.filter(transaction => transaction.status.toLowerCase() === 'pending');
const completedTransactions = data.filter(transaction => transaction.status.toLowerCase() === 'completed');

const page = () => {
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
