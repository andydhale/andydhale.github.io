import { getPostBySlug, getPosts } from "@/app/lib/blogApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import markdownStyles from './markdown.module.css';
import markdownToHtml from "@/app/lib/markdown";

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import remarkClasses from "remark-classes";
import remarkHtml from "remark-html";
// import * as remarkCustomBlocks from "remark-custom-blocks";
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from "remark-directive-rehype";

//const blogFont = M
const defaultFont = Open_Sans({
    weight: "400",
    subsets: ["latin"]
  });
  

// interface IBlogPostParams {
//     slug: string;
// }
type Params = {
    params: {
      slug: string;
    };
  };

  // function myRemarkPlugin() {
  //   /**
  //    * @param {import('mdast').Root} tree
  //    *   Tree.
  //    * @returns {undefined}
  //    *   Nothing.
  //    */
  //   return (tree) => {
  //     visit(tree, (node) => {
  //       if (
  //         node.type === 'containerDirective' ||
  //         node.type === 'leafDirective' ||
  //         node.type === 'textDirective'
  //       ) {
  //         if (node.name !== 'note') return
  
  //         const data = node.data || (node.data = {})
  //         const tagName = node.type === 'textDirective' ? 'span' : 'div'
  
  //         data.hName = tagName
  //         data.hProperties = h(tagName, node.attributes || {}).properties
  //       }
  //     })
  //   }
  // }

export default async function BlogPage({params}: Params) {
    // console.log(`Slug ${slug}`)
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
      }
    
    const content = await markdownToHtml(post.content || "");

    return (
        <article className="p-24 max-sm:px-8 max-sm:py-12">
            <h1 className="text-4xl mb-16">{post.title}</h1>
            {/* <div className={`${markdownStyles["markdown"]} ${defaultFont.className}`} dangerouslySetInnerHTML={{ __html: content }}></div> */}
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