import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
    const { id } = useParams();// Get the project ID from the browser URL
    // Implementation for displaying project details
    return (
        <div>
            <h2>Project Details</h2>
            <p>Project ID: {id}</p>
            {/* Additional project details can be displayed here */}
        </div>
    )
}