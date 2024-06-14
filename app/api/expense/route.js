// app/api/expense/route.js
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  const supabase = createClient();
  const data = await request.json();
  const { data: userData } = await supabase.auth.getUser();
  console.log(userData);
  const {
    title,
    billAmount,
    yourShare,
    description,
    category,
    date,
    friendShares,
  } = data;

  // Basic validation
  if (!title || typeof title !== "string" || title.trim() === "") {
    return NextResponse.json(
      { error: "Title is required and must be a non-empty string." },
      { status: 400 }
    );
  }
  if (!billAmount || isNaN(billAmount) || Number(billAmount) <= 0) {
    return NextResponse.json(
      { error: "Bill amount is required and must be a positive number." },
      { status: 400 }
    );
  }

  if (!date || isNaN(Date.parse(date))) {
    return NextResponse.json(
      { error: "A valid date is required." },
      { status: 400 }
    );
  }

  try {
    // Insert into Expenses table
    const { data: expenseData, error: expenseError } = await supabase
      .from("expenses")
      .insert([
        {
          title: title,
          description: description,
          amount: billAmount,
          category: category,
          date: new Date(date).toISOString(),
          created_by: userData.user.id,
        },
      ])
      .select();

    if (expenseError) throw expenseError;
    const expenseId = expenseData[0].id;

    // Insert into ExpenseShare table for the current user
    const shares = [
      {
        expense_id: expenseId,
        user_id: userData.user.id,
        share_amount: yourShare,
        status: "successful",
      },
    ];

    // Insert into ExpenseShare table for friends
    for (const [userId, shareAmount] of Object.entries(friendShares)) {
      shares.push({
        expense_id: expenseId,
        user_id: userId,
        share_amount: shareAmount,
        status: "pending",
      });
    }

    const { error: shareError } = await supabase.from("share").insert(shares);

    if (shareError) throw shareError;

    return NextResponse.json({
      message: "Expense and shares uploaded successfully.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
