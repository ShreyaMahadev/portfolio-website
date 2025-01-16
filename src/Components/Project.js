import React from "react";

export default function Project() {
  return (
    <>
      <div id="projects" className="container py-5">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="project1.jpg"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of project 1.</p>
                <a
                  href="https://github.com/yourrepo"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </>
  );
}
