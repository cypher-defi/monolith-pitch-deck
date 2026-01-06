import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const validUsername = process.env.AUTH_USERNAME;
    const validPassword = process.env.AUTH_PASSWORD;

    // Debug logging
    console.log("Login attempt:");
    console.log("  Received username:", username);
    console.log("  Expected username:", validUsername);
    console.log("  Password match:", password === validPassword);

    if (!validUsername || !validPassword) {
      console.error("AUTH_USERNAME or AUTH_PASSWORD not set in environment variables");
      return NextResponse.json(
        { error: "Authentication not configured" },
        { status: 500 }
      );
    }

    if (username === validUsername && password === validPassword) {
      // Create a simple token (in production, use JWT or similar)
      const token = Buffer.from(`${username}:${password}`).toString("base64");

      return NextResponse.json(
        { success: true, token },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
