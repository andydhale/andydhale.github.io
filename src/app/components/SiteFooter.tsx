import Link from "next/link";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../lib/links";

export default function SiteFooter() {
    return (
        <footer className="bg-white text-black w-full p-12">
            <div className="flex justify-between max-sm:flex-col">
                <div className="mr-8">
                    <h2 className="max-sm:text-2xl text-4xl text-[#FE7E0B] text-stroke-1">Andy Hale</h2>
                    <p className="text-gray-500 italic text-xl mb-8 max-sm:text-lg">Slightly insane IT Professional</p>
                    <ul className="flex text-3xl text-gray-500">
                        <li className="mr-6">
                            <Link className="hover:text-gray-800 transition-colors" href={LINKEDIN_LINK} target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link className="hover:text-gray-800 transition-colors" href={EMAIL_LINK}>
                                <i className="bi bi-envelope-fill"></i>
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link className="hover:text-gray-800 transition-colors" href={GITHUB_LINK} target="_blank">
                                <i className="bi bi-github"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-right max-sm:text-left max-sm:py-8">
                    <ul className="text-xl text-gray-500 max-sm:text-sm">
                        <li className="text-black mb-8 max-sm:mb-6"><b>Navigate My Site</b></li>
                        <li className="mb-4"><Link href="/about">About Me</Link></li>
                        <li className="mb-4"><Link href="/blog">Blog</Link></li>
                        {/* <li className="mb-4"><Link href="/projects">Projects</Link></li> */}
                        <li className="mb-4"><Link href="/contact">Contact Me</Link></li>
                        <li className="mb-4"><Link href="/credits">Credits</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-500 max-w-md:text-center">
                Copyright &copy; 2024 - Andy Hale
            </div>
        </footer>
    )
}