import mooncycleDemo from "../assets/mooncycle-demo.mp4"
import profile from "../assets/profile.jpg"
export default function Home() {
    return (
        <>
            <main className="home-main">
                {/* Hero Section */}
                <section className="hero">
                    <h1>LaTorya Hoyle-Sadler</h1>
                    <h2>Full Stack Software Engineer | Interactive Experience Developer</h2>
                    <p>
                        I build web applications, games, and educational experiences using JavaScript, React, and full-stack technologies.
                    </p>
                </section>
                {/* About Me Section */}
                <section className="about-me">
                    <h2>About Me</h2>
                    <div>
                        <img className="about-image" src={profile} alt="LaTorya Hoyle-Sadler" />
                    </div>
                    <p>I am Full Stack Software Engineer passionate about creating experiences that encourage curiosity, learning, and connection.</p>
                    <p>
                        Through ToyMind Interactive, I explore how technology can become more than a tool by creating applications and games that inspire people to pause, interact, and discover something meaningful.
                    </p>
                </section>
                {/* Core Stack Section */}
                <section className="stack">
                    <h2>Core Stack</h2>
                    <ul className="stack=list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Git</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </section>
                {/* Metrics Section */}
                <section className="metrics">
                    <h2>Development Highlights</h2>
                    <div>
                        <p> <strong>10+</strong>
                            <br />
                            Web Applications & Interactive Experiences</p>
                    </div>
                </section>
                {/* Featured Project Section */}
                <section className="featured-project">
                    <h2>Featured Project</h2>
                    <h3>Mooncycle Ritual Garden Co. V2</h3>
                    <video
                        className="project-demo"
                        src={mooncycleDemo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <p>
                    An interactive wellness and gardening experience that combines responsive design, JavaScript functionality, mini-games, and creative user experiences.
                </p>
                <a href="https://iamlatorya.github.io/mooncycle-ritual-garden-co-v2/" target="_blank" rel="noopener noreferrer">View Project</a>
            </section>
        </main >
        </>
    )
}