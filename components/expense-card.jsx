import Link from "next/link";
import { Card } from "./ui/card";
import getRandomCategoryColor from "../lib/category-color";

export default function ExpenseCard({ expenseData }) {
    return (
        <Card>
            <div className="flex items-center justify-between px-6 py-4">
                <div className="text-left">
                    <h2 className="text-lg font-semibold">{expenseData.title}</h2>
                    <p className="text-sm mt-2">{expenseData.description}</p>
                    <div className="flex items-center justify-start mt-4">
                        <div style={{ backgroundColor: getRandomCategoryColor() }} className={`text-white rounded-full px-3 py-1 text-sm`}>{expenseData.category}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-lg font-semibol">{`₹${expenseData.amount.toFixed(2)}`}</div>
                    <div className="text-sm">{new Date(expenseData.date).toDateString()}</div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Link href={`/dashboard/expense/${expenseData.id}`} className="font-light text-sm p-5">
                    View more {">"}
                </Link>
            </div>
        </Card>
    )
}
