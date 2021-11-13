import * as React from "react";
import {Card} from '@blueprintjs/core'
import styles from "../styles/skills.module.css";

const Programming = () => (
      <ul>
        <span>Programming</span>
        <li>TypeScript</li>
        <li>Python</li>
        <li>C/C++</li>
        <li>HTML</li>
        <li>Java</li>
        <li>C#</li>
        <li>SQL</li>
      </ul>
);

const MLFramework = () => (
      <ul>
        <span>Professional Toolset</span>
        <li>Git</li>
        <li>Confluence</li>
        <li>Jira</li>
        <li>Clearcase</li>
        <li>Bazel</li>
        <li>Jenkins</li>
      </ul>
);

const WebFramework = () => (
      <ul>
        <span> Web Framework</span>
        <li>ExpressJs</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>Flask</li>
        <li>Socket.io</li>
      </ul>
);

const TestFramework = () => (
      <ul>
        <span> Test Framework</span>
        <li>Jest</li>
        <li>Junit</li>
        <li>Google Test</li>
      </ul>
);

const Participation = () => (
      <ul>
        <span>Participation</span>
        <li> IEEE</li>
        <li>Google Student Developer Club</li>
        <li>HackwesTX</li>
        <li>Youth Mappers</li>
        <li>Nepalese Student Associate at TTU</li>
      </ul>
);

const List = () => (
  <div className={styles.container}>
    <Card elevation={2} interactive>
      <Programming />
    </Card>
    <Card elevation={2} interactive>
      <MLFramework />
    </Card>
    <Card elevation={2} interactive>
      <WebFramework />
    </Card>
    <Card elevation={2} interactive>
      <TestFramework />
    </Card>
    <Card elevation={2} interactive>
      <Participation />
    </Card>
  </div>
);

export default List;
