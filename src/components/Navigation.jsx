import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}