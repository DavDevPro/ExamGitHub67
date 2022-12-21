import { createContext, useState } from "react";
 
export const UserCreateContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState([])
  const [following, setFollowing] = useState([])
  console.log(following);

  return <UserCreateContext.Provider value={{ repo, setRepo, user, setUser, loading, setLoading, following, setFollowing}}>{children}</UserCreateContext.Provider>;
};

export default UserProvider;
