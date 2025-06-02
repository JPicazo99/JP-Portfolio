// pages/CVSection.jsx
function CVSection() {
  return (
    <section className="my-20 text-center">
      <h2 className="text-3xl font-bold text-white-800 mb-6">Currículum</h2>
      <div className="flex justify-center">
        <img
          src="/assets/mi_cv.png"
          alt="Currículum Joel Picazo"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
}

export default CVSection;