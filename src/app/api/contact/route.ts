import { NextResponse } from "next/server"
export async function POST(request:Request) {
    return NextResponse.json({message:'Thank you. I will get in touch.'})
}