import React from "react";

import { switchStyle } from "../Style/style";
import Form from "react-bootstrap/Form";
import CustomInput from "../Atom/Input";
import CustomButton from "../Atom/Button";

import { useUser } from "../Hooks/useUser";
import { imgSingUp, style1 } from "../Style/loginSingupStyle";
function SingUp() {
  const { handelRegister, setNewUser, newUser } = useUser();

  const handelChange = (e) => {
    e.target.name === "isAgency" && e.target.value === "on"
      ? setNewUser({ ...newUser, [e.target.name]: true })
      : setNewUser({ ...newUser, [e.target.name]: e.target.value });

    handelRegister(newUser);
  };

  return (
    <div>
      <section class="text-center">
        <div class="p-5 bg-image" style={imgSingUp}></div>
        <div class="card mx-4 mx-md-5 shadow-5-strong" style={style1}>
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <CustomInput
                          titelFieald="First name"
                          type="text"
                          placeholder="First name"
                          name="firstName"
                          handleChange={handelChange}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <CustomInput
                          titelFieald=" Last name"
                          type="text"
                          placeholder=" Last name"
                          name="lastName"
                          handleChange={handelChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <CustomInput
                      titelFieald="Username"
                      type="text"
                      placeholder="UserName"
                      name="username"
                      handleChange={handelChange}
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <CustomInput
                      titelFieald="Agency Name"
                      type="text"
                      placeholder="Agency Name"
                      name="agencyName"
                      handleChange={handelChange}
                    />
                  </div>{" "}
                  <div class="row">
                    <div class="form-outline col-md-6 mb-4">
                      <CustomInput
                        titelFieald="Email address"
                        type="email"
                        placeholder="Email address"
                        name="mail"
                        handleChange={handelChange}
                      />
                    </div>

                    <div class="form-outline col-md-6 mb-4">
                      <CustomInput
                        titelFieald="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        handleChange={handelChange}
                      />
                    </div>
                  </div>
                  <Form.Check
                    type="switch"
                    id="isAgency"
                    label="Agency"
                    style={switchStyle}
                    name="isAgency"
                    onClick={handelChange}
                  />
                  <CustomButton
                    type="submit"
                    title="Sign up"
                    handleClick={handelRegister}
                    variant="contained"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingUp;
