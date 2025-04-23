import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#008236] border-t border-green-100 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Zone logo avec fond différent */}
        <div className="p-4 rounded-xl ">
          <h3 className="text-2xl font-bold text-white">Nutrition Santé</h3>
          <p className="mt-2 text-sm text-gray-100">
            Votre partenaire santé pour une vie plus équilibrée. Des conseils, des outils et un accompagnement pour bien manger chaque jour.
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="max-sm:ml-5 md:ml-20">
          <h4 className=" text-md font-bold mb-2">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/rdv" className="hover:text-green-100">Prendre un Rendez-vous</Link></li>
            <li><Link to="/devenir-membre" className="hover:text-green-100">Dévénir membre</Link></li>

          </ul>
        </div>

        {/* Contact rapide */}
        <div className="max-sm:ml-5">
          <h4 className="text-md font-bold mb-2">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +229 91 91 91 91</li>
            <li className="flex items-center gap-2"><Mail size={16} /> contact@nutritionsante.com</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="max-sm:ml-5">
          <h4 className="text-md font-bold mb-2">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-600"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-600"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-green-100 text-sm text-gray-700 py-4 text-center bg-green-50">
        &copy; {new Date().getFullYear()} Nutrition Santé — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
