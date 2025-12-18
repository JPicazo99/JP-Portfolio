// pages/Educacion.jsx
function Education() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Academic Background</h2>
      <div className="space-y-10">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-indigo-300">Bachelor’s Degree in Mechatronics Engineering – University of Monterrey (UDEM)</h3>
          <p className="text-gray-300 mt-2">San Pedro Garza García, N.L., Mexico</p>
          <p className="text-gray-400">August 2018 – June 2022</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-indigo-300">M.Sc. in Computer Engineering and Technologies – Cinvestav Tamaulipas</h3>
          <p className="text-gray-300 mt-2">Ciudad Victoria, Tamaulipas, Mexico</p>
          <p className="text-gray-400">August 2023 – December 2025</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
