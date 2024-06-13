import Link from "next/link";
import { Card } from "./ui/card";

export default function ExpenseCard({ expenseData }) {
    return (
        <Card>
            <div className="flex items-center justify-between px-6 py-4">
                <div className="text-left">
                    <h2 className="text-lg font-semibold">{expenseData.title}</h2>
                    <p className="text-sm mt-2">{expenseData.description}</p>
                    <div className="flex items-center justify-start mt-4">
                        <div style={{ backgroundColor: expenseData.categoryColor }} className={`bg-${expenseData.categoryColor} text-white rounded-full px-3 py-1 text-sm`}>{expenseData.category}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-lg font-semibol">{`₹${expenseData.amount.toFixed(2)}`}</div>
                    <div className="text-sm">{expenseData.date}</div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex justify-between px-6 pt-4 pb-4">
                    <div className="text-sm">
                        <p>
                            Expense made by: <span className="font-semibold">{expenseData.expenseMadeBy}</span>
                        </p>
                        <p>
                            Shared among: <span className="font-semibold">{`${expenseData.sharedAmong} people`}</span>
                        </p>
                    </div>
                </div>
                <Link href={`/dashboard/expense/${expenseData.id}`} className="font-light text-sm p-5">
                    View more {">"}
                </Link>
            </div>
        </Card>
    )
}
