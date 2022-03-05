import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "../src/pages/Explore";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Offers";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";
import ForgotPassword from "../src/pages/ForgotPassworsd";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Forgot-password" elemnt={<ForgotPassword />} />
        </Routes>
        {/* <h2> Navbar </h2> */}
      </Router>
    </div>
  );
}

export default App;
