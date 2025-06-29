const ContactHeader = () => {
    return (
      <section className="relative h-72 w-full">
        {/* Image de fond */}
        <img
          src="/envelopes.jpg" // remplace par ton image réelle
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Dégradé noir semi-transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
  
        {/* Texte centré */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Contactez-nous</h1>
        </div>
      </section>
    );
  };
  
  export default ContactHeader;
  

  