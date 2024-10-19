import React from "react";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CRUD APP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <button className="btn btn-outline-light">Add User</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
