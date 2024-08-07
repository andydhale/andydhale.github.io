import BlogComic from "@/app/components/BlogComic";
import { getPosts, getTotalPages } from "../../lib/blogApi"
import Link from "next/link";
import { Metadata } from "next";

// interface IBlogIndexRouteParams {
//     page: number = 1;
// }
export const metadata: Metadata = {
    title: "Andy Hale | Blog"
  };

export function generateStaticParams() {
    const posts = getPosts();
    let pages = Math.ceil(posts.length / 3);
    let pageCounts = [];
    pageCounts.push("");
    for (var i = 1; i <= pages; i++) {
        pageCounts.push(i.toString());
    }
  
    return pageCounts.map((page) => ({ page: [page] }));
  }


export default function BlogIndex({ params }: { params: { page: string  } }) {
    if (!params.page) {
        params.page = "1";
    }

    const posts = getPosts(+params.page ?? 1, 3);

    const prevPage = +params.page - 1;
    const nextPage = +params.page + 1;
    const totalPages = getTotalPages(3);

    // console.log(`Page: ${params.page}`)
    // console.log(`Total Pages: ${totalPages}`);
    // console.log(`Next Page: ${nextPage}`)

    return (
        <main className="p-24 max-sm:px-8 max-sm:py-12">
            <h1 className="text-4xl max-sm:text-2xl mb-16 max-md:mb-6">Episodes</h1>
            <div className="flex mb-16 max-sm:flex-col">
                {
                    posts.map((post => (
                        <BlogComic key={post.slug} post={post} />  
                    )))
                }
            </div>
            <div className="flex justify-center">
                <div className="px-24">
                    {
                        prevPage > 0 ? <Link href={`/blog/${prevPage}`}>Previous Page</Link> : <span className="text-gray-300">Previous Page</span>
                    }
                </div>
                <div className="px-24">
                    {
                        nextPage <= totalPages ? <Link href={`/blog/${nextPage}`}>Next Page</Link> : <span className="text-gray-300">Next Page</span>
                    }
                </div>
            </div>
        </main>
    )
}