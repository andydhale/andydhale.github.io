import { remark } from "remark";
import html from "remark-html";
// import remarkClasses from "remark-classes";
//import * as remarkCustomBocks from "remark-custom-blocks";
// import * as remarkParse from "remark-parse";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    // .use(remarkClasses)
    // .use(remarkParse)
    // .use(remarkCustomBocks, {
    //   foo: {
    //     classes: "font-bold"
    //   }
    // })
    .use(html)
    .process(markdown);
  return result.toString();
}