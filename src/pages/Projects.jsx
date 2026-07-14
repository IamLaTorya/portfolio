import { useEffect, useState } from "react";//to fetch & store data
// import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    // creating state
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
// useEffect must be called inside of Projects component
    useEffect(() => {

        async function getRepositories() {
            try {//atempt the request
                setIsLoading(true);
                const response = await fetch(
                    "https://api.github.com/users/IamLaTorya/repos"
                );

                if (!response.ok) {//create error message
                    throw new Error("Failed to retrieve data.");
                }
                const repositories = await response.json();
                setData(repositories);
            } catch (error) {//handle errors
                setError(error.message);
            } finally {//stop showing the loading indicator
                setIsLoading(false);
            }
        }
        getRepositories();
    }, []);//empty dependency array to prevent infinite loops

    if (isLoading) {//display the loading state
        return <p>Loading projects...</p>
    }
    if (error) {//display error
        return <p>{error}</p>
    }

    return (
        <>
            <h1>Projects</h1>
            {/* <ProjectCard /> */}
            {data.map((repositories) => (
                <p key={repositories.id}>{repositories.name}</p>
            ))}
        </>
    )
}