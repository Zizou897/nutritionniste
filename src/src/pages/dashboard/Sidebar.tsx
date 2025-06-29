import { Calendar, FileText, LayoutDashboard, LogOut, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Tableau de bord', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Rendez-vous', path: '/dashboard/rendez-vous', icon: Calendar },
  { name: 'Articles', path: '/dashboard/articles', icon: FileText },
  { name: 'Profil', path: '/dashboard/profile', icon: User }
]

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r h-full shadow-md p-6">
      <div className="text-2xl font-bold text-green-600 mb-8">NutriBoard</div>
      <nav className="space-y-4">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md font-medium transition hover:bg-green-100 ${
                isActive ? 'bg-green-100 text-green-700' : 'text-gray-600'
              }`
            }
          >
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
      <button className="flex items-center gap-2 mt-12 text-red-500 hover:text-red-600 transition">
        <LogOut size={18} />
        Déconnexion
      </button>
    </aside>
  )
}

export default Sidebar
