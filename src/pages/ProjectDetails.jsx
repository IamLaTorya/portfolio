import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import projectMedia from "../data/projectMedia";

export default function ProjectDetails() {

    const { id } = useParams();

    const {
        data,
        isLoading,
        error
    } = useFetch(
        "https://api.github.com/users/IamLaTorya/repos"
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
// find the repository name that matches the id from the URL parameters.
    const repository = data.find(
        (repository) => repository.name === id
    );

    if (!repository) {
        return <p>Project not found.</p>;
    }

    const media = projectMedia[repository.name];

    return (

        <div>

            <h1>{repository.name}</h1>

            {media?.demo && (

                <img
                    src={media.demo}
                    alt={`${repository.name} demo`}
                    className="project-demo"
                />

            )}

            <p>
                {repository.description}
            </p>

            <p>
                <strong>Primary Language:</strong>{" "}
                {repository.language}
            </p>

            <p><strong>Created Date:</strong> {new Date(repository.created_at).toLocaleDateString()}</p>

            <p><strong>Last Updated:</strong> {new Date(repository.updated_at).toLocaleDateString()}</p>

            {repository.homepage && (

                <a
                    href={repository.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Live Website
                </a>

            )}

            <br />

            <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub Repository
            </a>

        </div>

    );

}