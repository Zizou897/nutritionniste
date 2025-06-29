




const CTASection = () =>{
    return (
        
        <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texte + Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Rejoignez notre réseau de nutritionnistes certifiés
            </h2>
            <p className="text-gray-600 mb-8">
              Vous êtes passionné par la santé et la nutrition ? Faites partie de notre plateforme pour aider des milliers de personnes à adopter un mode de vie sain.
            </p>
      
            {/* Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="text"
                placeholder="Spécialité (ex : nutrition sportive, diététique...)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Dites-nous pourquoi vous souhaitez rejoindre la plateforme"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
      
          {/* Illustration */}
          <div className="hidden md:block">
            <img
              src="/cuate.svg"
              alt="Nutritionniste"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      


    )
}

export default CTASection;