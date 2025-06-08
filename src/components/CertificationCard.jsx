function CertificationCard({ cert }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-5 shadow-md hover:shadow-xl transition">
      <h3 className="text-lg font-bold text-indigo-400">{cert.nombre}</h3>
      <p className="text-sm text-gray-300">{cert.institucion}</p>
      <p className="text-sm mt-2">
        {cert.estado === "in progress" ? (
          <span className="text-yellow-400 font-semibold">In Progress</span>
        ) : (
          cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline font-semibold"
            >
              View Certificate
            </a>
          )
        )}
      </p>
    </div>
  );
}

export default CertificationCard;
