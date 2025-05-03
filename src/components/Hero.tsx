import { Fragment } from "react/jsx-runtime";
import { Tooltip } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Hero() {
  return (
    <Fragment>
      <section className="hero container-fluid d-flex align-items-center p-0 m-0">
        <video className="container-fluid p-0 m-0" autoPlay muted loop>
          <source
            src="/AdobeStock_423600864_Video_HD_Preview.mov"
            type="video/mp4"
          ></source>
        </video>
        <div className="container-fluid bg-dark position-absolute text-center text-light px-0 py-3 m-0">
          <img
            className="mb-1"
            src="/ttlogo.png"
            alt=""
            width="100"
            height="100"
          ></img>
          <h1 className="display-6 fw-bold">TikTok vs Douyin</h1>
          <div className="col-lg-5 mx-auto p-0 m-0">
            <p className="lead mb-1 p-0 m-0">
              There is a big difference between the Chinese version of TikTok,
              Douyin, and what is available in the rest of the world.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
