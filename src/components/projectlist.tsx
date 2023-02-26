import * as React from "react";

const Card = (props:React.ComponentPropsWithRef<"div">) => (
  <div className="w-[90%] sm:w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    {props.children}
  </div>
)

type ListProps = {
  items: string[],
  header: React.ReactNode,
  renderItem: (item:string) => React.ReactNode
}

const List = (props:ListProps) => {
  const {
    items,
    header,
    renderItem
  } = props
  return (
    <div className="p-2">
      <div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"> {header}</div>
     
      <ul className="space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400">
        {items.map(item => renderItem(item))}
      </ul>
    </div>
  )
}


const Project1 = () => (
  <>
    <List
      header={
        <>
      <h4>
        Project Engineer <span> &nbsp;@&nbsp;</span> Holland Quest
        Lab
      </h4>
      <h5> August 2020 - November 2020 </h5></>
      }
      items={[
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
        <li key={item}>
          <p>{item}</p>
        </li>
      )}
    />
  </>
);

const Project2 = () => (
  <>
    <List
      header={
        <><h4>
        Project Member <span> &nbsp;@&nbsp;</span> Software Engineering I
      </h4>
      <h5> January 2020 - May 2020 </h5></>
      }
      items={[
        
        'Practised Objected-oreinted architecural Software Design using Unified \
        Modeling Language Diagram.',

        'Programmed using Modular Programming methologies for easy large scale \
        integration and error handling.',

        'Implemented MongoDB database for data storage and JavaFX for UI design.'
      ]}
      renderItem={item => (
        <li>
          <p>{item}</p>
        </li>
      )}
    />
  </>
);

const Project3 = () => (
  <>
    <List
      header={
        <><h4>
        Project Leader <span> &nbsp;@&nbsp;</span> Machine Learning
      </h4>
      <h5> March 2020 - April 2020 </h5></>
      }
      items={[
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
        <li>
          <p>{item}</p>
        </li>
      )}
    />
  </>
);

const Project4 = () => (
  <>
    <List
      header={
        <><h4>
        Project Member <span> &nbsp;@&nbsp;</span> Project Lab 2
      </h4>
      <h5> August 2019 - December 2019 </h5></>
      }
      items={[
        'Designed and analyzed a system for detecting anomaly is AC powerline \
        for effortless diagnostic by pinpointing the fault location',
        'Programmed a micro-controller for high speed signal sampling with Low \
        Signal to Noise ratio',
        'Resolved issues related to high speed sampling, low latency Data \
        transmission through USB and collaborated in coding and debugging for \
        cloud Integration with MySQL.'
      ]}
      renderItem={item => (
        <li>
          <p>{item}</p>
        </li>
      )}
    />
  </>
);

const Project5 = () => (
  <>
    <List
      header={
        <><h4>
          Project Leader <span> &nbsp;@&nbsp;</span> Project Lab 1
        </h4><h5> January 2019 - May 2019 </h5></>
      }
      items={[
        'Spearheaded designing and building autonomous rover to deliver mail at designated location.',
        'Enhanced multi-threaded task handler with state-machine build on Verilog',
        'Built and diagnosed amplifier and current limiting circuit based on operational Amplifier.'
      ]}
      renderItem={item => (
        <li>
          <p>{item}</p>
        </li>
      )}
    />
  </>
);

const ProjectList = () => {
  return (
    <div className="flex flex-col w-full pt-3 items-center">
      <Card>
        <Project1 />
      </Card>
      <Card>
        <Project2 />
      </Card>
      <Card>
        <Project3 />
      </Card>
      <Card>
        <Project4 />
      </Card>
      <Card>
        <Project5 />
      </Card>
    </div>
  );
}

export default ProjectList;
