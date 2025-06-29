import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import BlogPageHeader from "../../components/BlogHeader";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://nutrition.pythonanywhere.com/api/v1/articles/")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des articles.");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      <BlogPageHeader />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {loading && <p className="text-center text-gray-500">Chargement des articles...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="h-[500px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white rounded-xl p-4 border border-gray-50 hover:border-green-500 shadow hover:shadow-lg transition group"
              >
                <img
                  src={blog.image}
                  alt={blog.titre}
                  className="w-full sm:w-40 md:w-52 lg:w-64 sm:h-40 md:h-52 lg:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex md:mt-20 flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {new Date(blog.date_ajout).toLocaleDateString()}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                      {blog.titre}
                    </h3>
                    <p className="text-sm text-gray-600">{blog.contenu}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Blog;
