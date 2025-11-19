//ties everything together
"use client";

import { useState } from "react";
import createShortUrl from "./CreateShortUrl";
import ShortenedUrl from "./ShortenedUrl";
import ShortenFields from "./ShortenFields";

export default function ShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [shortened, setShortened] = useState<string | null>(null);
    const [error, setError] = useState("");

    return (
        <form
            className="flex flex-col gap-4 w-[600px] bg-white p-8 rounded-xl shadow-lg text-black"
            onSubmit={(event) => {
                event.preventDefault();
                setError("");
                setShortened(null);

                createShortUrl(url, alias)
                    .then((data) => {
                        setShortened(data.shortURL);
                        setUrl("");
                        setAlias("");
                    })
                    .catch((err) => setError(err.message));
            }}
        >
            <h2 className="text-2xl font-semibold">Shorten a URL</h2>
            <p className="text-sm mb-2">
                Enter a long URL to create a shorter, shareable link.
            </p>

            <ShortenFields
                url={url}
                alias={alias}
                setUrl={setUrl}
                setAlias={setAlias}
            />

            <button className="bg-green-900 text-white p-2 rounded hover:bg-green-700">
                Shorten
            </button>

            {error && <p className="text-red-600">{error}</p>}
            {shortened && <ShortenedUrl shortened={shortened} />}
        </form>
    );
}
