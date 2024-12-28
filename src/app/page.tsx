import Image from "next/image";
import Link from "next/link";

import { LINKEDIN_LINK } from './lib/links';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-blue-400 font-bold text-2xl">
          <Link href={LINKEDIN_LINK}>Andrew Hale <i className="bi-linkedin"></i></Link>
        </h1>
        <p className="text-xl text-blue-300">IT Professional</p>
      </div>

    </main>
  );
}
