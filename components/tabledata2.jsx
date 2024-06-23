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



export default function DataTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Expense</TableHead>
          <TableHead>From</TableHead>
          <TableHead className="min-w-36" >Date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data,index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{data.expense_title}</TableCell>
            <TableCell>{data.users.name}</TableCell>
            <TableCell>{new Date(data.created_at).toDateString()}</TableCell>
            <TableCell>{"₹" + data.share_amount}</TableCell>
            {/* <Button>Ping</Button> */}
          </TableRow>
        ))}
      </TableBody>
    </Table >
  )
}
