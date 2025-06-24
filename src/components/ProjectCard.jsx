import './ProjectCard.css';

export default function ProjectCard({ title, summary, link }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{summary}</p>
          <a href={link} target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
}
