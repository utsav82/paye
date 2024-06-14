
export function RecentExpenses({ expenses }) {

  // limit expenses to 6 items 
  


  return (
    <div className="space-y-8">
      {expenses.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          <div className="ml-auto font-medium">{`₹${item.amount.toFixed(2)}`}</div>
        </div>
      ))}
    </div>
  );
}
