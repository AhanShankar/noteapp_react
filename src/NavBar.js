import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div id="navbar">
      <div id="banner">Take Notes</div>
      <div id="createbuttonsticky" ><Link to="/history">View History</Link></div>
    </div>
  );
};
export default NavBar;
