import DefaultLayout from "../Layouts/DefaultLayouts";
import { useRef, useState, useEffect, useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { Context } from "../../Provider/Context";
import Alert from "../Components/Alert";
const Login = () => {
  const { Store } = useContext(Context);

  const state = useRef({ email: "", password: "" });
  const email = useRef(null);

  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    email.current.focus();
  });

  const handleLogin = (e) => {
    e.preventDefault();
    let isregisteredUser = false;
    Store.find((store) => {
      if (
        store.email === state.current.email &&
        store.password === state.current.password
      ) {
        isregisteredUser = true;
      }
    });

    if (isregisteredUser == true) {
      setalert(true);
      setalertMessage("Login successful");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
    } else {
      setalert(true);
      setalertMessage("Acc not registered go to sign up");
    }

    if (!state.current.email.includes("@")) {
      setalert(true);
      setalertMessage("Include @ in email");
    } else if (state.current.password.length < 8) {
      setalert(true);
      setalertMessage("Password length is less than 8");
    }
  };
  const closeAlert = () => {
    setalert(false);
  };

  return (
    <DefaultLayout>
      <main className="row justify-content-center  px-2">
        <div className="col-sm-5 my-3 ">
          <img src="../airplane-flight.webp" alt="" className="planeImg" />
        </div>
        <div className="col-sm-5 d-flex mt-3 ">
          <form
            action=""
            className={` shadow-lg form-control  m-auto p-3`}
            style={{ width: "300px" }}
            onSubmit={handleLogin}
          >
            {/* alertmessage  */}
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            {/* Email  */}
            <div className="ms-4">
              <label htmlFor="email">Email</label> <br />
              <input
                ref={email}
                required
                type="text"
                id="email"
                className="form-control"
                onChange={(e) => (state.current.email = e.target.value)}
              />
            </div>{" "}
            <br />
            {/* password  */}
            <div className="ms-4">
              <label htmlFor="password">Password</label> <br />
              <div className="d-flex align-items-center gap-2">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control"
                  onChange={(e) => (state.current.password = e.target.value)}
                />
                <div>
                  <button
                    onClick={() => setshowPassword(!showPassword)}
                    className="border-0 bg-transparent fs-3"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                </div>
              </div>
            </div>{" "}
            <br />
            <div className="text-center">
              <button type="submit" className="p-2 rounded registerbtn">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default Login;
