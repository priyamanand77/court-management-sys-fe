import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

import "../css/SignUp.css";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [whoAreYou, setWhoAreYou] = useState("Who Are You ?");

  const [data, setData] = useState({});

  const goHome=()=>{
    navigate("/")
  }

  const changeWhoAreYou = (event, who) => {
    setWhoAreYou(who);

    setData({ ...data, role: who });

    var x = document.getElementById("myDIV");
    if (who === "Lawyer") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const submit = (event) => {
    console.log(data)
    event.preventDefault();
  };
  return (

 <MDBContainer
      fluid
      className="bg-dark"
      style={{ height: "100%", scrollbarColor: "gray" }}
    >
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-4">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                  alt="Sample photo"
                  className="rounded-start my-3"
                  fluid
                  style={{ height: "66%"}}
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <h3 className="mb-5 text-uppercase fw-bold">
                    Court-Management : Registratiion
                  </h3>
                  <MDBDropdown style={{ paddingBottom: "50px" }}>
                    <MDBDropdownToggle
                      tag="a"
                      className="btn outline-primary "
                      
            
                      style={{ textAlign: "center", outline: "all" }}
                    >
                      {whoAreYou}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        onClick={(event) => changeWhoAreYou(event, "User")}
                        value="User"
                        style={{ padding: "5px" }}
                      >
                        User
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        onClick={(event) => changeWhoAreYou(event, "Lawyer")}
                        value="Lawyer"
                        style={{ padding: "5px" }}
                      >
                        Lawyer
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        size="lg"
                        id="form1"
                        type="text"
                        onChange={(e) => {
                          setData({ ...data, firstName: e.target.value });
                        }}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        size="lg"
                        id="form2"
                        type="text"
                        onChange={(e) => {
                          setData({ ...data, lastName: e.target.value });
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email ID"
                    size="lg"
                    id="form6"
                    type="email"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      if (
                        !data.email.includes("@") &&
                        data.email.length !== 0
                      ) {
                        document.getElementById("emailMsg").style.display =
                          "block";
                      } else {
                        document.getElementById("emailMsg").style.display =
                          "none";
                      }
                    }}
                  />
                  <p
                    style={{
                      display: "none",
                      color: "red",
                      textSizeAdjust: "auto",
                    }}
                    id="emailMsg"
                  >
                    incorrect password
                  </p>

                  <MDBInput
                    type="date"
                    placeholder="Enter BirthDate"
                    name="birthdate"
                    wrapperClass="mb-4"
                    label="Date of birth"
                    size="lg"
                    onChange={(e) => {
                      setData({ ...data, dob: e.target.value });
                    }}
                  />

                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="Female"
                      label="Female"
                      inline
                      onClick={(e) => {
                        setData({ ...data, gender: e.target.value });
                      }}
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="Male"
                      label="Male"
                      inline
                      onClick={(e) => {
                        setData({ ...data, gender: e.target.value });
                      }}
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio3"
                      value="Other"
                      label="Other"
                      inline
                      onClick={(e) => {
                        setData({ ...data, gender: e.target.value });
                      }}
                    />
                  </div>
                  <p style={{ left: "5px", textAlign: "left" }}>
                    government id proff
                  </p>
                  <MDBInput
                    name="government id proff"
                    label=""
                    wrapperClass="mb-4"
                    size="lg"
                    type="file"
                    onChange={(e) => {
                      setData({ ...data, govtIdProff: e.target.files[0] });
                    }}
                  />

                  <div id="myDIV" style={{ display: "none" }}>
                    <p style={{ left: "5px", textAlign: "left" }}>
                      please give your law certificate
                    </p>
                    <MDBInput
                      wrapperClass="mb-4"
                      size="lg"
                      type="file"
                      name="certificate"
                      onChange={(e) => {
                        setData({ ...data, lawCertficate: e.target.files[0] });
                      }}
                    />
                  </div>

                  <MDBRow>
                    <MDBCol md="6"></MDBCol>

                    <MDBCol md="6"></MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Address"
                    size="lg"
                    id="form3"
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, address: e.target.value });
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Pincode"
                    size="lg"
                    id="form4"
                    type="number"
                    onChange={(e) => {
                      setData({ ...data, pincode: e.target.value });
                    }}
                    min={100000}
                    max={999999}
                  />
                      <MDBInput
                    wrapperClass="mb-4"
                    label="generate password"
                    size="lg"
                    id="password"
                    type="password"
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color="light" size="lg" onClick={goHome}>
                     Go To Home
                    </MDBBtn>
                    <MDBBtn
                      className="ms-2"
                      color="success"
                      size="lg"
                      onClick={submit}
                    >
                      Submit form
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

 
   
  );
}
