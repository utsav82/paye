import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const Page = ({ params }) => {
    const { title, amount, category, date, expenseMadeBy, shares } = {
        title: "Grocery Shopping",
        amount: 50.25,
        category: "Food",
        date: "January 15, 2024",
        expenseMadeBy: "Alicia Koch",
        shares: [
            { avatarFallback: "JL", name: "Jackson", amount: 25.37 },
            { avatarFallback: "OM", name: "Olivia", amount: 25.37 },
            { avatarFallback: "RS", name: "Rishabh", amount: 25.37 },
        ],
    };
    return (
        <div className="w-full max-w-md overflow-hidden sm:pl-5">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {`$${amount}`}
                        <br />
                        {category}
                        <br />
                        {date}
                        <br />
                        {expenseMadeBy}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 py-4">
                <Separator></Separator>
                    <div className="grid gap-1">
                        <h3 className="font-semibold text-lg md:text-xl">Shares</h3>
                        <div className="flex flex-wrap gap-10">
                            {shares.map((share, index) => (
                                <div key={index} className="flex flex-row items-center gap-2">
                                    <p className="mr-1">{share.avatarFallback}</p>
                                    <div>
                                        <div>{share.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{`$${share.amount.toFixed(2)}`}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
        </div>
    );
};

export default Page;
