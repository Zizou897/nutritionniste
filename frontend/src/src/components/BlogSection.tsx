import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogsAndNewsletter = () => {
  return (
    <section className="relative w-full bg-green-50 pt-0">
      {/* Wave */}
      <div className="absolute top-15 left-0 w-full overflow-hidden leading-none rotate-360 -translate-y-full">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.29,22,104,35.14,158.73,38C306,91,384,24,500,13s226,42,362,48.23S1113,42,1200,12V0Z"
            fill="#fff"
          />
        </svg>
      </div>

      <div
        className="py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl max-sm:ml-10 md:ml-30 sm:text-3xl font-bold text-gray-800">blogs</h2>
            <Link
              to="/blogs"
              className="group inline-flex md:mr-30 max-sm:mr-10 items-center  text-green-700 font-bold transition-all"
            >
              Voir plus
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[1, 2, 3].map((id) => (
              <Link
                key={id}
                to={`/blogs/${id}`}
                className="w-72 bg-white rounded-lg shadow hover:shadow-lg transition-all p-5 border border-gray-200 hover:border-green-500 group"
              >
                <p className="text-xs text-gray-400 mb-1">Publié le 10/04/2025</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition">
                  Bien manger au quotidien {id}
                </h3>
                <p className="text-sm text-gray-600">
                  Découvrez comment une alimentation équilibrée peut transformer votre vie.
                </p>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className='md:ml-30'>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Restez informé sur la nutrition
              </h3>
              <p className="text-gray-600 text-sm">
                Inscrivez-vous à notre newsletter pour recevoir des conseils, recettes et actus santé.
              </p>
            </div>

            {/* Form with button inside input */}
            <form className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full pl-4 pr-36 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 translate-y-[-50%] bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                S’abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsAndNewsletter;
