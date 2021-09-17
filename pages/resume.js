import Layout from "../components/Layout";
import { Document, Page } from "react-pdf";

const Resume = () => {
  // const width = window.innerWidth < 700 ? window.innerWidth : 400;

  return (
    <Layout>
      <div className="resume">
        <div>
          <Document file="/files/Resume.pdf">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
