import * as React from "react";
import { useMediaQuery } from "../hooks";

const Card = (props:React.ComponentPropsWithRef<"div">&{title:string}) => (
  <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
      {props.title}
    </h2>
    {props.children}
  </div>
)

const Programming = () => (
      <Card title="Programming">
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
      <Card title="DevTool">
        <p>Git</p>
        <p>Confluence</p>
        <p>Jira</p>
        <p>Clearcase</p>
        <p>Bazel</p>
        <p>Jenkins</p>
      </Card>
);

const WebFramework = () => (
      <Card title="Web Frameworks">
        <p>React</p>
        <p>Redux</p>
        <p>Express.js</p>
        <p>Next.js</p>
        <p>Angular</p>
      </Card>
);

const WebAPI = () => (
  <Card title="Web API">
    <p>REST</p>
    <p>gRPC</p>
    <p>WebSocket</p>
    <p>HTTP</p>
  </Card>
);

const TestFramework = () => (
      <Card title="Testing">
        <p>Jest</p>
        <p>Junit</p>
        <p>Google Test</p>
        <p>Mocha</p>
      </Card>
);



const List = () => {
  return(
  <div className="flex flex-col flex-nowrap sm:flex-row sm:justify-center pt-3 gap-3">
        <Programming />
        <DevTool />  
        <WebFramework /> 
        <WebAPI />
        <TestFramework />
  </div>
  )
}

export default List;
