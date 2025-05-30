import React, { Fragment } from "react";
import "./Video.css";

const Video = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0 m-0">
        <h2 className="text-center text-light mb-4">
          What do you want to be when you grow up?
        </h2>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {/* Left image */}
          <img
            src="astro.jpg"
            alt="astronauts"
            className="img-fluid mx-2 d-none d-md-block p-0 bg-dark rounded-3 shadow-lg"
            style={{ maxWidth: "15%", height: "auto", borderRadius: "50px" }}
          />

          {/* Video iframe container */}
          <div
            className="flex-shrink-1 flex-grow-1 m-1"
            style={{ maxWidth: "65%", width: "100%" }}
          >
            <iframe
              className="w-100 rounded-3"
              style={{ aspectRatio: "16/9" }}
              src="https://www.youtube-nocookie.com/embed/0j0xzuh-6rY?si=JuhZdTlzZOZQyACp"
              title="Tikkok vs Douyin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Right image */}
          <img
            src="pauls.png"
            alt="pauls"
            className="img-fluid mx-2 d-none d-md-block p-0 bg-dark rounded-3 shadow-lg"
            style={{ maxWidth: "15%", height: "auto", borderRadius: "50px" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Video;
