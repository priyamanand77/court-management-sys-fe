import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'

export default function Home() {

  useEffect(()=>{
    document.title="Home"
  },[]);
  const navigate = useNavigate();
  const slideImages = [
    {
      url: require("../Image/a1.jpeg"),
      caption: "Slide 1",
    },
    {
        url: require("../Image/a2.jpeg"),
        caption: "Slide 2",
      },
  
  ];
  return (
    <div
      className="text-center"
      style={{
        overflowX: "hidden",
        height: "100vh",
        background: "rgb(116,115,135) ",

        backgroundColor:
          "linear-gradient(90deg, rgba(116,115,135,1) 0%, rgba(96,96,103,1) 13%, rgba(43,89,101,1) 41%, rgba(30,118,139,1) 84%, rgba(0,212,255,1) 96%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 100%)",
        borderRadius: "10px",
        fontWeight: "bold",
        color: "white",
        
      }}
    >
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: 420,
                  borderRadius: "2%",
                }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <h1 className="display-3" style={{ fontWeight: "bold" }}>
        Court Management System : Home
      </h1>
      <p style={{ backgroundColor: "", padding: 10, color: "yellow" }}>
        This Website will connect lawyer as well as client , via a portal <br />
        Developed by Priyam anand{" "}
      </p>

      <Button
        color="success"
        onClick={() => {
          navigate("/signUp");
        }}
      >
       Sign up
      </Button>

      <Button
  className="mx-3"
        color="success"
        onClick={() => {
          navigate("/signIn");
        }}
      >
       Sign In
      </Button>
    </div>
  );
}
