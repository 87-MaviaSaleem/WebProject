import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Posts } from "../Posts/Posts";
import { Photos } from "../Photos/Photos";
import { Connections } from "../Connections/Connections";
import "./Nav.css";

export const Nav = () => {
  return (
    <Router>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link text-muted " to="/">
              <strong>Posts</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted " to="/photos">
              <strong>Photos</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="/connections">
              <strong>Connections</strong>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/connections" element={<Connections />}></Route>
      </Routes>
    </Router>
  );
};
