import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from "./ui/card";
export default function ExpenseCard() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden">
            <Card >
                <AccordionItem value="item-1">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="text-left">
                            <h2 className="text-lg font-semibold">Groceries</h2>
                            <p className="text-sm mt-2">Monthly groceries shopping</p>
                            <div className="flex items-center justify-start mt-4">
                                <div className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">Food & Drinks</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-semibol">$120.00</div>
                            <div className="text-sm">Jan 20, 2024</div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6 pt-4 pb-1">
                        <div className="text-sm">
                            <p>
                                Expense made by: <span className="font-semibold">John Doe</span>
                            </p>
                            <p>
                                Shared among: <span className="font-semibold">3 people</span>
                            </p>
                        </div>
                        <AccordionTrigger ></AccordionTrigger>
                    </div>
                    <AccordionContent>
                        <div className="flex flex-col px-6 py-4 gap-4 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-2 max-w-5 sm:max-w-lg">
                                        <p className="text-sm font-medium ">Olivia Martin</p>
                                        <p className="hidden sm:block text-sm text-muted-foreground">
                                            olivia.martin@email.com
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    pending
                                </p>
                                <p>
                                    $66
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-2 max-w-5 sm:max-w-lg">
                                        <p className="text-sm font-medium leading-none">Rishi</p>
                                        <p className="hidden sm:block text-sm text-muted-foreground">
                                            olivia.martin@email.com
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    pending
                                </p>
                                <p>
                                    $66
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-2 max-w-5 sm:max-w-lg">
                                        <p className="text-sm font-medium leading-none">Rishabhn</p>
                                        <p className="hidden sm:block text-sm text-muted-foreground">
                                            olivia.martin@email.com
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    pending
                                </p>
                                <p>
                                    $58
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    )
}

