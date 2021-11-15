import * as React from "react";
import {Card,List, Typography, Divider} from 'antd';
import style from "../styles/projects.module.css"

const Project1 = () => (
  <>
    <List
      size="small"
      header={
        <><h4>
        Project Engineer <span> &nbsp;@&nbsp;</span> Holland Quest
        Lab
      </h4>
      <h5> August 2020 - November 2020 </h5></>
      }
      dataSource={[
        'Developed a game application that generates three-letter code based on response for the questionnaires \
          related to six sections of holland code (https://en.wikipedia.org/wiki/Holland_Codes).', 
        'Developed containerized and scalable NodeJS backend server that communicates with front-end Unity \
          application using RESTful API’s and Stores the user response in MySQL Database',     
        'Created User account handling APIs for secure login, account reset and JWT based authentication.',
        'Designed SQL Schema with modern Data Modeling practices and implemented unit test with Jest Framework.',
        'Deployed the multiple instances of server in GCP for handling concurrent connection.',
        'Presented weekly work update through presentations which included all necessary budget expenditure and \
          required equipment for the completion of project.',
      ]}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

const Project2 = () => (
  <>
    <List
      size="small"
      header={
        <><h4>
        Project Member <span> &nbsp;@&nbsp;</span> Software Engineering I
      </h4>
      <h5> January 2020 - May 2020 </h5></>
      }
      dataSource={[
        
        'Practised Objected-oreinted architecural Software Design using Unified \
        Modeling Language Diagram.',

        'Programmed using Modular Programming methologies for easy large scale \
        integration and error handling.',

        'Implemented MongoDB database for data storage and JavaFX for UI design.'
      ]}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

const Project3 = () => (
  <>
    <List
      size="small"
      header={
        <><h4>
        Project Leader <span> &nbsp;@&nbsp;</span> Machine Learning
      </h4>
      <h5> March 2020 - April 2020 </h5></>
      }
      dataSource={[
        'Analyzed static image using Bradley\'s Adaptive Thresholding algorithm \
        to detect worm and create dataset to train the classifier model',
        'Trained a classNameifier model using the custom made dataset with \
        hyperparameter adjustment and regularization',
        'Recorded the accuracy of the model with different combination of \
        training data and optimization techinique',
        'Implemented the model in live feed to automate worm tracking to create \
        data log in laboratory'
      ]}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

const Project4 = () => (
  <>
    <List
      size="small"
      header={
        <><h4>
        Project Member <span> &nbsp;@&nbsp;</span> Project Lab 2
      </h4>
      <h5> August 2019 - December 2019 </h5></>
      }
      dataSource={[
        'Designed and analyzed a system for detecting anomaly is AC powerline \
        for effortless diagnostic by pinpointing the fault location',
        'Programmed a micro-controller for high speed signal sampling with Low \
        Signal to Noise ratio',
        'Resolved issues related to high speed sampling, low latency Data \
        transmission through USB and collaborated in coding and debugging for \
        cloud Integration with MySQL.'
      ]}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

const Project5 = () => (
  <>
    <List
      size="small"
      header={
        <><h4>
          Project Leader <span> &nbsp;@&nbsp;</span> Project Lab 1
        </h4><h5> January 2019 - May 2019 </h5></>
      }
      dataSource={[
        'Spearheaded designing and building autonomous rover to deliver mail at designated location.',
        'Enhanced multi-threaded task handler with state-machine build on Verilog',
        'Built and diagnosed amplifier and current limiting circuit based on operational Amplifier.'
      ]}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

const ProjectList = () => {
  return (
    <div className={style.container}>
      <Card bordered={false}>
        <Project1 />
      </Card>
      <Card bordered={false}>
        <Project2 />
      </Card>
      <Card bordered={false}>
        <Project3 />
      </Card>
      <Card bordered={false}>
        <Project4 />
      </Card>
      <Card bordered={false}>
        <Project5 />
      </Card>
    </div>
  );
}

export default ProjectList;
