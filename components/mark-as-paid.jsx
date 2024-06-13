"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { createClient } from "@/lib/supabase/client"
const MarkAsPaid = ({ shareId, userId }) => {
  const supabase = createClient()
  const [hasNotification, setHasNotification] = useState(false)

  useEffect(() => {
    const fetchShare = async () => {
      const { data, error } = await supabase
        .from("notification")
        .select("*")
        .eq("share_id", shareId)
      if (error) {
        console.error(error)
        return
      }
      if (data.length > 0) {
        setHasNotification(true)
      }
    }
    fetchShare()
  }, [shareId])

  const markAsPaid = async () => {

    if (hasNotification) return
    const { error } = await supabase.from("notification").insert([{ share_id: shareId, user_id: userId }])
    // mark the expense as paid
    if (!error)
      setHasNotification(true)
  }
  return (
    <Button className="rounded" variant={!hasNotification ? "default" : "primary"} onClick={() => markAsPaid()}>
      {hasNotification ? "Waiting for confirmation" : "Mark as paid"}
    </Button>
  )
}

export default MarkAsPaid