export type Article = {
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
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  link: string
}

export const getSortedArticles = async (): Promise<Article[]> => {
  const response = await fetch('/api/articles');
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
};
