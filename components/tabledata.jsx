import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "./ui/button"

export default function DataTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Group</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payer</TableHead>
          <TableHead className="min-w-36" >Date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.groupName}</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>{data.payer}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell>{"₹" + data.amount}</TableCell>
            {(data.status === 'pending') && < TableCell > <Button className="rounded">Mark as Paid</Button></TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table >
  )
}
