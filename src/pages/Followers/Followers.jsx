import React from "react";
import { BsPeople } from "react-icons/bs";

const Followers = () => {
  return (
    <div>
      <div className="my-3 p-5 d-flex flex-column align-items-center justify-content-around text-center">
        <BsPeople size={28} />
        <h3 className="mt-1">You don't have any followers yet.</h3>
        <p className="text-muted">
          <a className="text-decoration-none" href="https://docs.github.com/get-started/quickstart/be-social">Learn more</a> about being social in GitHub.
        </p>
      </div>
    </div>
  );
};

export default Followers;
