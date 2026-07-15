import { Link } from "react-router-dom";

export default function ProjectCard({
    repository,
    thumbnail,
}) {

    return (
        <article className="project-card">

            {thumbnail && (
                <img
                    src={thumbnail}
                    alt={`${repository.name} preview`}
                    className="project-thumbnail"
                />
            )}

            <h2>{repository.name}</h2>

            <p>
                {repository.description || "No description available."}
            </p>

            <p>
                <strong>Primary Language:</strong>{" "}
                {repository.language || "Not specified"}
            </p>

            <Link to={`/projects/${repository.name}`}>
                View Details
            </Link>

        </article>
    );

}