// pages/Educacion.jsx
function Educacion() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Formación Académica</h2>
      <div className="space-y-10">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-indigo-300">Mechatronics Engineering - University of Monterrey (UDEM)</h3>
          <p className="text-gray-300 mt-2">San Pedro Garza García, N.L.</p>
          <p className="text-gray-400">Agosto 2018 – Junio 2022</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-indigo-300">Master of Science in Computer Engineering and Technologies - Cinvestav Tamaulipas</h3>
          <p className="text-gray-300 mt-2">Cd. Victoria, Tamaulipas</p>
          <p className="text-gray-400">Agosto 2023 – En curso (septiembre 2025)</p>
        </div>
      </div>
    </section>
  );
}

export default Educacion;