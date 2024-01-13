import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const page = ({ params }) => {
    const selectedExpense = {
        description: "Grocery Shopping",
        amount: 50.25,
        category: "Food",
        date: new Date("2024-01-15"),
        group_id: "flat-mates", 
        userName: "Alicia Koch", 
        shares: [
            { user_id: '1', user_name: 'Olivia Martin', share_amount: 25.38 },
            { user_id: '2', user_name: 'Jackson Lee', share_amount: 25.37 },
        ]
    };
    const { description, amount, category, date, groupName, userName, shares } = selectedExpense;
    return (
        <Card className="h-screen">
            <CardHeader>
                <CardTitle>{description}</CardTitle>
                <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">Amount: ${amount.toFixed(2)}</p>
                    <p>Date: {new Date(date).toLocaleDateString()}</p>
                    <p>User: {userName || 'Not specified'}</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold mb-2">Expense Shares:</p>
                    <ul>
                        {shares.map((share) => (
                            <li key={share.user_id}>
                                {share.user_name}: ${share.share_amount.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default page
