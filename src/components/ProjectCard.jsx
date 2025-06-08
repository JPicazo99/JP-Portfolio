function ProjectCard({ proyecto }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-indigo-600">{proyecto.nombre}</h3>
      <p className="text-gray-700 mt-2">{proyecto.descripcion}</p>
      <p className="text-sm text-gray-500 mt-1">
        Technologies: {proyecto.technologies.join(', ')}
      </p>

      {/* Solo muestra los enlaces si existen */}
      <div className="mt-4 flex gap-4">
        {proyecto.github && (
          <a
            href={proyecto.github}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {proyecto.demo && (
          <a
            href={proyecto.demo}
            className="text-green-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {proyecto.link && (
          <a
            href={proyecto.link}
            className="text-purple-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
