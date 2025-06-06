// components/Navbar.jsx
function Navbar({ onNavigate }) {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-400 cursor-pointer" onClick={() => onNavigate('inicio')}>JP Portfolio</h1>
        <ul className="flex gap-6 text-gray-300 font-medium">
          <li><button onClick={() => onNavigate('inicio')} className="hover:text-indigo-400">Inicio</button></li>
          <li><button onClick={() => onNavigate('proyectos')} className="hover:text-indigo-400">Proyectos</button></li>
          <li><button onClick={() => onNavigate('educacion')} className="hover:text-indigo-400">Educación</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;