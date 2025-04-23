import MainLayout from "../../layouts/MainLayout"
import Banner from "../../components/Banner";
import BenefitsSection from "../../components/BenefitSection";
import ReservationPrompt from "../../components/ReservationSection";
import BlogsAndNewsletter from "../../components/BlogSection";
import AboutSection from "../../components/About";
import TestimonialsSection from "../../components/Testimony";
import ExpertSection from "../../components/Expert";
import CTA from "../../components/CallToAction";
import { Link } from 'react-router-dom';

function Accueil() {

    return (
      <MainLayout>
        <Banner />
        <BenefitsSection />
        <ReservationPrompt />
        <BlogsAndNewsletter />

      {/* <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">Les bienfaits de la nutrition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Renforcement du système immunitaire',
              desc: 'Une alimentation équilibrée aide à mieux résister aux maladies.'
            },
            {
              title: 'Énergie au quotidien',
              desc: 'Les bons aliments boostent naturellement votre vitalité.'
            },
            {
              title: 'Prévention des maladies',
              desc: 'Réduction du risque de diabète, cholestérol, obésité...'
            },
          ].map((item, i) => (
            <div key={i} className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-green-700 py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d’un accompagnement personnalisé ?</h2>
        <p className="mb-6 text-lg">Prenez rendez-vous avec un nutritionniste dès aujourd’hui.</p>
        <Link
          to="/rdv"
          className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Prendre rendez-vous
        </Link>
      </section>
      <AboutSection />
      <CTA />
      <ExpertSection />
      <TestimonialsSection />
      {/* À propos */}
     
      </MainLayout>
    )
  }
  
  export default Accueil
  