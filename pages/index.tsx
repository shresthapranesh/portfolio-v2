import * as React from "react";
import Image from "next/image"
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import {Button} from 'antd'
import { Typography } from "antd";
const {Title, Paragraph, Text} = Typography

const MyImage = () => {
  return (
    <Image
      src="/images/2.jpg"
      alt="mypic"
      height={500}
      width={665}
    />
  );
};

const Index = () => {
  const handleClick = async () => {
    await fetch('/api/getResume',{
      method: "GET",
    }).then(response => response.blob()).then( blob => {
      const url = URL.createObjectURL(blob)
      window.open(url)
    }).catch((e) => console.log(e))
  }

  return (
    <Layout>
      <div className={styles.container}>
        <MyImage />
        
        <div className={styles.inner_container}>
          <Typography>
            <Paragraph>
              Hello, there <br />
              I am
              <Title level={2}>Pranesh Shrestha</Title>
            </Paragraph>
            <Paragraph>
              I am a full time Software Engineer.
              <br /> Welcome to my Portfolio Website.
            </Paragraph>
            <Button type="primary" onClick={handleClick}>Resume</Button>
          </Typography>
        </div>
        
      </div>
    </Layout>
  );
}

export default Index;
