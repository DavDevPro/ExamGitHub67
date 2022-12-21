import React, { useContext } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Following = ({following}) => {

  console.log(following);
  return (
    <div>
     {
      following.map(follow => (
        <div className="border-bottom p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-between">
          {/* <img className="mx-3" src={follow.avatar_url} alt="" width={50} height={50} /> */}
          <div>
            <a className="nav-link text-secondary fw-normal fs-6" href="#">
              Davronbek Latibjonov &nbsp; <span className="text__sm">Davronbek2000</span>
            </a>
            <p className="text__sm--12 mb-0 text-muted mt-1">Updated yesterday</p>
            <p className="text__sm--12 mb-0 text-muted mt-2">
              <HiOutlineOfficeBuilding size={20} /> WebToad s.r.o &nbsp;
              <span>
                <GoLocation size={18} /> Tashkent, Uzbekistan
              </span>
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-light border btn-sm">
          Unfollow
        </button>
      </div>
      ))
     }
     
    </div>
  );
};

export default Following;
