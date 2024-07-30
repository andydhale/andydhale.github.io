import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/models/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPosts(page: number = 1, count: number = -1) {
    console.log("Getting posts for page " + page)

    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    // if default of -1 then return all posts
    if (count == -1) {
        return posts;
    }

    // otherwise just return all the posts
    let startIndex = (page - 1) * count;

    return posts.slice(startIndex, startIndex + count);
}


export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getTotalPages(itemsPerPage: number) {
    let posts = getPostSlugs().length;
    return Math.ceil(posts / itemsPerPage);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content } as Post;
}