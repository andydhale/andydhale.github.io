import Link from "next/link";
import { getPosts } from "../lib/blogApi"

export default function LatestPost() {
    const post = getPosts(1, 1)[0];

    return (
        <div className="px-24 py-8 max-sm:px-8">
            <h2 className="text-2xl text-[#FE7E0B] text-stroke-1">Latest Post</h2>
            <Link className="text-xl" href={`/blog/episode/${post.slug}`}><h4>{ post.title }</h4></Link>
        </div>
    )
}