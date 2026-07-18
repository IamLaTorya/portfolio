import DeveloperDashboard from "../components/DeveloperDashboard";
import EngineeringPhilosophy from "../components/EngineeringPhilosophy";
import JourneyTimeline from "../components/JourneyTimeline";

export default function Experience() {
    return (
        <>
            <main>
                <h1>Experience & Skills</h1>

                <DeveloperDashboard />
                <EngineeringPhilosophy />
                <JourneyTimeline />
            </main>
        </>
    );
}