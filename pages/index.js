import React, { Component } from "react";
import Layout from "../components/Layout";
import { Document, Page } from "react-pdf";

const MyImage = () => {
  return (
    <img
      src="/images/2.jpg"
      alt="mypic"
      height="auto"
      width="500px"
    />
  );
};

class Index extends Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <Layout>
        <div className="intro">
          <div>
          <MyImage />
          </div>
          <div className="introduction">
            <p>
              Hello, there <br />
              <span style={{ fontSize: "large" }}> I am </span>
              <span style={{ fontSize: "40px" }}> Pranesh Shrestha. </span>
            </p>
            <p>
              I am currently Computer Engineering Student.
              <br /> Welcome to my Portfolio Website.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
