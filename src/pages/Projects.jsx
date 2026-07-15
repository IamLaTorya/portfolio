import useFetch from "../hooks/useFetch";//custom hook to fetch data
import ProjectCard from "../components/ProjectCard";
import projectMedia from "../data/projectMedia";//importing media data for projects

export default function Projects() {
    const { data, isLoading, error } = useFetch("https://api.github.com/users/IamLaTorya/repos");

    if (isLoading) {//display the loading state
        return <p>Loading projects...</p>
    }
    if (error) {//display error
        return <p>{error}</p>
    }
    const featuredProjects = [
        "jokes-app2025",
        "christmas-app2025",
        "typing-speed-app2025",
        "the-dynamic-task-manager",
        "the-digital-timekeeper", "mooncycle-ritual-garden-co-v2", "mooncycle-ritual-garden-co",
        "rps-mirror-of-fate-game"
    ];
    const filteredProjects = data.filter((repositories) => featuredProjects.includes(repositories.name));
    return (
        <>
            <h1>Projects</h1>
            {filteredProjects.map((repository) => (
                <ProjectCard 
                key={repository.id} 
                repository={repository}
                name={repository.name}
                description={repository.description}
                language={repository.language}
                thumbnail={projectMedia[repository.name]?.thumbnail}
                />
            ))}
        </>
    )
}