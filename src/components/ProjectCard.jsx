export default function ProjectCard({ repository }) {
    return (
        <article className="project-card">
            <h3>{repository.name}</h3>
            <p>{repository.description || "No description avaliable."}</p>
            <p>Language: {repository.language || "Not specified"}</p>
            {repository.homepage && (
                <a href={repository.homepage} 
                target="_blank"
                rel="noopener noreferrer">
                    Visit Website
                </a>
            )}
            <a href={repository.html_url} 
            target="_blank" 
            rel="noopener noreferrer">
                View on GitHub
            </a>
        </article>
    )
}