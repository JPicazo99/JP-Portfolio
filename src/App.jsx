import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Educacion from './pages/Educacion';
import Inicio from './pages/Inicio';
import { useEffect, useState } from 'react';

function App() {
  const [section, setSection] = useState('inicio');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['inicio', 'proyectos', 'educacion'].includes(hash)) {
      setSection(hash);
    }
  }, []);

  const renderSection = () => {
    switch (section) {
      case 'proyectos':
        return <Projects />;
      case 'educacion':
        return <Educacion />;
      case 'inicio':
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <Navbar onNavigate={setSection} />
      {/* Quitamos max-w-6xl y lo dejamos ancho completo */}
      <main className="pt-24 px-4">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
