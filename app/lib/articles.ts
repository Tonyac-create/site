import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Article = {
  author: string;
  date: string;
  image: string;
  slug: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
}

const articlesDir = path.join(process.cwd(), "/app/content");

export const getArticles = (): Article[] => {
  const filenames = fs.readdirSync(articlesDir);

  return filenames.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...(data as Article),
      slug: filename.replace(".md", ""),
    };
  });
};

export const getSortedArticles = (): Article[] => {
  const articles = getArticles();
  return [...articles].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("-").map(Number);
    const [dayB, monthB, yearB] = b.date.split("-").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });
};
