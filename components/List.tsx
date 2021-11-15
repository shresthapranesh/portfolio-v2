import * as React from "react";
import {Card, Row, Col} from 'antd'
import styles from "../styles/skills.module.css";

const Programming = () => (
      <Card title="Programming" bordered={false} style={{width:300}} >
        <p>TypeScript</p>
        <p>Python</p>
        <p>C/C++</p>
        <p>HTML</p>
        <p>Java</p>
        <p>C#</p>
        <p>SQL</p>
      </Card>
);

const DevTool = () => (
      <Card title="DevTool" bordered={false} style={{width:300}}>
        <p>Git</p>
        <p>Confluence</p>
        <p>Jira</p>
        <p>Clearcase</p>
        <p>Bazel</p>
        <p>Jenkins</p>
      </Card>
);

const WebFramework = () => (
      <Card title="Web Frameworks" bordered={false} style={{width:300}}>
        <p>React</p>
        <p>Redux</p>
        <p>Express.js</p>
        <p>Next.js</p>
        <p>Angular</p>
      </Card>
);

const WebAPI = () => (
  <Card title="Web API" bordered={false} style={{width:300}}>
    <p>REST</p>
    <p>gRPC</p>
    <p>WebSocket</p>
    <p>HTTP</p>
  </Card>
);

const TestFramework = () => (
      <Card title="Testing" bordered={false} style={{width:300}}>
        <p>Jest</p>
        <p>Junit</p>
        <p>Google Test</p>
        <p>Mocha</p>
      </Card>
);



const List = () => (
  <div className={styles.container}>

        <Programming />
 

        <DevTool />
   

        <WebFramework />

 
        <WebAPI />

        <TestFramework />


  </div>
);

export default List;
