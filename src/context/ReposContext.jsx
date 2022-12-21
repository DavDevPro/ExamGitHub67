import { createContext, useState } from "react";

export const ReposContext = createContext();

const ReposProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  return <ReposContext.Provider value={{ repos, setRepos }}>{children}</ReposContext.Provider>;
};
export default ReposProvider;
