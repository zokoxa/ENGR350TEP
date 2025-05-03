import React, { Fragment, useState } from "react";

const Video = () => {
  return (
    <Fragment>
      <h2 className="container-fluid text-center text-light">
        What do you want to be when you grow up?
      </h2>
      <div className="p-0 m-0 container-fluid align-items-center justify-content-center d-flex flex-column">
        <iframe
          className="p-4 m-5 rounded-3 bg-dark"
          width="815"
          height="480"
          src="https://www.youtube-nocookie.com/embed/0j0xzuh-6rY?si=JuhZdTlzZOZQyACp"
          title="Tikkok vs Douyin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Video;
