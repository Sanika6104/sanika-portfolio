function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">
          SANIKA VISHAL DHANAWADE
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#certificates">Certificates</a>
          </li>

          <li>
            <a href="#documents">Documents</a>
          </li>

          <li>
            <a href="#awards">Awards</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <div className="theme-icon">
          ☾
        </div>

      </div>

    </nav>
  );
}

export default Navbar;