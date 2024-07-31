import Link from "next/link";
import { getPosts } from "../lib/blogApi"

export default function LatestPost() {
    const post = getPosts(1, 1)[0];

    return (
        <div className="px-24 pt-16 mb-8 max-sm:px-8 flex items-center">
            <div>
                <h2 className="text-4xl text-[#FE7E0B] text-stroke-1">Latest Post</h2>
                <Link className="text-2xl" href={`/blog/episode/${post.slug}`}><h4>{ post.title }</h4></Link>
            </div>
        </div>
    )
}