import Layout from "../components/Layout";
import {Document,Page} from "react-pdf/dist/umd/entry.webpack"

const Resume = () => {
  return (
    <Layout>
      <div className="resume">
        <Document
          file="/files/Resume.pdf"
        >
          <Page pageNumber="1" />

        </Document>
          
      </div>
    </Layout>
  );
};

export default Resume;
