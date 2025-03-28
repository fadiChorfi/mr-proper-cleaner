import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON body

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const formattedDate =
      typeof body.preferredDate === "string"
        ? body.preferredDate
        : new Date(body.preferredDate).toISOString().split("T")[0];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.fullName,
            body.phone,
            body.address,
            body.serviceType,
            body.propertyType,
            Array.isArray(body.selectedItems)
              ? body.selectedItems.join(", ")
              : body.selectedItems,
            formattedDate,
            body.preferredTime,
            body.additionalInfo || "",
          ],
        ],
      },
    });

    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error.message);
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
