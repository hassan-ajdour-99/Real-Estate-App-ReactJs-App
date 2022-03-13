import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "../src/pages/Explore";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Profile";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";
import ForgotPassword from "../src/pages/ForgotPassword";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </Fragment>
  );
}
export default App;
