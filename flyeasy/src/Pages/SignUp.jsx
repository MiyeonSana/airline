import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Provider/Context";
import Alert from "../Components/Alert";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { Store, setStore } = useContext(Context);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const state = useRef({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const firstname = useRef(null);

  useEffect(() => {
    firstname.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(Store));
  }, [Store]);

  const closeAlert = () => {
    setalert(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let registeredUser = false;
    Store.find((store) => {
      if (store.email === state.current.email) {
        return (registeredUser = true);
      }
    });

    if (registeredUser == true) {
      setalert(true);
      setalertMessage("user already registered go to Login");
    } else if (
      !state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname &&
      state.current.password
    ) {
      setalert(true);
      setalertMessage("include @ in email");
    } else if (
      !state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname
    ) {
      setalert(true);
      setalertMessage("include @ in email");
    } else if (
      state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname &&
      state.current.password.length < 8
    ) {
      setalert(true);
      setalertMessage("password length at least 8 characters");
    } else {
      let newStore = [...Store, { ...state.current }];
      setStore(newStore);
      localStorage.setItem("users", JSON.stringify(newStore));
      setalert(true);
      navigate("/login");
      setalertMessage("Registered Succesfully");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
    }
  };

  return (
    <DefaultLayout>
      <main className="row justify-content-center px-2">
        <div className="col-sm-5 mt-5">
          <img src="../airplane-flight.webp" alt="" className="planeImg" />
        </div>
        <div className="col-sm-5 d-flex mt-3  ">
          {/* alertMessage  */}

          <form
            action=""
            className={` shadow-lg  form-control m-auto p-3`}
            style={{ width: "300px" }}
            onSubmit={handleSubmit}
          >
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            {/* First NAme  */}
            <div className="ms-4">
              <label htmlFor="firstname">First Name</label> <br />
              <input
                ref={firstname}
                required
                type="text"
                id="firstname"
                className="form-control"
                onChange={(e) => (state.current.firstname = e.target.value)}
              />
            </div>
            <br />
            {/* LastName  */}
            <div className="ms-4">
              <label htmlFor="lastname">Last Name</label> <br />
              <input
                required
                type="text"
                id="lastname"
                className="form-control"
                onChange={(e) => (state.current.lastname = e.target.value)}
              />
            </div>
            <br />
            {/* Email  */}
            <div className="ms-4">
              <label htmlFor="email">Email</label> <br />
              <input
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
              <input
                required
                type="password"
                id="password"
                className="form-control"
                onChange={(e) => (state.current.password = e.target.value)}
              />
            </div>{" "}
            <br />
            <div className="text-center">
              <button type="submit" className="p-2 rounded registerbtn">
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default Signup;
