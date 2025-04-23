

const CTAHeader = () => {

    return (

<section className="relative  h-72 w-full flex items-center justify-center text-center overflow-hidden">
{/* Image de fond */}
<div className="absolute inset-0">
  <img
    src="/contact.jpg" // 🔁 Remplace cette image si besoin
    alt="Fond Blog"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
</div>

{/* Texte au centre */}
<div className="relative mt-10 z-10 max-w-3xl px-6">
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
  Devenir Nutritionniste
  </h1>
  <p className="text-white text-lg md:text-xl font-medium">
  Rejoignez notre réseau et accompagnez les gens vers une meilleure santé.
  </p>
</div>
</section>

    )
}

export default CTAHeader