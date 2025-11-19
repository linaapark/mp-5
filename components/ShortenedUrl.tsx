//final short link + copy button
"use client";

export default function ShortenedUrl({ shortened }: { shortened: string }) {
    function handleCopy() {
        navigator.clipboard.writeText(shortened);
        alert("Copied to clipboard!");
    }

    return (
        <div className="mt-6 p-4 border rounded bg-green-50 flex flex-col gap-2">
            <p className="font-semibold">Your shortened URL:</p>

            <div className="flex items-center justify-between gap-4">
                <a
                    href={shortened}
                    className="text-black underline break-all"
                    target="_blank"
                >
                    {shortened}
                </a>

                <button
                    type="button"
                    onClick={handleCopy}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-300 whitespace-nowrap"
                >
                    Copy
                </button>
            </div>
        </div>
    );
}
