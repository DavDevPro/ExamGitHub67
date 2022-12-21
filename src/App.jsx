import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePageLinks from "./components/HomePageLinks/HomePageLinks";
import Overview from "./pages/Overview/Overview";
import Repositories from "./pages/Repositories/Repositories";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects/Projects";
import Packages from "./pages/Packages/Packages";
import Stars from "./pages/Stars/Stars";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";
import API from "./API/API";
import { UserCreateContext } from "./context/UserContext";
// import { ReposContext } from "./context/ReposContext";
import glass from "./assets/images/Dual Ring-1s-200px.png";

const App = () => {
  const { repo, setRepo, user, setUser, loading, setLoading, following,setFollowing } = useContext(UserCreateContext);
  // const { repos, setRepos } = useContext(ReposContext);
  const username = "mukhriddin-dev";
  useEffect(() => {
    setLoading(true);
    API.getUser(username)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    API.getRepos(username)
      .then((rep) => {
        setRepo(rep.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    API.getFollowing(user.login)
      .then((response) => {
        setFollowing(response.data)
        console.log(response.data);
      })
      .catch((error) => console.log(error));
      console.log(user.login);

  }, [user]);


  return (
    <>
      <Router>
        <Navbar />
        <HomePageLinks />
        {loading ? (
          <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
            <img className="mt-5" src={glass}></img>
          </div>
        ) : (
          <div className="my__container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Sidebar />
              </div>
              <div className="col-md-9 col-sm-12">
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path={`/${user.login}`} element={<Overview />} />
                  <Route path="/repositories" element={<Repositories />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/packages" element={<Packages />} />
                  <Route path="/stars" element={<Stars />} />
                  <Route path="/followers" element={<Followers />} />
                  <Route path="/following" element={<Following following={following} />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
