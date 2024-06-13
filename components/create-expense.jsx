"use client"
import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
export default function CreateExpense() {
    const [step, setStep] = useState(1);
    const [billAmount, setBillAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("food");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [friends, setFriends] = useState([]);
    const [friendSearch, setFriendSearch] = useState("");
    const [friendShares, setFriendShares] = useState({});

    const handleFriendSearch = (event) => {
        if (event.key === "Enter") {
            const friendName = event.target.value;
            if (friendName && !friends.includes(friendName)) {
                setFriends([...friends, friendName]);
                setFriendShares({ ...friendShares, [friendName]: 0 });
            }
            setFriendSearch("");
        }
    };

    const handleShareChange = (friend, value) => {
        setFriendShares({ ...friendShares, [friend]: Number(value) });
    };

    const removeFriend = (friend) => {
        const updatedFriends = friends.filter((f) => f !== friend);
        const updatedShares = { ...friendShares };
        delete updatedShares[friend];
        setFriends(updatedFriends);
        setFriendShares(updatedShares);
    }

    const handleSubmit = () => {
        const totalShares = Object.values(friendShares).reduce((acc, share) => acc + share, 0);
        if (totalShares !== Number(billAmount)) {
            alert("Shares do not sum up to the total bill amount");
            return;
        }

        const expenseData = {
            title,
            billAmount,
            description,
            category,
            date,
            friendShares,
        };

        console.log("Submitting Expense Data: ", expenseData);
    };

    return (
        <div className="fixed bottom-0 right-0">
            <Dialog>
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
                        <p className="ml-3">
                            Create Expense
                        </p>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <div>
                        <CardHeader>
                            <CardTitle>Split your bill</CardTitle>
                            <CardDescription>Enter your bill information.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {step === 1 && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            placeholder="Enter the title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Input
                                            id="description"
                                            placeholder="Enter a description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="date">Date</Label>
                                        <Input
                                            id="date"
                                            placeholder="Enter the date"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <RadioGroup
                                            className="flex items-center gap-4 flex-wrap"
                                            defaultValue="food"
                                            id="category"
                                            value={category}
                                            onValueChange={setCategory}
                                        >
                                            <Label className="cursor-pointer" htmlFor="food">
                                                <div className="flex items-center">
                                                    <RadioGroupItem className="mr-1" id="food" value="food" />
                                                    Food
                                                </div>
                                            </Label>
                                            <Label className="cursor-pointer" htmlFor="groceries">
                                                <div className="flex items-center">
                                                    <RadioGroupItem className="mr-1" id="groceries" value="groceries" />
                                                    Groceries
                                                </div>
                                            </Label>
                                            <Label className="cursor-pointer" htmlFor="clothing">
                                                <div className="flex items-center">
                                                    <RadioGroupItem className="mr-1" id="clothing" value="clothing" />
                                                    Clothing
                                                </div>
                                            </Label>
                                            <Label className="cursor-pointer" htmlFor="entertainment">
                                                <div className="flex items-center">
                                                    <RadioGroupItem className="mr-1" id="entertainment" value="entertainment" />
                                                    Entertainment
                                                </div>
                                            </Label>
                                            <Label className="cursor-pointer" htmlFor="other">
                                                <div className="flex items-center">
                                                    <RadioGroupItem className="mr-1" id="other" value="other" />
                                                    Other
                                                </div>
                                            </Label>
                                        </RadioGroup>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="bill-amount">Bill amount</Label>
                                        <Input
                                            id="bill-amount"
                                            placeholder="Enter the bill amount"
                                            type="number"
                                            value={billAmount}
                                            onChange={(e) => setBillAmount(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="friend-search">Add Friend</Label>
                                        <Input
                                            id="friend-search"
                                            placeholder="Enter friend name"
                                            value={friendSearch}
                                            onKeyDown={handleFriendSearch}
                                            onChange={(e) => setFriendSearch(e.target.value)}
                                        />
                                        <div className="text-sm font-light">Press enter to add friend</div>
                                        <div className="space-y-2">
                                            {friends.map((friend, index) => (
                                                <div key={index} className="flex items-center justify-between space-x-2">
                                                    <span className='w-56 text-clip text-wrap'>{friend}</span>
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter share"
                                                        value={friendShares[friend]}
                                                        onChange={(e) => handleShareChange(friend, e.target.value)}
                                                    />
                                                    <span onClick={() => { removeFriend(friend) }}><X /></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            {step === 1 && (
                                <Button className="ml-auto" onClick={() => setStep(2)}>
                                    Next
                                </Button>
                            )}
                            {step === 2 && (
                                <>
                                    <Button variant="outline" onClick={() => setStep(1)}>
                                        Back
                                    </Button>
                                    <Button className="ml-auto" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </>
                            )}
                        </CardFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
