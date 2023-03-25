import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAgency } from "../Redux/Actions/actionAgency";
import {logOut} from "../Redux/Actions/actionAuth"
import CustomButton from "../Atom/Button";
import CustomModal from "../Atom/Modal";
function ProfilAgency() {
  const { id } = useParams();
const navigate =useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgency(id));
  });
  const oneAgency = useSelector((state) => state.ReducerAgency.agency);
  const [show, setShow] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleClosePhone = () => setShowPhone(false);
  const handleShowPhone = () => setShowPhone(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout =()=>{
    dispatch(logOut(navigate))
      
  }
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <Link to="/account">Home</Link>
                </li>

                <li class="breadcrumb-item active" aria-current="page">
                <Link to={`/agency/${oneAgency._id}`}>{oneAgency.agencyName}</Link>
                </li>
              </ol>
              <Link
                to="/"
                style={{ float: "right", marginTop: "-25px", color: "red" }}
                onClick={logout}
              >
                Log out
              </Link>
            </nav>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src={oneAgency.photo}
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 class="my-3">{oneAgency.agencyName}</h5>
                <p class="text-muted mb-1">
                  {oneAgency.firstName} {oneAgency.lastName}
                </p>
                <div class="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-primary">
                    Add new Annoucement
                  </button>
                  <button type="button" class="btn btn-outline-primary ms-1">
                    List of My Annoucement
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-4 mb-lg-0">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fas fa-globe fa-lg text-warning"></i>
                    <p class="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      class="fab fa-github fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      class="fab fa-twitter fa-lg"
                      style={{ color: "#55acee" }}
                    ></i>
                    <p class="mb-0">@mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      class="fab fa-instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    ></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      class="fab fa-facebook-f fa-lg"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      {oneAgency.firstName} {oneAgency.lastName}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{oneAgency.mail}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    {oneAgency.phone === 0 ? (
                      <CustomButton
                        type="butom"
                        title="Add your phone number"
                        variant="contained"
                        handleClick={handleShowPhone}
                      />
                    ) : (
                      <p class="text-muted mb-0">{oneAgency.phone}</p>
                    )}
                    <CustomModal
                      modalTitle="Your Phone number"
                      titelFieald="Phone number"
                      placeholder="Phone number"
                      name="phone"
                      variantClose="secondary"
                      titleClose="Close"
                      variantSave="primary"
                      titleSave="Save"
                      show={showPhone}
                      handleClose={handleClosePhone}
                      id={oneAgency._id}
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    {oneAgency.adress === "" ? (
                      <CustomButton
                        type="butom"
                        title="Add your Adress"
                        variant="contained"
                        handleClick={handleShow}
                      />
                    ) : (
                      <p class="text-muted mb-0">{oneAgency.adress}</p>
                    )}
                    <CustomModal
                      modalTitle="Your adress"
                      titelFieald="Adress"
                      placeholder="Adress"
                      name="adress"
                      variantClose="secondary"
                      titleClose="Close"
                      variantSave="primary"
                      titleSave="Save"
                      show={show}
                      handleClose={handleClose}
                      id={oneAgency._id}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p class="mb-1" style={{ fontsize: "77rem" }}>
                      Web Design
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Website Markup
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      One Page
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Mobile Template
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Backend API
                    </p>
                    <div
                      class="progress rounded mb-2"
                      style={{ height: "5px" }}
                    >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p class="mb-1" style={{ fontsize: "77rem" }}>
                      Web Design
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Website Markup
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      One Page
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Mobile Template
                    </p>
                    <div class="progress rounded" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="mt-4 mb-1" style={{ fontsize: "77rem" }}>
                      Backend API
                    </p>
                    <div
                      class="progress rounded mb-2"
                      style={{ height: "5px" }}
                    >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilAgency;
