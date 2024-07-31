import Link from "next/link";
import Image from "next/image";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../lib/links";

export default function Contact() {
    return (
        <main className="p-24 max-sm:px-8">
            <div className="flex max-sm:flex-col">
                <div className="w-6/12 max-sm:w-full px-8 max-sm:px-2">
                    <h1 className="text-4xl mb-8">Contact Me</h1>
                    <p className="text-lg">Fancy getting in contact with me? Reach out on one of the following channels:</p>
                    <ul className="my-8">
                        <li className="my-8">
                            <Link href={LINKEDIN_LINK} className="text-4xl text-gray-500 hover:text-black transition-all" target="_blank">
                                <i className="bi bi-linkedin"></i> <span className="text-2xl">LinkedIn</span>
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link href={EMAIL_LINK} className="text-4xl text-gray-500 hover:text-black transition-all" target="_blank">
                                <i className="bi bi-envelope-fill"></i> <span className="text-2xl">Email</span>
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link href={GITHUB_LINK} className="text-4xl text-gray-500 hover:text-black transition-all" target="_blank">
                                <i className="bi bi-github"></i> <span className="text-2xl">Github</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-6/12 max-sm:w-full max-sm:pt-8 px-8">
                    <Image src="/images/contact_hero.png" width={512} height={512} layout="responsive" alt="About Image" className="border-8 border-gray-800"></Image>
                    {/* <img src="/images/about_hero.jpeg" className="w-full" /> */}
                </div>
            </div>
        </main>
    )
}