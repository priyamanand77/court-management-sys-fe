import React, { useEffect, useState } from "react";
import UserReq from "./UserReq";
import { Table } from "reactstrap";
import axios from "axios";
import BASE_URL from "../constants/Constants";

export default function AllUserReq() {

useEffect(()=>{

  document.title = "All-User-Req"


},[]);

const getAllReqFromServer=()=>{

let url = `${BASE_URL}/sign-up/get-all-req`;
console.log(url)

  axios.get(`${BASE_URL}/sign-up/get-all-req`).then(
    (response)=>{console.log(response)},
    (error)=>{console.log(error)}
  );
};
useEffect(()=>{

  getAllReqFromServer()

},[]);


  const [data, setData] = useState([
    {
      id: 1,
      pincode: "123456",
      firstName: "priyam",
      lastName: "asdasd",
      gender: "Female",
      address: "asdasd",
      email: "asdasd@asdas",
      role: "Lawyer",
      govtIdProff: null,
      lawCertficate: null,
      dob: "2023-09-06T00:00:00.000+00:00",
      status: "PENDING",
      actionTime: "2023-09-29T22:16:43.487+00:00",
      actionBy: "ADMIN",
      userId: "asdasd",
    },
    {
      id: 2,
      pincode: "123456",
      firstName: "priyam",
      lastName: "asdasd",
      gender: "Female",
      address: "asdasd",
      email: "asdasd@asdas",
      role: "Lawyer",
      govtIdProff: null,
      lawCertficate: null,
      dob: "2023-09-06T00:00:00.000+00:00",
      status: "PENDING",
      actionTime: "2023-09-29T22:16:43.487+00:00",
      actionBy: "ADMIN",
      userId: "asdasd",

    },
  ]);

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ReqID</th>
            <th>Username</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>gender</th>
            <th>email</th>
            <th>role</th>
            <th>Address</th>
            <th>pincode</th>
            <th>dob</th>
            <th>govtIdProff</th>
            <th>lawCertficate</th>
            <th>status</th>
            <th>actionTime</th>
            <th>actionBy</th>
          </tr>
        </thead>

        {data.length > 0
          ? data.map((item) => <UserReq key={item.id} user={item} />)
          : "No User"}
      </Table>
    </div>
  );
}
