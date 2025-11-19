import ShortenForm from "@/components/ShortenForm";

export default async function Home(){
    //const posts = await getAllPosts();

    return (
        <div className="flex flex-col items-center bg-green-100 p-4">
            <h1 className="text-5xl font-bold mt-8">URL Shortener</h1>
            <p className="text-lg mt-2">Shorten your long URLs into compact, shareable links.</p>

            <ShortenForm />
        </div>
    );

}

