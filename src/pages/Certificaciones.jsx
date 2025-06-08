import { certificaciones } from "../data/certificaciones";
import CertificationCard from "../components/CertificationCard";

function Certificaciones() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certificaciones.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} />
        ))}
      </div>
    </section>
  );
}

export default Certificaciones;
