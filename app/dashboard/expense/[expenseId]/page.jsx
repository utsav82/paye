import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createClient } from '@/lib/supabase/server';
import getRandomCategoryColor from "@/lib/category-color";
const page = async ({ params }) => {

  const supabase = createClient();
  // fetch from supabase expense with join of shares table using params.expenseId

  let { data: expenseData, error: expenseError } = await supabase
    .from('expenses')
    .select(" * , created_by:users( name ) ")
    .eq('id', params.expenseId)
    .single();

  if (expenseError) throw expenseError;
  if (!expenseData) {
    return NextResponse.json({ error: 'Expense not found' }, { status: 404 });
  }


  const { data: shareData, error: shareError } = await supabase
    .from('share')
    .select('*,user:users(*)')
    .eq('expense_id', expenseData.id);

  if (shareError) throw shareError;


  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen container mt-10 items-stretch"
    >
      <ResizablePanel defaultSize={50} minSize={42}>
        <div className="flex items-center px-4 py-2">
          <div
            className="text-xl font-bold">{expenseData.title}</div>
        </div>
        <Separator />
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-left">
            <p className="text-sm mt-2">{expenseData.description}</p>
            <p className="text-sm mt-2">{"Expense ID #" + params.expenseId}</p>
            <div className="flex items-center justify-start mt-4">
              <div style={{ backgroundColor: getRandomCategoryColor() }} className={` text-white rounded-full px-3 py-1 text-sm`}>{expenseData.category}</div>
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
              <div className="text-sm">{new Date(expenseData.date).toDateString()}</div>
              <p>
                Expense made by: <span className="font-semibold">{expenseData.created_by.name}</span>
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
            {shareData.map((participant, index) => (
              <div key={index} className="flex sm:items-center sm:flex-row justify-between flex-col items-start gap-5">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={participant.user.picture} />
                  </Avatar>
                  <div className="ml-4 space-y-2 w-56 sm:max-w-lg">
                    <p className="text-sm font-medium">{participant.user.name}</p>
                    <p className="hidden sm:block text-sm text-muted-foreground">
                      {participant.user.email}
                    </p>
                  </div>
                </div>
                <p>
                  {participant.status}
                </p>
                <p>{`₹${participant.share_amount.toFixed(2)}`}</p>
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default page
