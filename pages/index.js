import React, { Component } from "react";
import Layout from "../components/Layout";
import { Document, Page } from "react-pdf";

const MyImage = () => {
  return (
    <img
      src="/images/a.jpg"
      alt="mypic"
      height="auto"
      width="100px"
      style={{ borderRadius: "50%" }}
    />
  );
};

class Index extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    const state = this.state.clicked == false ? true : false;
    console.log(state);
    this.setState({ clicked: state });
  };

  render() {
    return (
      <Layout>
        <div className="intro">
          <div className="introduction">
            <MyImage className="myImage" />
            <p>
              Hello, there <br />
              <span style={{ fontSize: "large" }}> I am </span>
              <span style={{ fontSize: "40px" }}> Pranesh Shrestha. </span>
            </p>
            <p>
              I am currently Computer Engineering Student.
              <br /> Welcome to my Portfolio Website.
            </p>
            <div className="resume">
              <button className="resumebtn" onClick={this.handleClick}>
                Resume
              </button>
            </div>
          </div>
        </div>
        {this.state.clicked ? (
          <div className="popup" onClick={this.handleClick}>
            <div style={{ marginLeft: "15vw" }}>
              <Document file="/files/Resume.pdf">
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
        ) : null}
      </Layout>
    );
  }
}

export default Index;
