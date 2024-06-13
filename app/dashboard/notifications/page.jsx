
// tomorrrow convert this into server component

"use client"
import {
  Button
} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
function Notifications() {
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState({});
  const fetchNotifications = async () => {
    const { data, error } = await supabase.from("notification").select("*,share:share(share_amount,expense:expenses(title)),user:users(*)").eq("user_id", "ae101505-29b0-4f53-91d1-9ca038510829");
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
    setNotifications(data);
  };

  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error(error);
      return;
    }
    setUser(data.user);
  }

  useEffect(() => {
    setLoading(true);
    fetchUser();
    fetchNotifications();
    setLoading(false)
  }, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircleLoader color="#2563EB" />
      </div>
    )
  }
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
                  src={notification.user.picture}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <p className="text-base font-medium leading-none">
                  {notification.user.name}
                </p></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 m-2">
                Paid
                <span className="font-medium m-3">{"₹" + notification.share.share_amount + " for share " + notification.share.expense.title}</span>
              </p>
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
