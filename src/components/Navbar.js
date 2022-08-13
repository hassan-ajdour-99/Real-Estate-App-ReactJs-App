import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../../src/assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../../src/assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../../src/assets/svg/exploreIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExploreIcon
              fill={pathMathRoute("/") ? "#2c2c" : "#111"}
              width="36px"
              height="36px"
              onClick={() => navigate("/")}
            />
            <p style={{ color: pathMathRoute("/") ? "#2c2c" : "#111" }}>
              Explore
            </p>
          </li>
          <li className="navbarListItem">
            <OfferIcon
              fill={pathMathRoute("/offers") ? "#2c2c" : "#111"}
              width="36px"
              height="36px"
              onClick={() => navigate("/offers")}
            />
            <p style={{ color: pathMathRoute("/offers") ? "#2c2c" : "#111" }}>
              Offers
            </p>
          </li>
          <li className="navbarListItem">
            <PersonOutlineIcon
              fill={pathMathRoute("/profile") ? "#2c2c" : "#111"}
              width="36px"
              height="36px"
              onClick={() => navigate("/profile")}
            />
            <p style={{ color: pathMathRoute("/profile") ? "#2c2c" : "#111" }}>
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
