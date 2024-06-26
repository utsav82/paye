"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
const SignOutButton = () => {

    const { toast } = useToast()
    const router = useRouter();
    const supabase = createClient();

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            toast({
                description: "Logged out",
            })
            router.push("/");
            router.refresh();
        }
    }

    return (
        <Button variant='ghost'
            size="sm"
            className="ml-2"
            onClick={signOut}
        >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </Button>
    )
}

export default SignOutButton
