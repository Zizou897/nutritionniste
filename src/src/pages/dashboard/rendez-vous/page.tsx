import { CalendarCheck, User2, Clock, Filter } from "lucide-react";
import DashboardLayout from "../dashboardLayout";
import { useState } from "react";

const allAppointments = [
    {
      id: 1,
      name: "Jean Dupont",
      date: "2025-05-05",
      time: "14:00",
      reason: "Suivi diététique",
      status: "confirmé",
    },
    {
      id: 2,
      name: "Amina Diarra",
      date: "2025-05-07",
      time: "10:30",
      reason: "Consultation minceur",
      status: "en attente",
    },
    {
      id: 3,
      name: "Carlos Mendy",
      date: "2025-05-08",
      time: "09:00",
      reason: "Évaluation nutritionnelle",
      status: "annulé",
    },
  ];
  
  const statusColor = {
    confirmé: "bg-green-500",
    "en attente": "bg-yellow-500",
    annulé: "bg-red-500",
  };
  
  export default function AppointmentsSection() {
    const [statusFilter, setStatusFilter] = useState("tous");
    const [dateFilter, setDateFilter] = useState("");
  
    const filteredAppointments = allAppointments.filter((appt) => {
      const matchStatus = statusFilter === "tous" || appt.status === statusFilter;
      const matchDate = !dateFilter || appt.date === dateFilter;
      return matchStatus && matchDate;
    });
  
    return (
    
        <DashboardLayout>

      <section className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <CalendarCheck className="text-green-600" />
            Rendez-vous à venir
          </h2>
          <Filter className="text-gray-400" />
        </div>
  
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-6">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="tous">Tous les statuts</option>
            <option value="confirmé">Confirmé</option>
            <option value="en attente">En attente</option>
            <option value="annulé">Annulé</option>
          </select>
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
  
        <ul className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-300">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appt) => (
              <li
                key={appt.id}
                className="flex justify-between items-start bg-gray-50 border border-gray-200 hover:border-green-400 transition p-4 rounded-xl group"
              >
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <User2 size={16} className="text-green-500" />
                    {appt.name}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Clock size={16} className="text-green-500" />
                    {appt.date} à {appt.time}
                  </p>
                  <p className="text-sm text-gray-800 font-medium">{appt.reason}</p>
                </div>
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full font-semibold ${statusColor[appt.status]}`}
                >
                  {appt.status}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">Aucun rendez-vous trouvé.</p>
          )}
        </ul>
        </section>
      </DashboardLayout>
    );
  }