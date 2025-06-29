import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () =>{ 
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'backdrop-blur bg-white/80 shadow-md'
          : 'bg-white shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-green-600 font-extrabold text-2xl">
          Nutrition Santé
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-10 text-gray-700 font-medium">
            {[
              { label: 'Accueil', path: '/' },
              { label: 'Blogs', path: '/blog' },
              { label: 'Contact', path: '/contact' },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-green-600 font-semibold border-b-2 border-green-600 pb-1'
                      : 'hover:text-green-600 transition'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/connexion"
            className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition"
          >
            <LogIn size={18} /> Connexion
          </Link>
          <Link
            to="/devenir-membre"
            className="flex items-center gap-1 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition text-sm font-semibold"
          >
            <UserPlus size={18} /> Inscription
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur bg-white/80 border-t border-gray-200 px-6 py-4 space-y-4 shadow-md"
          >
            <nav>
              <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                {[
                  { label: 'Accueil', path: '/' },
                  { label: 'Blogs', path: '/blogs' },
                  { label: 'Contact', path: '/contact' },
                ].map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-green-600 font-semibold'
                          : 'hover:text-green-600 transition'
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
              >
                <LogIn size={18} /> Connexion
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition text-sm font-semibold"
              >
                <UserPlus size={18} /> Inscription
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
