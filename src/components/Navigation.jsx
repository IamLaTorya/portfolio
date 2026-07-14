import { NavLink } from "react-router-dom";

export default function Navigation({
    isDarkMode,
    onToggleMode
}) {
    return (
        <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button onClick={onToggleMode}>{isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>
        </nav>
    )
}