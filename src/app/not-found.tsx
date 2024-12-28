import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-full bg-[url('/images/404.jpeg')] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-8xl text-white text-stroke-2 mb-8">404 Not Found</h1>
                <Link href="/" className="text-[#FE7E0B] text-stroke-2 text-4xl text-center">
                    Return
                </Link>
            </div>
        </main>
    )
}