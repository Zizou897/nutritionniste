

const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="md:ml-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            À propos de <span className="text-green-600">Nutrition Santé</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Chez <strong>Nutrition Santé</strong>, nous croyons qu’une bonne alimentation est la clé d’une vie équilibrée. 
            Notre mission est de vous accompagner à chaque étape de votre bien-être grâce à des conseils nutritionnels personnalisés, 
            des ressources fiables et un accompagnement professionnel.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-lg font-bold">✓</span>
              <span>Des experts passionnés et à l’écoute</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-lg font-bold">✓</span>
              <span>Des contenus validés scientifiquement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-lg font-bold">✓</span>
              <span>Une approche centrée sur vos objectifs</span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 italic">
            "Bien manger, c’est commencer à bien vivre."
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/dr.jpg"
            alt="Illustration à propos de nous"
            className="w-full max-w-md object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
