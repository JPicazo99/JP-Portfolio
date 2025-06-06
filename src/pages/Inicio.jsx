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
    <section className="mb-32 px-4">
     <div
  className="w-full rounded-xl shadow-lg relative overflow-hidden"
  style={{
    backgroundImage: "url('/assets/fondo_dark.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Capa semitransparente oscura */}
  <div className="w-full h-full bg-[#0f172a]/90 px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
    {/* Columna de texto */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-6xl font-extrabold text-indigo-400 mb-2">
        {texto}<span className="animate-pulse">|</span>
      </h1>
      <p className="text-xl text-gray-300 mb-4">
        Desarrollador web enfocado en crear soluciones modernas y funcionales.
      </p>
      <p className="text-indigo-400 font-medium text-lg">joelpicazo@ejemplo.com</p>
      <p className="text-gray-400 text-base">Cd. Victoria, Tamaulipas, México</p>
      <div className="mt-4 flex justify-center md:justify-start gap-4">
        <a href="https://www.linkedin.com/in/joel-picazo-60748a242/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm">LinkedIn</a>
        <a href="https://github.com/JPicazo99" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-md text-sm">GitHub</a>
      </div>
      <a
        href="/assets/mi_cv.pdf"
        download
        className="inline-block mt-6 px-9 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 transition"
      >
        Descargar Resumen
      </a>
    </div>

    {/* Foto */}
    <div className="flex-1 flex justify-center items-end self-end relative min-h-[300px]">
  {/* Fondo decorativo estilo rayo */}
  <div className="absolute bottom-0 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-700 to-purple-500 opacity-20 blur-2xl z-0"></div>

  {/* Tu foto en primer plano */}
    <img
    src="/assets/mi_foto.png"
    alt="Foto de perfil"
    className="w-100 object-contain relative z-10 drop-shadow-2xl"
  />
</div>
  </div>
</div>

<div className="mt-20 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Lenguajes de Programación</h2>
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
      </div>



      {/* Sección About My Resume */}
<div className="bg-[#0f172a] text-white rounded-xl shadow-lg px-8 py-12 mt-12">
  <h2 className="text-3xl font-bold text-center mb-6">Sobre Mi Resumen</h2>
  <div className="grid md:grid-cols-2 gap-12">
  {/* Columna izquierda: Datos personales */}
  <div className="space-y-4">
    <div className="flex justify-between border-b border-gray-600 pb-2">
      <span className="text-gray-400">Edad:</span>
      <span className="font-semibold">26</span>
    </div>
    <div className="flex justify-between border-b border-gray-600 pb-2">
      <span className="text-gray-400">Residencia:</span>
      <span className="font-semibold">México</span>
    </div>
    <div className="flex justify-between border-b border-gray-600 pb-2">
      <span className="text-gray-400">Dirección:</span>
      <span className="font-semibold">Nuevo León, Monterrey</span>
    </div>
    <div className="flex justify-between border-b border-gray-600 pb-2">
      <span className="text-gray-400">Correo:</span>
      <span className="font-semibold">joel.picazo@cinvestav.mx</span>
    </div>
    <div className="flex justify-between border-b border-gray-600 pb-2">
      <span className="text-gray-400">Teléfono:</span>
      <span className="font-semibold">+52 834 154 9400</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-400">Freelance:</span>
      <span className="font-semibold">Disponible</span>
    </div>
  </div>

  {/* Columna derecha: Habilidades técnicas */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-indigo-400 mb-4">Habilidades Técnicas</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {skills.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  </div>
</div>

</div>

    </section>
  );
}

export default Inicio;
