import Link from "next/link";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../lib/links";

export default function SiteFooter() {
    return (
        <footer className="bg-white text-black w-full p-12">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-4xl text-[#FE7E0B] text-stroke-1">Andy Hale</h2>
                    <p className="text-gray-500 italic text-xl mb-8">Slightly insane IT Professional</p>
                    <ul className="flex text-3xl text-gray-500 ">
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
                <div className="text-right">
                    <ul className="text-xl text-gray-500">
                        <li className="text-black mb-8"><b>Navigate My Site</b></li>
                        <li className="mb-4"><Link href="/about">About Me</Link></li>
                        <li className="mb-4"><Link href="/blog">Blog</Link></li>
                        <li className="mb-4"><Link href="/projects">Projects</Link></li>
                        <li className="mb-4"><Link href="/contact">Contact Me</Link></li>
                        <li className="mb-4"><Link href="/credits">Credits</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-500">
                Copyright &copy; 2024 - Andy Hale
            </div>
        </footer>
    )
}