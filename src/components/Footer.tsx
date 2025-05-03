import React, { Fragment, useState } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-dark text-light">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0">
          <p className="col-md-4 mb-0 text-light">
            © 2025 Freedom Intensifies, Inc
          </p>

          <a
            href="#"
            className=" col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto"
            aria-label="Tikblock"
          >
            <img
              src="/tikblock.png"
              className="bi me-2"
              width="60"
              height="60"
              aria-hidden="true"
            ></img>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-1 text-light">
                -1000000000
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-1 text-light">
                Social Credit
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-1 text-light">
                To The
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-1 text-light">
                Creator Of
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-1 text-light">
                This Website
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
