import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const projects = [
    { title: "Seattle Crime Dashboard", summary: "An interactive map displaying real-time crime data in Seattle.", link: "#" },
    { title: "Crop Detection AI", summary: "YOLOv8 + GPT for aerial crop analysis and yield forecasting.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="cards">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
