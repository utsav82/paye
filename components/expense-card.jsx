import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export default function ExpenseCard({ expenseData }) {
    return (
        <Accordion type="single" collapsible className="w-full max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden">
            <Card>
                <AccordionItem value="item-1">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="text-left">
                            <h2 className="text-lg font-semibold">{expenseData.title}</h2>
                            <p className="text-sm mt-2">{expenseData.description}</p>
                            <div className="flex items-center justify-start mt-4">
                                <div style={{backgroundColor: expenseData.categoryColor}} className={`bg-${expenseData.categoryColor} text-white rounded-full px-3 py-1 text-sm`}>{expenseData.category}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-semibol">{`$${expenseData.amount.toFixed(2)}`}</div>
                            <div className="text-sm">{expenseData.date}</div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6 pt-4 pb-1">
                        <div className="text-sm">
                            <p>
                                Expense made by: <span className="font-semibold">{expenseData.expenseMadeBy}</span>
                            </p>
                            <p>
                                Shared among: <span className="font-semibold">{`${expenseData.sharedAmong} people`}</span>
                            </p>
                        </div>
                        <AccordionTrigger></AccordionTrigger>
                    </div>
                    <AccordionContent>
                        <div className="flex flex-col px-6 py-4 gap-4 w-full">
                            {expenseData.participants.map((participant, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Avatar className="h-9 w-9">
                                            <AvatarFallback>{participant.avatarFallback}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-2 max-w-5 sm:max-w-lg">
                                            <p className="text-sm font-medium">{participant.name}</p>
                                            <p className="hidden sm:block text-sm text-muted-foreground">
                                                {participant.email}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{participant.status}</p>
                                    <p>{`$${participant.amount.toFixed(2)}`}</p>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    )
}
