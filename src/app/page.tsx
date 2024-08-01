import Connect from "./components/Connect";
import LatestPost from "./components/LatestPost";

export default function Home() {
  return (
    <main className="">
      <img src="/images/comic.jpg" />
      {/* <img src="/images/page_title.jpg" className="absolute site-header" /> */}
      <LatestPost />
      {/* <div className="w-screen overflow-x-hidden">
        <img src="/images/villain_01.png" className="top-[1200px] left-[-200px] absolute transition-all w-[900px]" />
        <img src="/images/villain_02.png" className="top-[1500px] right-0 absolute  transition-all w-[900px]" />
      </div> */}
      {/* <div className="absolute top-[120%] w-[30%] h-[15%] bg-contain left-[50%] translate-x-[-50%] flex justify-center items-center">
        <img src="/images/speech.png" className="absolute" />
        <p className="text-center lg:text-2xl max-md:text-md absolute p-24">“Not many SME business's have someone with Andy's technical ability...”</p>
      </div> */}
      <img src="/images/page_1.jpg" />
      <Connect />
    </main>
  );
}
