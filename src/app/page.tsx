import Image from "next/image";

import Connect from "./components/Connect";
import LatestPost from "./components/LatestPost";

export default function Home() {
  return (
    <main>
      <Image src="/images/comic.jpg" width={1920} height={2716} alt="Comic Home Page" />
      <LatestPost />
      <Image src="/images/page_1.jpg" width={1920} height={2716} alt="Comic Page 1" />
      <Connect />
    </main>
  );
}
