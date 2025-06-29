import MainLayout from "../../layouts/MainLayout"
import RDVSection from "../../components/RDVSection"

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
    { title: "Votre besoin" },
    { title: "Date du rendez-vous" },
    { title: "Informations personnelles" },
  ];
function RDV (){

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      besoin: "",
      date: "",
      nom: "",
      prenom: "",
      contact: "",
      email: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const handleNext = () => {
      const currentErrors = validateStep(step);
      if (Object.keys(currentErrors).length === 0) {
        setErrors({});
        setStep((prev) => Math.min(prev + 1, steps.length));
      } else {
        setErrors(currentErrors);
      }
    };
  
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  
    const updateField = (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };
  
    const validateStep = (currentStep: number) => {
      const newErrors: { [key: string]: string } = {};
      if (currentStep === 1 && !formData.besoin.trim()) {
        newErrors.besoin = "Ce champ est requis.";
      }
      if (currentStep === 2 && !formData.date) {
        newErrors.date = "Veuillez choisir une date.";
      }
      if (currentStep === 3) {
        if (!formData.nom.trim()) newErrors.nom = "Nom requis.";
        if (!formData.prenom.trim()) newErrors.prenom = "Prénom requis.";
        if (!formData.contact.trim()) newErrors.contact = "Contact requis.";
        if (!formData.email.trim()) {
          newErrors.email = "Email requis.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email invalide.";
        }
      }
      return newErrors;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const currentErrors = validateStep(step);
      if (Object.keys(currentErrors).length === 0) {
        console.log("Formulaire final:", formData);
        alert("Rendez-vous enregistré avec succès !");
        setFormData({
          besoin: "",
          date: "",
          nom: "",
          prenom: "",
          contact: "",
          email: "",
        });
        setStep(1);
      } else {
        setErrors(currentErrors);
      }
    };
    
    return (
        <MainLayout>
        <RDVSection />

        <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Progression */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          {steps.map((stepItem, index) => (
            <div key={index} className="flex-1 text-center text-sm font-medium text-gray-600">
              <div
                className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                  step >= index + 1 ? "bg-green-500 text-white" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {stepItem.title}
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${(step / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Formulaire interactif */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-2">Expliquez votre besoin</h3>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3"
              rows={5}
              value={formData.besoin}
              onChange={(e) => updateField("besoin", e.target.value)}
              placeholder="Décrivez votre besoin nutritionnel, vos objectifs, vos questions..."
              required
            />
            {errors.besoin && <p className="text-red-500 text-sm mt-1">{errors.besoin}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold mb-2">Choisissez une date</h3>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-3"
              value={formData.date}
              onChange={(e) => updateField("date", e.target.value)}
              required
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.nom}
                onChange={(e) => updateField("nom", e.target.value)}
              />
              {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.prenom}
                onChange={(e) => updateField("prenom", e.target.value)}
              />
              {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.contact}
                onChange={(e) => updateField("contact", e.target.value)}
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
        )}

        {/* Boutons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Retour
            </button>
          ) : <span />}

          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Suivant
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Confirmer
            </button>
          )}
        </div>
      </form>
    </section>
        </MainLayout>
    )
}

export default RDV