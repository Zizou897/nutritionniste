import MainLayout from "../../layouts/MainLayout"
import ContactHeader from "../../components/ContactHeader";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

function Contact() {

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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Sujet"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
      </MainLayout>
    )
  }
  
  export default Contact
  