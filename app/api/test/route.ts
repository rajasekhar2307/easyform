import { NextResponse } from "next/server";

export const GET = (req: any, res: any) => {
  return NextResponse.json({ meta: "message" });
};
