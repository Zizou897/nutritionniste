import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReservationPrompt = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        {/* Texte */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Passez une réservation en quelques minutes
          </h2>
          <p className="text-gray-600 text-base mb-4">
            Réservez votre rendez-vous avec notre nutritionniste en ligne.
            C’est simple, rapide et efficace — commencez dès maintenant votre parcours bien-être.
          </p>
          <Link
            to="/rdv"
            className="group inline-flex items-center gap-1 text-green-600 font-bold hover:gap-2 transition-all"
          >
            Réserver maintenant
            <ArrowRight size={18} className="transition-transform duration-200 font-bold group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Icône */}
        <div className="md:w-1/2 flex justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/egiwmiit.json"
            trigger="hover"
            colors="primary:#10b981,secondary:#22c55e"
            style={{ width: '220px', height: '220px' }}
          ></lord-icon>
        </div>
      </div>
    </section>
  );
};

export default ReservationPrompt;
