

const benefits = [
  {
    title: 'Énergie naturelle',
    desc: 'Une bonne alimentation vous apporte l’énergie nécessaire pour affronter la journée.',
    icon: 'https://cdn.lordicon.com/puvaffet.json',
  },
  {
    title: 'Santé mentale',
    desc: 'Les nutriments essentiels améliorent la concentration, la mémoire et réduisent le stress.',
    icon: 'https://cdn.lordicon.com/lecqgzyd.json',
  },
  {
    title: 'Prévention des maladies',
    desc: 'Adopter une alimentation saine réduit les risques de maladies chroniques.',
    icon: 'https://cdn.lordicon.com/qghrdngw.json',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Les bienfaits de la nutrition
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <lord-icon
                  src={benefit.icon}
                  trigger="loop"
                  delay="500"
                  colors="primary:#10b981,secondary:#22c55e"
                  style={{ width: '80px', height: '80px' }}
                ></lord-icon>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
