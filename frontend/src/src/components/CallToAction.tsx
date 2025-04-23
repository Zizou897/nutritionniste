




const CTA = () =>{
    return (
        <section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-white to-green-100 overflow-hidden">
  {/* Motif en fond */}
  <div className="absolute inset-0 bg-[url('/pattern-nutrition.png')] opacity-10 bg-cover bg-center z-0" />

  {/* Contenu */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
      Vous souhaitez devenir nutritionniste sur notre plateforme ?
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Rejoignez une communauté de professionnels engagés pour une alimentation saine et un bien-être durable.
    </p>
    <a href="/devenir-membre" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-md transition-all">
      Faire une demande
    </a>
  </div>
</section>

    )
}

export default CTA;
