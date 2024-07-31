import Link from "next/link";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../lib/links";

export default function Connect() {
    return (
        <div className="w-full max-sm:p-8 px-12 py-24 bg-[#04132A]">
            <div className="flex text-white justify-between">
                <h2 className="text-4xl max-sm:text-xl mr-4">Want to Connect?</h2>
                <div>
                    <ul className="flex text-4xl max-sm:text-xl text-right">
                        <li>
                            <Link href={LINKEDIN_LINK} target="_blank" className="hover:text-gray-300 transition-all">
                                <i className="bi bi-linkedin mr-8"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={EMAIL_LINK} className="hover:text-gray-300 transition-all">
                                <i className="bi bi-envelope-fill mr-8"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={GITHUB_LINK} target="_blank" className="hover:text-gray-300 transition-all">
                                <i className="bi bi-github mr-8"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}