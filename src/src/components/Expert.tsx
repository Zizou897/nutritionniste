import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/bediakon.jpg" // à remplacer par l'image réelle
            alt="Bediakon Paul"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Rencontrez Bediakon Paul
          </h2>
          <h4 className="text-green-600 font-semibold mb-2">Nutritionniste certifié & coach bien-être</h4>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Avec plus de 10 ans d'expérience dans le domaine de la nutrition, Paul accompagne des centaines de personnes vers une meilleure santé, en combinant alimentation naturelle, écoute active et approche personnalisée.
          </p>
          <p className="text-gray-600 text-sm mb-8">
            Son approche bienveillante et scientifique permet à chacun de retrouver un équilibre alimentaire durable et adapté à son mode de vie. Passionné par le bien-être holistique, Paul croit que bien manger, c’est aussi mieux vivre.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-green-700 font-bold  group"
          >
            En savoir plus
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
