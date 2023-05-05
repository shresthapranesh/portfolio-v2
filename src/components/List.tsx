import * as React from "react";

const Card = (props:React.ComponentPropsWithRef<"div">&{title:string}) => (
  <div className="max-w-lg min-w-[240px] p-6 border border-zinc-200 rounded-lg shadow-md dark:bg-zinc-950 dark:border-zinc-700 dark:hover:border-zinc-400 dark:text-zinc-300">
    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-zinc-400">
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
        <p>Java</p>
        <p>Rust</p>
        <p>SQL</p>
      </Card>
);

const DevTool = () => (
      <Card title="DevTool">
        <p>Git</p>
        <p>Confluence</p>
        <p>Jira</p>
        <p>Cargo</p>
        <p>Bazel</p>
        <p>Jenkins</p>
      </Card>
);

const WebFramework = () => (
      <Card title="Library & Frameworks">
        <p>React</p>
        <p>Express.js</p>
        <p>Next.js</p>
        <p>Webpack</p>
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
        <p>Cypress E2E</p>
      </Card>
);



const List = () => {
  return(
  <div className="flex flex-col p-3 gap-3 w-full justify-center sm:justify-items-center sm:flex-row">
        <Programming />
        <DevTool />  
        <WebFramework /> 
        <WebAPI />
        <TestFramework />
  </div>
  )
}

export default List;
