import Link from "next/link";

export default function Header(){
    const linkStyling = "p-1 m-1 text-xl hover:underline text-black";
    return (
        <header className="bg-white flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4 text-black">CS391 URL Shortener</h2>
            <nav className={"p-2 m-4"}>
                <Link href="/" className={linkStyling}>
                    |Home
                </Link>
            </nav>
        </header>
    );
}