
import MainLayout from "../../layouts/MainLayout"


//import { useParams } from 'react-router-dom'
//import { blogs } from '@/data/blogs' // À adapter selon ta structure
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const ArticleDetail = () => {
  //const { id } = useParams()
  blogs = [
    {
      id: 1,
      title: 'Les bienfaits de l’avocat',
      date: '10/04/2025',
      excerpt: 'Découvrez pourquoi ce fruit est un super-aliment.',
      content: 'L’avocat est riche en bons lipides...',
      image: '/images/blogs/avocat.jpg',
    },
  ]
 
  return (
    <MainLayout>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Retour */}
        <Link to="/blogs" className="inline-flex items-center text-green-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Retour aux articles
        </Link>

        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{blogs.title}</h1>

        {/* Date */}
        <p className="text-sm text-gray-400 mb-6">Publié le {blogs.date}</p>

        {/* Image principale */}
        <img
          src={blogs.image}
          alt={blogs.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
        />

        {/* Contenu */}
        <article className="prose prose-green max-w-none text-gray-700">
          {/* Utilise blog.content si tu as un champ HTML ou markdown préformaté */}
          <p>
            {blogs.content ||
              "Voici le contenu de l’article. Parlez des bienfaits, donnez des conseils pratiques, des recommandations alimentaires, des recettes, etc."}
          </p>
          <p>
            Ajoutez également des informations détaillées, des listes, des citations et des illustrations selon le sujet.
          </p>
        </article>
      </div>
    </section>
    </MainLayout>
  )
}

export default ArticleDetail
