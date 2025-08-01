import { useEffect, useState } from 'react';

function Inicio() {
  const [texto, setTexto] = useState('');
  const frase = 'Hello, I am Joel Picazo — Data Analyst & Web Developer';

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(frase.slice(0, i + 1));
      i++;
      if (i === frase.length) clearInterval(intervalo);
    }, 150);
    return () => clearInterval(intervalo);
  }, []);

  const tecnologias = [
  { nombre: "Python", icono: "/icons/python.svg", color: "text-green-400", border: "border-green-400" },
  { nombre: "C/C++", icono: "/icons/cpp.svg", color: "text-blue-300", border: "border-blue-300" },
  { nombre: "Java", icono: "/icons/java.svg", color: "text-red-500", border: "border-red-500" },
  { nombre: "JavaScript", icono: "/icons/javascript.svg", color: "text-yellow-400", border: "border-yellow-400" },
  { nombre: "Matlab", icono: "/icons/matlab.svg", color: "text-orange-400", border: "border-orange-400" },
  { nombre: "Arduino", icono: "/icons/arduino.svg", color: "text-teal-400", border: "border-teal-400" },
  { nombre: "Docker", icono: "/icons/docker.svg", color: "text-sky-400", border: "border-sky-400" },
  { nombre: "Git", icono: "/icons/git.svg", color: "text-orange-500", border: "border-orange-500" },
  // { nombre: "GitHub", icono: "/icons/github.svg", color: "text-gray-300", border: "border-gray-300" },
  { nombre: "React", icono: "/icons/react.svg", color: "text-cyan-400", border: "border-cyan-400" },
  { nombre: "Tailwind", icono: "/icons/tailwind.svg", color: "text-sky-300", border: "border-sky-300" },
];



  const skills = [
    'Git & GitHub (version control)',
    'RESTful API development with Flask / FastAPI',
    'Docker (containerization & deployment)',
    'Object-Oriented Programming',
    'Programming and navigating in Linux environments',
    'SQL (BigQuery, queries, joins, CRUD)',
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
        Data Analyst and Software Developer with expertise in Python and C/C++, and a foundational knowledge of JavaScript. Currently pursuing a Master's degree in Computer Science, specializing in Optimization and Heuristic Algorithms. Adept at solving complex problems and building efficient software solutions. Passionate about leveraging data-driven insights and optimization techniques to develop innovative solutions in collaborative environments.
      </p>
      <p className="text-indigo-400 font-medium text-lg">joel.picazo@cinvestav.mx</p>
      <p className="text-gray-400 text-base">Monterrey, Nuevo Leon, Mexico</p>
      <div className="mt-4 flex justify-center md:justify-start gap-4">
        <a href="https://www.linkedin.com/in/joel-picazo-60748a242/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm">LinkedIn</a>
        <a href="https://github.com/JPicazo99" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-md text-sm">GitHub</a>
      </div>
      <a
        href="/assets/mi_cv.pdf"
        download
        className="inline-block mt-6 px-9 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 transition"
      >
        Download Summary
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

<div className="mt-20">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">Languages & Tools</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
    {tecnologias.map((tech, idx) => (
      <div
        key={idx}
        className={`flex flex-col items-center justify-center w-32 h-32 border rounded-xl p-4 shadow-md hover:scale-105 transition ${tech.border}`}
      >
        <img src={tech.icono} alt={tech.nombre} className="w-10 h-10 mb-2" />
        <span className={`text-sm font-semibold ${tech.color}`}>{tech.nombre}</span>
      </div>
    ))}
  </div>
</div>




  {/* About My Resume Section */}
<div className="bg-[#0f172a] text-white rounded-xl shadow-lg px-8 py-12 mt-12">
  <h2 className="text-3xl font-bold text-center mb-6">Professional Summary</h2>
  <div className="grid md:grid-cols-2 gap-12">

    {/* Left Column: Personal Info */}
    <div className="space-y-4">
      <div className="flex justify-between border-b border-gray-600 pb-2">
        <span className="text-gray-400">Age:</span>
        <span className="font-semibold">26</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 pb-2">
        <span className="text-gray-400">Country:</span>
        <span className="font-semibold">Mexico</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 pb-2">
        <span className="text-gray-400">Address:</span>
        <span className="font-semibold">Monterrey, Nuevo León</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 pb-2">
        <span className="text-gray-400">Email:</span>
        <span className="font-semibold">joel.picazo@cinvestav.mx</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 pb-2">
        <span className="text-gray-400">Phone:</span>
        <span className="font-semibold">+52 834 154 9400</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Freelance:</span>
        <span className="font-semibold">Available</span>
      </div>
    </div>

    {/* Right Column: Technical Skills */}
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-indigo-400 mb-4">Technical Skills</h3>
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
