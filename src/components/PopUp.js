import React, { useEffect, useState } from "react";
import "../css/Popup.css";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../constants/Constants";

export const PopUp = ({ text, closePopup, userId, type, role }) => {
  // const navigate = useNavigate();

  const [imageData, setImageData] = useState("");

  useEffect(() => {
// eslint-disable-next-line
    open()
  });

// eslint-disable-next-line
  const open = async () => {
    if (role === "User" && type === "cert") {
      document.getElementById("div").alt = "Not Applicable";
    } else {
   
          // Make an API request to get the image data in byte[] format
    axios.get(`${BASE_URL}/image/${userId}/${type}` , { responseType: 'arraybuffer' })
    .then(response => {
      // Assuming the API returns the image as binary data
      const imageBlob = new Blob([response.data], { type: 'image/png' }); // Adjust the type as needed
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageData(imageUrl);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
      // Handle error, e.g., show an error message
    });

    }

   
  };

  return (
    <div className="popup-container">
      <div className="popup-body" style={{ height: "80%" }}>
        <h1>{text}</h1>
        <img src={imageData} alt="API" id="div" height={"60%"} width={"450px"}/>
<br></br>
        <button onClick={closePopup} className="my-5" >Close X</button>
      </div>
    </div>
  );
};
