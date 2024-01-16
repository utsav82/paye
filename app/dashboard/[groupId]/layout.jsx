import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
const layout = ({ params, children }) => {
    const expenses = [
        {
            description: "Grocery Shopping",
            amount: 50.25,
            category: "Food",
            date: new Date("2024-01-15"),
            group_id: "flat-mates",
            user_id: "USER_ID_1",
            shares: [
                { user_id: "USER_ID_1", share_amount: 25.00 },
                { user_id: "USER_ID_2", share_amount: 25.00 },
            ]
        },
        {
            description: "Movie Night",
            amount: 30.00,
            category: "Entertainment",
            date: new Date("2024-01-20"),
            group_id: "flat-mates",
            user_id: "USER_ID_2",
            shares: [
                { user_id: "USER_ID_2", share_amount: 15.00 },
                { user_id: "USER_ID_3", share_amount: 15.00 },
            ]
        },
        {
            description: "Utilities",
            amount: 80.50,
            category: "Bills",
            date: new Date("2024-01-25"),
            group_id: "flat-mates",
            user_id: "USER_ID_1",
            shares: [
                { user_id: "USER_ID_1", share_amount: 40.25 },
                { user_id: "USER_ID_2", share_amount: 40.25 },
            ]
        },
        {
            description: "Grocery Shopping",
            amount: 50.25,
            category: "Food",
            date: new Date("2024-01-15"),
            group_id: "flat-mates",
            user_id: "USER_ID_1",
            shares: [
                { user_id: "USER_ID_1", share_amount: 25.00 },
                { user_id: "USER_ID_2", share_amount: 25.00 },
            ]
        },


    ];
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="h-screen container mt-10 items-stretch"
        >
            <ResizablePanel defaultSize={50} minSize={40}>
                <div className="flex items-center px-4 py-2">
                    <Link
                        href={`/dashboard/${params.groupId}`} className="text-xl font-bold">{params.groupId}</Link>
                </div>
                <Separator />
                <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                </div>
                <div className="m-0">
                    <ScrollArea className="h-screen">
                        <div className="flex flex-col gap-2 p-4 pt-0">
                            {expenses.map((expense) => (
                                <Link href={`/dashboard/${expense.group_id}/${expense.id}`}
                                    key={expense.id}
                                    className=
                                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                                >
                                    <div className="flex w-full flex-col gap-1">
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="font-semibold">{expense.description}</div>
                                            </div>
                                            <div
                                                className=
                                                "hidden sm:block ml-auto text-xs text-foreground"
                                            >
                                                {formatDistanceToNow(new Date(expense.date), { addSuffix: true })}
                                            </div>
                                        </div>
                                        <div className="text-xs font-medium">{expense.category}</div>
                                    </div>
                                    <div className="line-clamp-2 text-xs text-muted-foreground">
                                        {expense.amount.toFixed(2)} USD 
                                    </div>
                                    <div
                                        className=
                                        "sm:hidden text-xs text-foreground"
                                    >
                                        {formatDistanceToNow(new Date(expense.date), { addSuffix: true })}
                                    </div>
                                    {expense.groupName && <div className="text-xs text-muted-foreground">{expense.groupName}</div>}
                                </Link>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                {children}
            </ResizablePanel>
        </ResizablePanelGroup >
    )
}

export default layout
