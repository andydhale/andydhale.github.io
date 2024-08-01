import { getPostBySlug, getPosts } from "@/app/lib/blogApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import markdownStyles from './markdown.module.css';

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from "remark-directive-rehype";
import { readingTime } from "@/app/lib/readingTime";

//const blogFont = M
const defaultFont = Open_Sans({
    weight: "400",
    subsets: ["latin"]
  });
  

type Params = {
    params: {
      slug: string;
    };
  };

export default async function BlogPage({params}: Params) {
    // console.log(`Slug ${slug}`)
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
      }
    
    //const content = await markdownToHtml(post.content || "");

    return (
        <article className="p-24 max-sm:px-8 max-sm:py-12">
            <h1 className="text-4xl mb-16">{post.title}</h1>
            {/* <p>Reading time: { readingTime(content) }</p> */}
            <ReactMarkdown remarkPlugins={[remarkDirective, remarkDirectiveRehype]} className={`${markdownStyles["markdown"]} ${defaultFont.className} mb-16`}>
              {post.content}
            </ReactMarkdown>
            <Link href="/blog" className="text-xl border-2 border-gray-500 px-8 py-2 hover:bg-gray-200">
              Return to Blog
            </Link>
        </article>
    )
}

export function generateMetadata({ params }: Params): Metadata {
    const post = getPostBySlug(params.slug);
  
    if (!post) {
      return notFound();
    }
  
    const title = `${post.title} | Andy Hale`;
  
    return {
      title,
      openGraph: {
        title,
        //images: [post.ogImage.url],
      },
    };
  }
  
  export async function generateStaticParams() {
    const posts = getPosts();
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }