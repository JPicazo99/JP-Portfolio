// pages/Inicio.jsx
import { useEffect, useState } from 'react';

function Inicio() {
  const [texto, setTexto] = useState('');
  const frase = 'Hola, soy Joel';

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(frase.slice(0, i + 1));
      i++;
      if (i === frase.length) clearInterval(intervalo);
    }, 150);
    return () => clearInterval(intervalo);
  }, []);

  const lenguajes = [
    'Python', 'C/C++', 'Matlab', 'Java', 'JavaScript', 'Arduino', 'Ladder (Siemens)'
  ];

  const skills = [
    'Git & GitHub (version control)',
    'RESTful API development with Flask',
    'Docker (containerization & deployment)',
    'Object-Oriented Programming',
    'Programming and navigating in Linux environments',
    'Basic SQL (queries, joins, CRUD)',
    'Basic Power BI (data visualization & dashboards)'
  ];

  return (
    <section className="mb-20 flex flex-col items-center text-center">
      <div>
        <h1 className="text-5xl font-extrabold text-indigo-400 h-20">{texto}<span className="animate-pulse">|</span></h1>
        <p className="mt-4 text-lg text-gray-300">Desarrollador web enfocado en crear soluciones modernas y funcionales.</p>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-6">Lenguajes de Programación</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {lenguajes.map((lang, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-lg border border-indigo-400 text-indigo-300 font-semibold text-sm transition transform hover:scale-105 shadow-md bg-gray-800 min-w-[120px] text-center"
            >
              {lang}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Habilidades Técnicas</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 text-left">
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Inicio;