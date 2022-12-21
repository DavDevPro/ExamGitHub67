import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserCreateContext } from "../../context/UserContext";
import "./style.scss";

const UserList = ({ users }) => {
  const { setUser, user } = useContext(UserCreateContext);
  console.log(user.login);
  const navigate = useNavigate();

  const userHandler = (user) => {
    setUser(user);
    navigate("/");
  };
  return (
    <>
      {users.length > 0 ? (
        <ul className="user__list my-4 mx-4 border rounded shadow py-3 pe-5">
          <p className="text-center text-muted">Users matching your search: {users.length}</p>
          {users.map((user) => (
            <li onClick={() => userHandler(user)} key={user.id}>
              <img src={user.avatar_url} width={40} className="rounded-circle me-3 my-2" />
              {user.login}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h4 className="text-center mt-5 text-danger">No user found! </h4>
          <p className="text-center text-muted">Please, enter an existing username!</p>
        </div>

        // useEffect(() => {
        //   navigate(`/${user.login}`);
        // }, [])
      )}
    </>
  );
};

export default UserList;
