import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
const page = ({ params }) => {

  const expenseData =
  {

    id: "3",
    title: "Movie Night",
    description: "Tickets for the latest releases",
    category: "Entertainment",
    categoryColor: "purple",
    amount: 80.0,
    date: "Mar 5, 2024",
    expenseMadeBy: "David Johnson",
    sharedAmong: 2,
    participants: [
      {
        avatarFallback: "DJ",
        name: "Diana Jones",
        email: "diana.jones@email.com",
        status: "completed",
        amount: 40.0
      },
      {
        avatarFallback: "RG",
        name: "Robert Green",
        email: "robert.green@email.com",
        status: "completed",
        amount: 40.0
      }
    ]
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen container mt-10 items-stretch"
    >
      <ResizablePanel defaultSize={50} minSize={42}>
        <div className="flex items-center px-4 py-2">
          <Link
            href={`/dashboard/expense${params.expenseId}`} className="text-xl font-bold">{"Expense ID #" + params.expenseId}</Link>
        </div>
        <Separator />
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-left">
            <h2 className="text-lg font-semibold">{expenseData.title}</h2>
            <p className="text-sm mt-2">{expenseData.description}</p>
            <div className="flex items-center justify-start mt-4">
              <div style={{ backgroundColor: expenseData.categoryColor }} className={`bg-${expenseData.categoryColor} text-white rounded-full px-3 py-1 text-sm`}>{expenseData.category}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="hidden sm:block text-lg font-semibol">{`₹${expenseData.amount}`}</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex justify-between px-6 pt-4 pb-4">
            <div className="text-sm">
            <div className="sm:hidden text-lg font-semibol">{`₹${expenseData.amount}`}</div>
              <div className="text-sm">{expenseData.date}</div>
              <p>
                Expense made by: <span className="font-semibold">{expenseData.expenseMadeBy}</span>
              </p>
              <p>
                Shared among: <span className="font-semibold">{`${expenseData.sharedAmong} people`}</span>
              </p>
            </div>
          </div>
        </div>

      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex flex-col gap-2 p-4 pt-0">
          <div className="font-bold text-lg">Shares</div>
          <div className="flex flex-col px-6 py-4 gap-5 w-full">
            {expenseData.participants.map((participant, index) => (
              <div key={index} className="flex sm:items-center sm:flex-row justify-between flex-col items-start gap-5">
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
                <p>
                  {participant.status}
                </p>
                <p>{`₹${participant.amount.toFixed(2)}`}</p>
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default page
