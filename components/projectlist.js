import * as React from "react";
import {
  Tab, Tabs
} from "@blueprintjs/core"
import style from "../styles/projects.module.css"

const Project1 = () => (
  <div className="project1" id="description">
    <h4>
      Project Member <span> &nbsp;@&nbsp;</span> Computer Engineering Project
      Lab
    </h4>
    <h5> January 2020 - May 2020 </h5>
    <div className="projectDescription">
      <ul>
        <li>
          Generate Mel Spectrogram using librosa library and Extracted its
          features.
        </li>
        <li>
          Researched on concepts related to Machine Learning: algorithms, loss
          functions and optimization techniques.
        </li>
        <li>
          Designed, trained and evaluated Neural Network Model based on
          Tensorflow Framework with available Dataset.
        </li>
        <li>
          Deployed web application for the neural network endpoint using FLASK
          API.
        </li>
      </ul>
    </div>
  </div>
);

const Project2 = () => (
  <div className="project2" id="description">
    <h4>
      Project Member <span> &nbsp;@&nbsp;</span> Software Engineering I
    </h4>
    <h5> January 2020 - May 2020 </h5>
    <div className="projectDescription">
      <ul>
        <li>
          Practised Objected-oreinted architecural Software Design using Unified
          Modeling Language Diagram.
        </li>
        <li>
          Programmed using Modular Programming methologies for easy large scale
          integration and error handling.
        </li>
        <li>
          Implemented MongoDB database for data storage and JavaFX for UI
          design.
        </li>
      </ul>
    </div>
  </div>
);

const Project3 = () => (
  <div className="project3" id="description">
    <h4>
      Project Leader <span> &nbsp;@&nbsp;</span> Machine Learning
    </h4>
    <h5> March 2020 - April 2020 </h5>
    <div className="projectDescription">
      <ul>
        <li>
          Analyzed static image using Bradley's Adaptive Thresholding algorithm
          to detect worm and create dataset to train the classifier model
        </li>
        <li>
          Trained a classNameifier model using the custom made dataset with
          hyperparameter adjustment and regularization
        </li>
        <li>
          Recorded the accuracy of the model with different combination of
          training data and optimization techinique
        </li>
        <li>
          Implemented the model in live feed to automate worm tracking to create
          data log in laboratory
        </li>
      </ul>
    </div>
  </div>
);

const Project4 = () => (
  <div className="project4" id="description">
    <h4>
      Project Member <span> &nbsp;@&nbsp;</span> Project Lab 2
    </h4>
    <h5> August 2019 - December 2019 </h5>
    <div className="projectDescription">
      <ul>
        <li>
          Designed and analyzed a system for detecting anomaly is AC powerline
          for effortless diagnostic by pinpointing the fault location
        </li>
        <li>
          Programmed a micro-controller for high speed signal sampling with Low
          Signal to Noise ratio
        </li>
        <li>
          Resolved issues related to high speed sampling, low latency Data
          transmission through USB and collaborated in coding and debugging for
          cloud Integration with MySQL.
        </li>
      </ul>
    </div>
  </div>
);

const Project5 = () => (
  <div className="project5" id="description">
    <h4>
      Project Leader <span> &nbsp;@&nbsp;</span> Project Lab 1
    </h4>
    <h5> January 2019 - May 2019 </h5>
    <div className="projectDescription">
      <ul>
        <li>
          Spearheaded designing and building autonomous rover to deliver mail at
          designated location.
        </li>
        <li>
          Enhanced multi-threaded task handler with state-machine build on
          Verilog.
        </li>
        <li>
          Built and diagnosed amplifier and current limiting circuit based on
          operational Amplifier.
        </li>
      </ul>
    </div>
  </div>
);

const ProjectList = () => {
  return (
    <div className={style.ProjectList}>
      <Tabs
        key={"vertical"}
        vertical={true}
        className={style.listb}
      >
        <Tab id="p1" className={style.tab} title="Project1" panel={<Project1/>}/>
        <Tab id="p2" className={style.tab} title="Project2" panel={<Project2/>}/>
        <Tab id="p3" className={style.tab} title="Project3" panel={<Project3/>}/>
        <Tab id="p4" className={style.tab} title="Project4" panel={<Project4/>}/>
        <Tab id="p5" className={style.tab} title="Project5" panel={<Project5/>}/>
        <Tabs.Expander />
      </Tabs>
    </div>
  );
}

export default ProjectList;
