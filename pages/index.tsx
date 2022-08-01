import * as React from "react";
import Image from "next/image"
import {Stack} from '../components'
import Layout from "../components/Layout";
import { useMediaQuery } from "../hooks";
import {Button} from 'antd'
import { Typography } from "antd"
import {css} from '@emotion/react';
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

  return (
    <Layout>
      <Stack 
        direction={smallDevice?"column":"row"}
      >
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
