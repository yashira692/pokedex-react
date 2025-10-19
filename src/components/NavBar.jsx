import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom mb-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">PokeDex Explorer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink end to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/entities" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Entities</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}