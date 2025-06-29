import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie D.",
    message:
      "Grâce aux conseils de Nutrition Santé, j'ai totalement changé mes habitudes alimentaires. Je me sens beaucoup mieux dans mon corps !",
    rating: 5,
  },
  {
    name: "Jean-Marc T.",
    message:
      "Un service simple, efficace et bienveillant. On sent vraiment que l'accompagnement est humain et professionnel.",
    rating: 4,
  },
  {
    name: "Fatou S.",
    message:
      "Je recommande à 100%. Leur blog est super utile et leurs newsletters toujours pertinentes !",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-green-50 py-24 px-4 sm:px-6">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.29,22,104,35.14,158.73,38C306,91,384,24,500,13s226,42,362,48.23S1113,42,1200,12V0Z"
            fill="#f0fdf4"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Ce que disent nos utilisateurs
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Ils ont transformé leur quotidien grâce à une alimentation saine. Découvrez leurs retours d'expérience !
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 text-green-700 font-bold w-12 h-12 flex items-center justify-center rounded-full text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-500 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
