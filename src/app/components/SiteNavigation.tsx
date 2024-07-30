import Link from "next/link";
import Image from "next/image";

export default function SiteNavigation() {
    return (
        <nav className="w-full h-24 flex justify-items-center items-center justify-between px-24 bg-red-600 text-white text-2xl">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/site_icon.png" width={100} height={100} className="mr-8" alt="AH Logo" />
                    {/* <img src="/images/site_icon.png" className="w-[100px] mr-8"></img> */}
                </Link>
                <ul className="flex">
                    <li className="mr-8"><Link href="/about" className="text-stroke-[1px] text-stroke-black">About Me</Link></li>
                    <li className="mr-8"><Link href="/blog/1" className="text-stroke-[1px] text-stroke-black">Blog</Link></li>
                    <li className="mr-8"><Link href="/contact" className="text-stroke-[1px] text-stroke-black">Contact</Link></li>
                </ul>
            </div>

            <Link className="text-black px-4 py-2 bg-white" href="/contact">
                Connect With Me
            </Link>
            {/* <div className="absolute -top-20 right-10 w-[300px]">
                <img src="/images/contact_bubble.png" />
                <p>Contact Me</p>
            </div> */}
        </nav>
    )
}