"use client"

import * as React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export function UserAuthForm() {
    const [isLoading, setIsLoading] = React.useState(false)
    const supabase = createClient();

    async function handleClick(event) {
        event.preventDefault()
        setIsLoading(true)
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: location.origin + "/auth/callback?next=/dashboard",
            }
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="grid gap-6">
            <Button type="button" disabled={isLoading} onClick={handleClick}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
            </Button>
        </div>
    )
}