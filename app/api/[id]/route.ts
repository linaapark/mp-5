import { NextResponse } from "next/server";
import createNewURL from "@/lib/createNewURL";
import getURLByAlias from "@/lib/getURLByAlias";

//
// Inline URL + alias validation
//

function isValidUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

export async function POST(request: Request) {
    const { url, alias } = await request.json();

    // URL validation
    if (!isValidUrl(url)) {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Check if alias is already taken
    const exists = await getURLByAlias(alias);
    if (exists) {
        return NextResponse.json({ error: "Alias already taken" }, { status: 409 });
    }

    // Create the URL entry in DB
    await createNewURL(url, alias);

    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const shortURL = `${base}/${alias}`;

    return NextResponse.json({ success: true, shortURL });
}
