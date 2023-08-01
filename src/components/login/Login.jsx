import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import imageLogin from "../../assets/img/image-login.png";
import "../../assets/styles/login.css";
import swal from "sweetalert";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import emailIcon from "../../assets/img/icon-email.png";
import lockIcon from "../../assets/img/icon-lock.png";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import { AxiosInstance } from "../../apis/api";
import { useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
  const [show, setShow] = useState(false);

  const submit = async (e) => {
    // const { setAuth } = useAuth();
    e.preventDefault();

    AxiosInstance.post(
      "/auth/login",
      {
        email: email,
        password: password,
      }
      // { withCredentials: true }
    )
      .then((res) => {
        swal({
          text: "Selamat Datang Admin!",
          icon: "success",
        });
        console.log("data login", res);
        Cookies.set("token", res.data.token);
        Cookies.set("data", res.data.data);
        setNavigate(true);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Email atau Password salah");
        } else if (err.response?.status === 401) {
          setErrMsg("Email atau Password salah");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      });
  };

  if (navigate) {
    return <Navigate to="/users" />;
  }

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex h-screen ">
      <img src={imageLogin} alt="login" className="left-content-login" />
      <Link to="/" className="absolute top-10 left-10 bg-grayScale-10 p-5 rounded-xl">Landing</Link>

      <div className="right-content-login bg-grey">
        <div className="w-[400px] flex flex-col justify-center items-center mb-7">
          <img src={logo} alt="logo.png" className="w-[100px] h-[100px] mb-5" />
          <h1 className="font-bold text-3xl mb-1">Masuk</h1>
          <p className=" text-grayScale-60 font-normal text-base">
            Silahkan masuk Untuk melanjutkan
          </p>
        </div>
        <form onSubmit={submit} className="w-[400px] flex flex-col gap-5">
          <div className="login-form-input ">
            <img src={emailIcon} alt="email.icon" className="w-5 h-5 mr-2" />
            <input
              placeholder="name.example@gmail.com"
              type="email"
              className="w-[100%]"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="login-form-input">
            <img src={lockIcon} alt="email.icon" className="w-5 h-5 mr-2" />
            <input
              placeholder="password"
              type={show ? "text" : "password"}
              className="w-[100%]"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <span onClick={handleShow} className="p-4">
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          {errMsg && (
            <p className="error-submit ">
              {errMsg}
            </p>
          )}

          <div className="flex justify-center ">
            <button
              type="submit"
              className=" align-center text-center text-sm w-[152px]  bg-primary-50 text-grayScale-10 h-11 py-[10px] px-5 mt-8 rounded"
            >
              Masuk Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
