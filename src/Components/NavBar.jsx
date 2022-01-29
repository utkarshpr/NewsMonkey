import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            NewsMonkey
          </a>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link ">
                Home
              </a>
              <a href="/" className="nav-item nav-link">
                Profile
              </a>
              <a href="/" className="nav-item nav-link">
                Messages
              </a>
              <a href="/" className="nav-item nav-link ">
                Reports
              </a>
            </div>

            {/* <div className="navbar-nav ms-auto">
                <a href="/" className="nav-item nav-link">Login</a>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
