"use client"
import { useEffect, useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useToast } from "@/components/ui/use-toast"
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
export default function CreateExpense() {
    const router = useRouter();
    const { toast } = useToast()
    const supabase = createClient();
    const [step, setStep] = useState(1);
    const [billAmount, setBillAmount] = useState("");
    const [yourShare, setYourShare] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("food");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [friends, setFriends] = useState([]);
    const [friendSearch, setFriendSearch] = useState("");
    const [friendShares, setFriendShares] = useState({});
    const [friendSuggestions, setFriendSuggestions] = useState([]);
    const [allFriends, setAllFriends] = useState([])
    const [isLoading, setisLoading] = useState(false);
    const [open, setOpen] = useState(false)


    const clear = () => {
        setStep(1);
        setBillAmount("");
        setYourShare("");
        setDescription("");
        setCategory("food");
        setTitle("");
        setDate(new Date().toISOString().split('T')[0]);
        setFriends([]);
        setFriendSearch("");
        setFriendShares({});
        setFriendSuggestions([]);
    };

    useEffect(() => {

        const fetchFriends = async () => {
            const { data, error } = await supabase.from("users").select("*");
            if (error) {
                console.error("Error fetching friends: ", error.message);
                return;
            }
            setAllFriends(data);
        }

        fetchFriends();

    }, []);

    const searchFriendsDatabase = (query) => {
        return allFriends.filter(friend => friend.name.toLowerCase().includes(query.toLowerCase()));
    };

    const handleFriendSearch = (event) => {
        const query = event.target.value;
        setFriendSearch(query);
        if (query.length > 0) {
            const suggestions = searchFriendsDatabase(query);
            setFriendSuggestions(suggestions);
        } else {
            setFriendSuggestions([]);
        }
    };

    const handleAddFriend = (friend) => {
        if (!friends.some(f => f.id === friend.id)) {
            setFriends([...friends, friend]);
            setFriendShares({ ...friendShares, [friend.id]: 0 });
        }
        setFriendSearch("");
        setFriendSuggestions([]);
    };

    const handleShareChange = (friendId, value) => {
        setFriendShares({ ...friendShares, [friendId]: value });
    };

    const removeFriend = (friend) => {
        const updatedFriends = friends.filter((f) => f.id !== friend.id);
        const updatedShares = { ...friendShares };
        delete updatedShares[friend.id];
        setFriends(updatedFriends);
        setFriendShares(updatedShares);
    };

    const handleSubmit = () => {


        const totalShares = Object.values(friendShares).reduce((acc, share) => acc + Number(share), 0) + Number(yourShare);
        if (totalShares !== Number(billAmount)) {
            toast({
                variant: "destructive",
                title: "Shares do not sum up to the total bill amount",
            })
            return;
        }

        if (!title) {
            toast({
                variant: "destructive",
                title: "Title cannot be empty",
            })
            return;
        }

        if (!billAmount) {
            toast({
                variant: "destructive",
                title: "Amount cannot be empty",
            })
            return;
        }

        const expenseData = {
            title,
            billAmount,
            yourShare,
            description,
            category,
            date,
            friendShares,
        };
        callUploadExpenseApi(expenseData);
        console.log("Submitting Expense Data: ", expenseData);
    };


    async function callUploadExpenseApi(data) {
        try {
            setisLoading(true);
            const response = await fetch('/api/expense', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!result.error) {
                toast({
                    title: "Expense and shares uploaded successfully.",
                })
                setOpen(false);
                clear();
                router.refresh();
            } else {
                toast({
                    variant: "destructive",
                    title: ('Error:' + result.error),
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: ('Error:' + error.message),
            })
        }
        finally {
            setisLoading(false);

        }
    }


    return (
        <div className="fixed bottom-5 right-5 ">
            <Dialog open={open} onOpenChange={setOpen}>
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
                                        <Label htmlFor="your-share">Your share</Label>
                                        <Input
                                            id="your-share"
                                            placeholder="Enter your share"
                                            type="number"
                                            value={yourShare}
                                            onChange={(e) => setYourShare(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="friend-search">Add Friends</Label>
                                        <Input
                                            id="friend-search"
                                            placeholder="Search for friends"
                                            value={friendSearch}
                                            onChange={handleFriendSearch}
                                        />
                                        <div className="flex flex-col py-4 gap-5 w-full">
                                            {friendSuggestions.map((participant, index) => (
                                                <div key={index} className="flex sm:items-center sm:flex-row justify-between flex-col items-start gap-5 cursor-pointer" onClick={() => handleAddFriend(participant)}>
                                                    <div className="flex items-center">
                                                        <Avatar className="h-9 w-9">
                                                            <AvatarImage src={participant.picture} />
                                                        </Avatar>
                                                        <div className="ml-4 space-y-2 max-w-5 sm:max-w-lg">
                                                            <p className="text-sm font-medium">{participant.name}</p>
                                                            <p className="hidden sm:block text-sm text-muted-foreground">
                                                                {participant.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-2">
                                            {friends.map((friend) => (
                                                <div key={friend.id} className="flex items-center justify-between space-x-2">
                                                    <div className="flex items-center space-x-2 w-64 text-clip text-wrap">
                                                        <Avatar className="h-9 w-9">
                                                            <AvatarImage src={friend.picture} />
                                                        </Avatar>
                                                        <span>{friend.name}</span>
                                                    </div>
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter share"
                                                        value={friendShares[friend.id]}
                                                        onChange={(e) => handleShareChange(friend.id, e.target.value)}
                                                    />
                                                    <span onClick={() => removeFriend(friend)}>
                                                        <X />
                                                    </span>
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
                                    <Button className="ml-auto" disabled={isLoading} onClick={handleSubmit}>
                                        {isLoading ? "Loading..." : "Submit"}
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
