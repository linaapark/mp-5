//inputs
"use client";

export default function ShortenFields({
                                          url,
                                          alias,
                                          setUrl,
                                          setAlias,
                                      }: {
    url: string;
    alias: string;
    setUrl: (v: string) => void;
    setAlias: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-4 text-black">
            <div>
                <label className="font-medium text-black">URL</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>

            <div>
                <label className="font-medium">Custom Alias</label>

                <div className="flex">
          <span className="bg-gray-100 px-2 border border-r-0 rounded-l text-sm flex items-center">
            https://cs391-url-shortener.vercel.app/
          </span>

                    <input
                        type="text"
                        className="p-2 border rounded-r w-full"
                        placeholder="my-custom-alias"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
