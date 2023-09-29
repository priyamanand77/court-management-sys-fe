import React, { useState } from "react";

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
import IsLawyer from "./IsLawyer";

export default function SignUpPage() {
  const [whoAreYou, setWhoAreYou] = useState("Who Are You ?");
  const [isLawyer, setIslaywer] = useState(false);
  const changeWhoAreYou = (event, who) => {
    console.log(who);
    setWhoAreYou(who);
    if (who === "Lawyer") {
      console.log(who)
      var x = document.getElementById("myDIV");
   
        x.style.display = "block";
     
    }
  };

  return (
    <MDBContainer fluid className="bg-dark">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-4">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <MDBCardImage
                  src="https://cdn.standardmedia.co.ke/images/monday/czmzmfuf14sjop7lgzwr60d0d01b75817.jpg"
                  alt="Sample photo"
                  className="rounded-start my-3"
                  fluid
                  height={"100px"}
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
                      className="btn btn-primary outline"
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
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        size="lg"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email ID"
                    size="lg"
                    id="form6"
                    type="email"
                  />

                  <MDBInput
                    type="date"
                    placeholder="Enter BirthDate"
                    name="birthdate"
                    wrapperClass="mb-4"
                    label="Date of birth"
                    size="lg"
                  />

                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="option1"
                      label="Female"
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="option2"
                      label="Male"
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio3"
                      value="option3"
                      label="Other"
                      inline
                    />
                  </div>
                  <MDBInput
                    placeholder="Enter BirthDate"
                    name="government id proff"
                    label="government id proff"
                    wrapperClass="mb-4"
                    size="lg"
                    type="file"
                  />
                  <div id="myDIV">
                    <IsLawyer />
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
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Pincode"
                    size="lg"
                    id="form4"
                    type="text"
                  />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color="light" size="lg">
                      Reset all
                    </MDBBtn>
                    <MDBBtn className="ms-2" color="warning" size="lg">
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
