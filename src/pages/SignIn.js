import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibility from "../assets/svg/visibilityIcon.svg";
import "../../src/index.css";
import OAuth from "../components/OAuth";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const auth = getAuth();

      const useCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (useCredentials.user) {
        toast.success("User Logged successfully");
        navigate("/profile");
      } else {
        console.log("password or email is not correct");
      }
    } catch (error) {
      toast.error("bad user credentials");
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Welcome Back </p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="email"
            id="email"
            value={email}
            onChange={onChangeHandler}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChangeHandler}
            />
            <img
              src={visibility}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* GOOGLE AUTH */}
        {/* Google Authentication Button */}
        <OAuth />

        <Link to="/sign-up" className="registerLink">
          Sign-up Instead
        </Link>
      </div>
    </>
  );
}

export default SignIn;
