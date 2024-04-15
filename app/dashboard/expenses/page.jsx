import ExpenseCard from "@/components/expense-card"
import { SearchComponent } from "@/components/search";
export const metadata = {
  title: "Expenses",
};

function page() {

  const dummyData = [
    {
      id: "1",
      title: "Groceries",
      description: "Monthly groceries shopping",
      category: "Food & Drinks",
      categoryColor: "green",
      amount: 120.0,
      date: "Jan 20, 2024",
      expenseMadeBy: "John Doe",
      sharedAmong: 3,
      participants: [
        {
          avatarFallback: "OM",
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          status: "pending",
          amount: 66.0
        },
        {
          avatarFallback: "JL",
          name: "Jackson Lee",
          email: "jackson.lee@email.com",
          status: "pending",
          amount: 66.0
        },
        {
          avatarFallback: "IN",
          name: "Isabella Nguyen",
          email: "isabella.ngu@email.com",
          status: "pending",
          amount: 58.0
        }
      ]
    },
    {
      id: "2",
      title: "Dinner Out",
      description: "Celebratory dinner",
      category: "Dining",
      categoryColor: "orange",
      amount: 150.0,
      date: "Feb 15, 2024",
      expenseMadeBy: "Alice Smith",
      sharedAmong: 4,
      participants: [
        {
          avatarFallback: "AS",
          name: "Andrew Stevens",
          email: "andrew.stevens@email.com",
          status: "pending",
          amount: 40.0
        },
        {
          avatarFallback: "CM",
          name: "Catherine Miller",
          email: "catherine.miller@email.com",
          status: "pending",
          amount: 40.0
        },
        {
          avatarFallback: "BS",
          name: "Brian Simmons",
          email: "brian.simmons@email.com",
          status: "completed",
          amount: 30.0
        },
        {
          avatarFallback: "MS",
          name: "Megan Stewart",
          email: "megan.stewart@email.com",
          status: "pending",
          amount: 40.0
        }
      ]
    },
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
    }
  ];

  return (
    <div className="container flex flex-col gap-4 my-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight ml-2">
        Your Expenses
      </h2>
      <SearchComponent />
      {dummyData.map((expenseData, index) => (
        <ExpenseCard key={index} expenseData={expenseData} />
      ))}
    </div>
  )
}

export default page
