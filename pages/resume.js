import Layout from "../components/Layout";
import {Document,Page} from "react-pdf"

const Resume = () => {
  // const width = window.innerWidth < 700 ? window.innerWidth : 400;

  return (
    <Layout>
      <div className="resume">
        <Document
          file="../public/files/Resume.pdf"
        >

        </Document>
          
      </div>
    </Layout>
  );
};

export default Resume;
