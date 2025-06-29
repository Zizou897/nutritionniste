import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactHeader from "../../components/ContactHeader";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ nom: "", email: "", sujet: "", message: "" });
      } else {
        const data = await res.json();
        setError("Erreur lors de l’envoi du message.");
        console.error(data);
      }
    } catch (err) {
      setError("Erreur réseau. Vérifiez votre connexion.");
    }
  };

  return (
    <MainLayout>
      <ContactHeader />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Texte + infos */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
            <p className="text-gray-600 mb-6">
              Vous avez une question, un projet, ou vous souhaitez en savoir plus sur la nutrition ?
              N’hésitez pas à nous écrire.
            </p>
            <div className="space-y-4 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" size={20} />
                <span>contact@nutrivie.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" size={20} />
                <span>+229 90 00 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-600" size={20} />
                <span>Cotonou, Bénin</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex gap-4 text-green-600">
              <a href="#" className="hover:text-green-800">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-800">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-800">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom complet"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              placeholder="Sujet"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="contenu"
              value={formData.contenu}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Envoyer le message
            </button>
            {success && (
              <p className="text-green-600 text-sm">Message envoyé avec succès !</p>
            )}
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;
