



const RDVSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl mt-10 md:text-4xl font-bold mb-6">Prendre rendez-vous en 3 étapes simples</h2>
    <p className="text-gray-600 mb-12">Notre processus est rapide, facile et pensé pour vous simplifier la vie.</p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Étape 1 */}
      <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4 text-green-600 text-xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold mb-2">Choisissez un service</h3>
        <p className="text-sm text-gray-600">
          Sélectionnez un nutritionniste ou le type de consultation adaptée à vos besoins.
        </p>
      </div>

      {/* Étape 2 */}
      <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4 text-green-600 text-xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold mb-2">Planifiez votre rendez-vous</h3>
        <p className="text-sm text-gray-600">
          Choisissez la date et l’heure qui vous conviennent selon les disponibilités.
        </p>
      </div>

      {/* Étape 3 */}
      <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4 text-green-600 text-xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold mb-2">Confirmez et c’est tout !</h3>
        <p className="text-sm text-gray-600">
          Validez les informations et recevez votre confirmation par e-mail.
        </p>
      </div>
    </div>

    <div className="mt-12">
      <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
        Prendre rendez-vous maintenant
      </button>
    </div>
  </div>
</section>

    )
}


export default RDVSection