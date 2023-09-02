import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


export default function Home() {

// const Home = () => {
  return (
    <>
    <Sidebar />
    <div className="container">
      <div className="link-container">
        <div className="links">
          <Link to="/work">
            <h1>Work</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

// export default Home;


