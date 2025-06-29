const Topbar = () => {
    return (
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
        <h1 className="text-lg font-semibold text-gray-800">Bienvenue, Paul Bediakon 👋</h1>
        <div className="flex items-center gap-4">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>
    )
  }
  
  export default Topbar
  