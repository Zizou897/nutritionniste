import React from 'react';

const Banner = () => {
  return (
    <section className="relative mt-20 w-full h-[90vh] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 gap-8">
        {/* Texte à gauche */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Améliorez votre bien-être avec une alimentation saine
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Découvrez nos conseils et suivez un programme nutritionnel personnalisé adapté à votre mode de vie.
          </p>
          <div>
            <a
              href="/rdv"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition"
            >
              Commencez maintenant
            </a>
          </div>
        </div>

        {/* Image à droite */}
        <div className="hw-full">
          <img
            src="/nutrution.webp" // Remplace avec le chemin réel
            alt="Nutrition illustration"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
