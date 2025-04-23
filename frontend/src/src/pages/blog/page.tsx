
import MainLayout from "../../layouts/MainLayout"
import BlogPageHeader from "../../components/BlogHeader"
import { Link } from "react-router"
function Blog() {

  const blogs = [
    {
      id: 1,
      title: 'Les superaliments pour booster votre énergie',
      date: '10/04/2025',
      excerpt: 'Découvrez comment certains aliments peuvent améliorer naturellement votre vitalité.',
      image: '/dr.jpg',
    },
    {
      id: 2,
      title: 'Astuces nutrition pour un ventre plat',
      date: '05/04/2025',
      excerpt: 'Adoptez ces habitudes alimentaires simples pour affiner votre silhouette.',
      image: '/nutrution.webp',
    },
    {
      id: 3,
      title: 'Top 5 des recettes saines et rapides',
      date: '01/04/2025',
      excerpt: 'Pas le temps ? Voici des recettes équilibrées prêtes en moins de 30 minutes.',
      image: '/images/blog3.jpg',
    },
  ];

    return (
      <MainLayout>
        <BlogPageHeader></BlogPageHeader>
        <section className="py-16 px-4 sm:px-6 mt-10 lg:px-8 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="h-[500px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
      {blogs.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          key={blog.id}
          className="flex flex-col sm:flex-row items-start gap-4 bg-white rounded-xl p-4 border border-gray-50 hover:border-green-500 shadow hover:shadow-lg transition group"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full sm:w-40 md:w-52 lg:w-64 sm:h-40 md:h-52 lg:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex md:mt-20 flex-col justify-between flex-1">
            <div>
              <p className="text-xs text-gray-400 mb-1">{blog.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      </MainLayout>
    )
  }
  
  export default Blog
  