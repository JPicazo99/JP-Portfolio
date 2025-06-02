// pages/Projects.jsx
import { proyectos } from '../data/proyectos';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-white-800">Proyectos destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((p, i) => <ProjectCard key={i} proyecto={p} />)}
      </div>
    </section>
  );
}

export default Projects;