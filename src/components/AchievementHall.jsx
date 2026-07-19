import { useState } from "react";
import achievements from "../data/achievements";
const certifications = achievements.filter(
    achievement => achievement.type === "Certification"
);

const badges = achievements.filter(
    achievement => achievement.type === "Badge" || achievement.type === "Badge Collection"
);

export default function AchievementHall() {
    const [isOpen, setIsOpen] = useState(false);
    const [showCertifications, setShowCertifications] = useState(false);
    const [showBadges, setShowBadges] = useState(false);

    function handleOpenHall() {
        setIsOpen(true);
    }

    function handleCloseHall() {
        setIsOpen(false);
    }

    return (
        <section className="achievement-hall">

            <h2>🏛️ ToyMind Interactive Achievement Hall</h2>

            <p>
                Explore my certifications, earned badges, and future quests.
            </p>

            <button onClick={handleOpenHall}>
                Enter Achievement Hall
            </button>

            {isOpen && (
                <div className="achievement-modal">

                    <button onClick={handleCloseHall}>
                        Close
                    </button>
                    <h3 onClick={() => setShowCertifications(!showCertifications)}>
                        {showCertifications ? "▼" : "▶"} 🏆 Trophy Room
                    </h3>
                    {showCertifications &&
                        certifications.map((achievement) => (
                            <div
                                key={achievement.title}
                                className="achievement-card"
                            >
                                {/* Certificate images */}
                                {achievement.image && (
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="achievement-image"
                                    />
                                )}
                            </div>
                        ))
                    }
                    <h3 onClick={() => setShowBadges(!showBadges)}>
                        {showBadges ? "▼" : "▶"} 🎮 Badge Gallery
                    </h3>

                    {showBadges &&
                        badges.map((achievement) => (
                            <div
                                key={achievement.title}
                                className="achievement-card"
                            >
                                {/* Single badge image */}
                                {achievement.image ? (
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="achievement-image"
                                    />

                                ) : achievement.images && (
                                    <div className="badge-collection">
                                        {/* Badge collection */}
                                        {achievement.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${achievement.title} badge ${index + 1}`}
                                                className="achievement-image"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            )}
        </section>
    );
}