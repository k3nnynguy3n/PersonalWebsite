import './Projects.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    { title: "Seattle Crime Dashboard", summary: "Interactive map of Seattle crime data.", link: "#" },
    { title: "Crop Detection AI", summary: "Aerial crop analysis with AI.", link: "#" }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="cards">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}