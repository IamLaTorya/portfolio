import skillCategories from '../data/skillCategories';
export default function SkillTree() {
    return (
        <section>
            <h2>🌳 Developer Skill Tree</h2>

            <p>
                Every project completed unlocks new abilities.
                Every challenge accepted powers up existing ones.
            </p>

            {skillCategories.map((category) => (
                <div key={category.title}>
                    <h3>{category.title}</h3>
                    <p>{category.status}</p>

                    <ul>
                        {category.skills.map((skill) => (
                            <li key={skill.name}>
                                {skill.level === "complete" && "✅ "}
                                {skill.level === "powering" && "⚡ "}
                                {skill.level === "locked" && "🔒 "}
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}