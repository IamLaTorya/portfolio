import mooncycleGif from "../assets/mooncycle-demo.gif"
import profile from "../assets/profile.jpg"
export default function Home() {
    return (
        <>
            <main className="home-main">
                <section className="hero">
                    <h1>LaTorya Hoyle-Sadler</h1>
                    <h2>Full Stack Software Engineer | Interactive Experience Developer</h2>
                    <p>
                        I build web applications, games, and educational experiences using JavaScript, React, and full-stack technologies.
                    </p>
                </section>
                <section className="about-me">
                    <h2>About Me</h2>
                    <div className="about-image">
                        <img src={profile} alt="LaTorya Hoyle-Sadler" />
                    </div>
                    <p>I am Full Stack Software Engineer passionate about creating experiences that encourage curiosity, learning, and connection.</p>
                    <p>
                        Through ToyMind Interactive, I explore how technology can become more than a tool by creating applications and games that inspire people to pause, interact, and discover something meaningful.
                    </p>
                </section>
                <section className="featured-project">
                    <h2>Featured Project</h2>
                    <h3>Mooncycle Ritual Garden Co. V2</h3>
                    <img src={mooncycleGif} alt="Mooncycle Ritual Garden Co. website preview" />
                    <p>
                        An interactive wellness and gardening experience that combines responsive design, JavaScript functionality, mini-games, and creative user experiences.
                    </p>
                    <a href="https://iamlatorya.github.io/mooncycle-ritual-garden-co-v2/" target="_blank" rel="noopener noreferrer">View Project</a>
                </section>
            </main>
        </>
    )
}