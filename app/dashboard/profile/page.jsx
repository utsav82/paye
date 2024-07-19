import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import ShareButton from "../../../components/sharebutton";
export const metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userProfile = data?.user?.user_metadata || {};
  return (
    <div className="flex-col flex">
      <div className="flex-1 p-4 sm:p-8 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Profile
          </h2>

          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
          </div>
        </div>
        <div className="bg-[url('/b2.svg')] h-auto rounded p-4 sm:p-8 mb-4 flex mt-4 ">
          <div className="rounded overflow-hidden ml-auto">
            <img
              src="/dash.png"
              width={100}
              height={100}
              unoptimized={true}
              className="w-36 sm:w-48 rounded-full"
              alt="Dashboard Image"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" -mt-28 z-10 md:mx-4 mx-auto justify-center border-8 items-center border-black rounded-full ">
            <img
              src={userProfile?.picture || "/default-profile-pic.png"}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full w-48 h-48 "
            />
          </div>
          <ShareButton/>
        </div>
        <div className="max-w-md w-full m-auto shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold  mb-2 text-center">
              {userProfile?.name || "Loading..."}
            </h2>
            <p className="text-sm text-gray-400 text-center mb-4">
              {userProfile?.email || "Loading..."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg">
                <h3 className="text-sm font-semibold mb-1">
                  Location
                </h3>
                <p className="text-sm">City, Country</p>
              </div>
              <div className="p-4 rounded-lg">
                <h3 className="text-sm font-semibold mb-1">
                  Joined Since
                </h3>
                <p className="text-sm">Month Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

