// App.jsx
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import CVSection from './pages/CVSection';
import Inicio from './pages/Inicio';
import Educacion from './pages/Educacion';
import { useEffect, useState } from 'react';

function App() {
  const [section, setSection] = useState('inicio');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['inicio', 'proyectos', 'cv', 'educacion'].includes(hash)) {
      setSection(hash);
    }
  }, []);

  const renderSection = () => {
    switch (section) {
      case 'proyectos':
        return <Projects />;
      case 'cv':
        return <CVSection />;
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
      <main className="pt-24 px-4 max-w-6xl mx-auto">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;