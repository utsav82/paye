import {
  Button
} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, X } from "lucide-react";
function Notifications() {

  const notifications = [
    {
      id: 1,
      name: "Alice Johnson",
      amount: 250,
      message: "Paid for your transportation expenses.",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "Bob Smith",
      amount: 150,
      message: "Paid for your dinner.",
      time: "1 day ago",
    },
    {
      id: 3,
      name: "Charlie Brown",
      amount: 100,
      message: "Paid for your movie ticket.",
      time: "3 days ago",
    }
  ];

  return (
    <div className="container flex flex-col gap-4 my-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight ml-2">
        Notifications
      </h2>
      <Separator />
      <div className="flex flex-col gap-5 sm:w-1/2">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-4 flex-1 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
                <img
                  alt="Profile picture"
                  className="rounded-full"
                  height="40"
                  src="https://avatar.vercel.sh/shadcn.png"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <p className="text-base font-medium leading-none">
                  {notification.name}
                </p></div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Paid
                <span className="font-medium mx-1">${notification.amount}</span>
                {notification.message}
              </p>
              <time className="text-sm font-medium">{notification.time}</time>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="outline">
                <Check className="h-4 w-4" />
                <span className="sr-only">Acknowledge</span>
              </Button>
              <Button size="icon" variant="outline">
                <X className="h-4 w-4" />
                <span className="sr-only">Reject</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications
