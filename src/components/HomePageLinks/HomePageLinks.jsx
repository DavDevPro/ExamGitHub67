import React, {useContext} from "react";
import "./style.scss";
import { IconContext } from "react-icons/lib";
import { BsBook, BsReverseLayoutTextWindowReverse, BsStar } from "react-icons/bs";
import { VscRepo } from "react-icons/vsc";
import { TfiPackage } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { UserCreateContext } from "../../context/UserContext";

const HomePageLinks = () => {
  const {user, repo} = useContext(UserCreateContext);
  return (
    <IconContext.Provider value={{ size: "1.5em", className: "icons" }}>
      <div className="container-fluid border-bottom pt-3">
        <nav className="navbar navbar-expand-lg pb-0">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="home__page--menu navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={`/${user.login}`}>
                    <BsBook />
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/repositories">
                    <VscRepo />
                    Repositories <span className="badge rounded-pill ">{repo.length}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    <BsReverseLayoutTextWindowReverse />
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/packages">
                    <TfiPackage /> Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stars">
                    <BsStar /> Stars <span className="badge rounded-pill ">1</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default HomePageLinks;
