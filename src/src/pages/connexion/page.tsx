import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import MainLayout from "../../layouts/MainLayout";




function ConnexionToDashboard() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email === "nutrition@example.com" && formData.password === "secret") {
      navigate("/dashboard");
    } else {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-green-700 font-semibold hover:underline z-20"
      >
        <ArrowLeft size={16} />
        Retour à l’accueil
      </Link>
      {/* Left - Form */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Connexion</h2>
            <p className="text-sm text-gray-500 mt-1">
              Connectez-vous pour accéder à votre espace nutritionniste.
            </p>
          </div>
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="ex: nom@domaine.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-green-600 hover:underline">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Se connecter
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Vous n'avez pas encore de compte ?{" "}
            <a href="/devenir-membre" className="text-green-600 hover:underline font-semibold">
              Créer un compte
            </a>
          </p>
        </div>
      </div>

      {/* Right - Background image */}
      <div className="hidden md:block bg-contain bg-no-repeat bg-center   bg-[url('/doct.svg')]" />
    </section>
  );
}


export default ConnexionToDashboard