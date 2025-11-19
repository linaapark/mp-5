// /components/createShortUrl.ts
export default async function createShortUrl(url: string, alias: string) {
    const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, alias }),
    });

    let data;
    try {
        data = await res.json();
    } catch {
        throw new Error("Server returned invalid response");
    }

    if (!res.ok) {
        throw new Error(data.error || "Unknown error");
    }

    return data; // { shortURL: "..."}
}
