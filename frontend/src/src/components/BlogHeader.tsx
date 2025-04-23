

const BlogPageHeader = () => {
    return (
      <section className="relative  h-72 w-full flex items-center justify-center text-center overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0">
    <img
      src="/bowl.jpg" // 🔁 Remplace cette image si besoin
      alt="Fond Blog"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
  </div>

  {/* Texte au centre */}
  <div className="relative mt-10 z-10 max-w-3xl px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Nos Articles de Blog
    </h1>
    <p className="text-white text-lg md:text-xl font-medium">
      Explorez nos conseils santé, astuces nutrition et recettes bien-être pour un mode de vie plus sain.
    </p>
  </div>
</section>


    );
  };
  
  export default BlogPageHeader;
  