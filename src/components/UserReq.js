import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { PopUp } from "./PopUp";
import axios from "axios";
import BASE_URL from "../constants/Constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserReq({ user }) {
  const navigate = useNavigate();
  const[colorBG , setClorBG]=useState("white")
  
  useEffect(() => {
    document.title = "get-req";
    if(user.status==="REJECTED")
    {
      setClorBG("#ffc6c4")
    }else if(user.status==="PENDING")
    {
      setClorBG("#FFE5B4")
    }
    else if(user.status==="APPROVED")
    {
      setClorBG("#D9FEE5")
    }
  },[user.status]);


  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
  const [type, setType] = useState("");


  const actionClick = (e) => {


    axios.post(`${BASE_URL}/status/action/${e.target.id}/${e.target.value}`).then(
      (response)=>{console.log(response)
      if(response.data.data==="Approved")
      {
        setClorBG("#D9FEE5");
        user.status="APPROVED";
       
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        user.actionTime = date+' '+time;
      }else{
      
   

        setClorBG("#ffc6c4");

         today = new Date();
         date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
         time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        user.actionTime = date + " " + time;
        user.status = "REJECTED";
      
    }
      toast.success('Update Complete', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        navigate("/get-all")
        
      },
      (error)=>{console.log(error)}
    );

//setReq(JSON.parse(t));

  };

  return (
    <tbody>
      <tr id="table-row" style={{ backgroundColor: colorBG}}>
        <td>{user.id}</td>
        <td>{user.userId}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.address}</td>
        <td>{user.pincode}</td>
        <td>{user.dob}</td>
        <td>
          <Button
            onClick={() => {
              setOpen(true);
              setText("Government Id Proff");
              setType("gid");
            }}
          >
            View
          </Button>
        </td>
        <td>
          <Button
            id="law"
            color="info"
            onClick={() => {
              setOpen(true);

              setText("Law certificate");
              setType("cert");
            }}
          >
            View
          </Button>
        </td>

        <td>{user.status}</td>
        <td>{user.actionTime}</td>
        <td>{user.actionBy}</td>
        <td>
          <Button
            color="success"
            value="approve"
            id={user.id}
            onClick={actionClick}
          >
            Approve
          </Button>
        </td>
        <td>
          <Button
            color="danger"
            value="reject"
            id={user.id}
          onClick={(e)=>{actionClick(e)}}
          >
            Reject
          </Button>
          {open ? (
            <PopUp
              text={text}
              closePopup={() => setOpen(false)}
              userId={user.id}
              type={type}
              role={user.role}
            />
          ) : null}
        </td>
      </tr>
    </tbody>
  );
}
