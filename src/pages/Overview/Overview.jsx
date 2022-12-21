import React, { useContext } from "react";
import { UserCreateContext } from "../../context/UserContext";

const Overview = () => {
  const {repo} = useContext(UserCreateContext);

  return (
    <>
      <div className="overview__repos my-5">
        <div className="d-flex algin-items-center justify-content-between">
          <p className="m-0 text-muted text__sm">Popular repositories</p>
          <p className="m-0 text-muted text__sm">Customize your pins</p>
        </div>
        <div className="row">
          {repo.slice(0, 6).map((item) => (

            <div className="col-6" key={item.id}>
             <div className="card my-3 p-3 d-flex flex-row justify-content-between">
                <div className="d-flex flex-column justify-content-between">
                  <a className="nav-link text-primary" href={`https://github.com/${item.full_name}`} target="_blank">
                    {item?.name}
                  </a>
                  <p className="mb-0 mt-3 text-muted text__sm">My first github</p>
                </div>
                <div className="">
                  <span className="badge rounded-pill text-bg-light border">Public</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;
