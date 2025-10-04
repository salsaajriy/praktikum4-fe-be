import { getArticles } from "./services/getarticles";
import Card from "././components/card_article";
import { Article } from "../types/article";

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Card title={article.title} description={article.description}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
