import React, { Component } from "react";

const Programming = () => (
  <div className="listA">
    <div className="container">
      <ul>
        <span>Programming</span>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>Javascript</li>
        <li>Matlab</li>
        <li>Verilog</li>
        <li>SQL</li>
      </ul>
    </div>
  </div>
);

const MLFramework = () => (
  <div className="listA">
    <div className="container">
      <ul>
        <span> ML Framework</span>
        <li>Tensorflow</li>
        <li>Pytorch</li>
        <li>Scikit</li>
        <li>OpenCV</li>
        <li>Scipy</li>
      </ul>
    </div>
  </div>
);

const WebFramework = () => (
  <div className="listA">
    <div className="container">
      <ul>
        <span> Web Framework</span>
        <li>ExpressJs</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>Flask</li>
        <li>Socket.io</li>
      </ul>
    </div>
  </div>
);

const TestFramework = () => (
  <div className="listA">
    <div className="container">
      <ul>
        <span> Test Framework</span>
        <li>Jest</li>
        <li>Junit</li>
        <li>Cucumber</li>
      </ul>
    </div>
  </div>
);

const Participation = () => (
  <div className="listA">
    <div className="container">
      <ul>
        <span>Participation</span>
        <li> IEEE</li>
        <li>Google Student Developer Club</li>
        <li>HackwesTX</li>
        <li>Youth Mappers</li>
        <li>Nepalese Student Associate at TTU</li>
      </ul>
    </div>
  </div>
);

const List = () => (
  <div className="skill-container">
    <Programming />
    <MLFramework />
    <WebFramework />
    <TestFramework />
    <Participation />
  </div>
);

export default List;
