import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Explore from "../src/pages/Explore";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Profile";
import Category from "../src/pages/Category";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";
import ForgotPassword from "../src/pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile" element={<PrivateRoute />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </Fragment>
  );
}
export default App;
