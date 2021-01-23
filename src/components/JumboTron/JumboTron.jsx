import React from "react";

const JumboTron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Welcome To Our User Directory!</h1>

      <hr className="my-4" />

      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Sort By Last Name
        </a>
      </p>
      <div className="create-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Employee"
            aria-label="Search Employee"
            //   onChange={props.onChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default JumboTron;
