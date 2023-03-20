import React from "react";
import { imgSingUp, style1 } from "../Style/loginSingupStyle";

import { useUser } from "./../Hooks/useUser";
function LogIn() {
  const { loginUser, setLoginUser, handelSumbit } = useUser();

  const handelChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    handelSumbit(loginUser);
  };

  return (
    <section class="text-center">
      <div class="p-5 bg-image" style={imgSingUp}></div>
      <div class="card mx-4 mx-md-5 shadow-5-strong" style={style1}>
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">Log in now</h2>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  class="form-control"
                  onChange={handelChange}
                  name="mail"
                />
                <label class="form-label" for="form1Example1">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  class="form-control"
                  name="password"
                  onChange={handelChange}
                />
                <label class="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-block"
                onClick={handelSumbit}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
