"use client"
import React from 'react'
import { Check, X } from "lucide-react";
import {
    Button
} from "@/components/ui/button";
import { createClient } from '@/lib/supabase/client';
import { useToast } from './ui/use-toast';
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation';
const Action = ({ id, shareId }) => {

    const supabase = createClient();
    const toast = useToast();
    const router = useRouter();

    const acknowledge = async (id) => {
        console.log(id)
        const { error } = await supabase.from('share').update({ status: "successful" }).eq('id', shareId);
        if (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        reject(id);
    }

    const reject = async (id) => {
        const { data: deleteData, deleteError } = await supabase.from('notification').delete().eq('id', id);
        if (deleteError) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        router.refresh();
    }


    return (
        <div className="flex items-center space-x-2">
            <Button size="icon" variant="outline" onClick={() => acknowledge(id)}>
                <Check className="h-4 w-4" />
                <span className="sr-only">Acknowledge</span>
            </Button>
            <Button size="icon" variant="outline" onClick={() => reject(id)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Reject</span>
            </Button>
        </div >
    )
}

export default Action