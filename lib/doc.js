import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export async function getSortedDocuments() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(".md", "");
      const fullPath = path.join(postsDirectory, fileName + "");
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      // implement function getDocumentContent(id) to get the contentHtml for each document
      const contentHtml = await getDocumentContent(id);
      return {
        id,
        ...matterResult.data,
        contentHtml: contentHtml.contentHtml,
      };
    })
  );

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
