import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://nutrition.pythonanywhere.com/api/v1/articles/${id}/`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Erreur fetch article:", err));
  }, [id]);

  if (!article) return <p className="p-10 text-gray-500">Chargement...</p>;

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">{article.titre}</h1>
        <p className="text-sm text-gray-400 mb-6">{new Date(article.date_publication).toLocaleDateString()}</p>
        {article.image && (
          <img
            src={article.image}
            alt={article.titre}
            className="w-full h-auto mb-6 rounded-xl shadow"
          />
        )}
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.contenu }}
        />
      </div>
    </MainLayout>
  );
}

export default ArticleDetail;
