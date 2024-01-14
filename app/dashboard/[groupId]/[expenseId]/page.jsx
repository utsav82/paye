import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const page = ({ params }) => {

    return (
        <div className="w-full max-w-md overflow-hidden">
            <CardHeader>
                <CardTitle>Grocery Shopping</CardTitle>
                <CardDescription>
                    $50.25
                    <br />
                    Food
                    <br />
                    January 15, 2024
                    <br />
                    Alicia Koch
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 border-y py-4">
                <div className="grid gap-1">
                    <h3 className="font-semibold text-lg md:text-xl">Shares</h3>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <p className="mr-1">OM</p>
                            <div>
                                <div>Olivia Martin</div>
                                <div className="text-sm">$25.38</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <p className="mr-1">JL</p>
                            <div>
                                <div>Jackson Lee</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">$25.37</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <p className="mr-1">JL</p>
                            <div>
                                <div>Jackson Lee</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">$25.37</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </div>

    )
}

export default page
