

import { Separator } from "@/components/ui/separator";
import Action from "@/components/notification-action";
import { createClient } from "@/lib/supabase/server";

async function Notifications() {

  const supabase = createClient();

  const { data: userData, error: userDataError } = await supabase.auth.getUser();
  if (userDataError) {
    throw userDataError;
  }

  const { data: notifications, error: notificationError } = await supabase.from("notification").select("*,share:share(share_amount,id,expense:expenses(title),user:users(name,picture))").eq("user_id", userData.user.id);
  if (notificationError) {
    throw notificationError;
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
                  src={notification.share.user.picture}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <p className="text-base font-medium leading-none">
                  {notification.share.user.name}
                </p></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 m-2">
                Paid
                <span className="font-medium m-3">{"₹" + notification.share.share_amount + " for share " + notification.share.expense.title}</span>
              </p>
            </div>
            <Action id={notification.id} shareId={notification.share.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications
