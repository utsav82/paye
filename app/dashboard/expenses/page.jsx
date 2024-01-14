import ExpenseCard from "@/components/expense-card"
function page() {
  return (
    <div className="container flex flex-col gap-4 my-16">
       <ExpenseCard/>
       <ExpenseCard/>
       <ExpenseCard/>
    </div>
  )
}

export default page
