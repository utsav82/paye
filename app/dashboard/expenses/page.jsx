import React from "react";
import DataTable from "@/components/ui/tabledata";

const data = [
  {
    id: "728ed52f",
    amount: 5000,
    status: "pending",
    groupName: "Goa Trip",
  },
  {
    id: "728ed52g",
    amount: 10000,
    status: "pending",
    groupName: "Movie Night",
  },
  {
    id: "728ed52h",
    amount: 100,
    status: "Completed",
    groupName: "House Rent",
  },
  {
    id: "728ed52i",
    amount: 12000,
    status: "pending",
    groupName: "Ayodhya Trip",
  },
  {
    id: "728ed52j",
    amount: 8000,
    status: "pending",
    groupName: "Night Out",
  },
  {
    id: "728ed52k",
    amount: 100000,
    status: "Completed",
    groupName: "Fresher Party",
  },
];
const columns = [
  {
    accessorKey: "groupName",
    header: "GroupName",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
const page = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
