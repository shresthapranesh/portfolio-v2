import * as React from "react";
import Image from "next/image"
import {Stack} from '../components'
import Layout from "../components/Layout";
import { useMediaQuery } from "../hooks";
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
  const smallDevice = useMediaQuery("(max-width: 468px)")
  const handleClick = () => {
    fetch('/api/getResume',{
      method: "GET",
    }).then(response => response.blob()).then( blob => {
      const url = URL.createObjectURL(blob)
      window.open(url)
    }).catch((e) => console.log(e))
  }

  return (
    <Layout>
      <Stack justifyContent="center" flexGrow={1} sx={{paddingTop:20}} direction={smallDevice?"column":"row"}>
        <MyImage />
        
        <Stack justifyContent='center' alignContent="center" sx={{paddingLeft:100}}>
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
          </Typography>
        </Stack>
      </Stack>
    </Layout>
  );
}

export default Index;
