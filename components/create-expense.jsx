import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function CreateExpense() {
    return (
        <div className="absolute bottom-0 right-0">
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="outline" className="m-4 mt-2 p-3">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <div>
                        <CardHeader>
                            <CardTitle>Split your bill</CardTitle>
                            <CardDescription>Enter your bill information.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="bill-amount">Bill amount</Label>
                                    <Input id="bill-amount" placeholder="Enter the bill amount" type="number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contributions">Contributions</Label>
                                    <Input id="contributions" placeholder="Enter the contributions" />
                                    <div className="text-sm font-light">Mention each friend as @user</div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-base" htmlFor="description">
                                        Description
                                    </Label>
                                    <Input id="description" placeholder="Enter a description" />
                                </div>
                                
                                <div className="space-y-2">
                                    <Label className="text-base">Category</Label>
                                    <RadioGroup className="flex items-center gap-4" defaultValue="food" id="category">
                                        <Label className="cursor-pointer" htmlFor="food">
                                            <RadioGroupItem className="peer sr-only" id="food" value="food" />
                                            <div className="flex items-center">
                                                <span className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0 mr-2" />
                                                Food
                                            </div>
                                        </Label>
                                        <Label className="cursor-pointer" htmlFor="drinks">
                                            <RadioGroupItem className="peer sr-only" id="drinks" value="drinks" />
                                            <div className="flex items-center">
                                                <span className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0 mr-2" />
                                                Drinks
                                            </div>
                                        </Label>
                                        <Label className="cursor-pointer" htmlFor="other">
                                            <RadioGroupItem className="peer sr-only" id="other" value="other" />
                                            <div className="flex items-center">
                                                <span className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0 mr-2" />
                                                Other
                                            </div>
                                        </Label>
                                    </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-base" htmlFor="screenshot">
                                        Attach Screenshot
                                    </Label>
                                    <Input accept="image/*" id="screenshot" type="file" />
                                </div>
                              
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto">Submit</Button>
                        </CardFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
