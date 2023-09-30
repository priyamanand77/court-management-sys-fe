import React, { useEffect, useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import "../css/SignUp.css";

export default function SignInPage() {

useEffect(()=>{

  document.title="Sign In";

},[]);

  const navigate = useNavigate();
  const [whoAreYou, setWhoAreYou] = useState("Who Are You ?");

  const [data, setData] = useState({});

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

  const goHome=()=>{
    navigate("/")


  }

  const submit = (event) => {
    console.log(data)
    event.preventDefault();
  };
  return (
    <MDBContainer
  
      fluid
      className="bg-dark stopScroll"
   
      overflow="hidden"
      style={{ height: "50%", scrollbarColor: "gray" ,overflow:"hidden"}}
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
                  style={{ height: "50%" }}
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <h3 className="mb-5 text-uppercase fw-bold">
                    Court-Management : Sign-In
                  </h3>
    
                  <MDBInput
                    type="text"
                    placeholder="Enter username/Email"
                    name="username"
                    wrapperClass="mb-4"
                    label="username/email"
                    size="lg"
                    onChange={(e) => {
                      setData({ ...data, username: e.target.value });
                    }}
                  />

                  <MDBInput
                    name="password"
                    label="password"
                    wrapperClass="mb-4"
                    size="lg"
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
                      Sign In
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
