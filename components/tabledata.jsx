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
import MarkAsPaid from "@/components/mark-as-paid"


export default function DataTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Expense</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payer</TableHead>
          <TableHead className="min-w-36" >Date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.expense.title}</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>{data.expense.created_by.name}</TableCell>
            <TableCell>{new Date(data.expense.date).toDateString()}</TableCell>
            <TableCell>{"₹" + data.share_amount}</TableCell>
            {(data.status === 'pending') && <TableCell > <MarkAsPaid shareId={data.id} userId={data.user_id} /></TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table >
  )
}
