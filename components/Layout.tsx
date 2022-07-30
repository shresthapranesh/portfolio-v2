import Navigationbar from "./NavigationBar";
import Image from "next/image";
import Head from "next/head";
import * as React from 'react';
import styled from '@emotion/styled'

import {Stack} from './Stack/Stack'

const Layout = styled('div')({
  display:'flex',
  height: '100vh',
  flexDirection:'column',
  alignItems:'center',
  maxWidth: '100%'
})

type PageProps = {
  children:React.ReactNode
}

const Page = (props:PageProps) => {
  return (
      <Layout>
          <Head>
            <title>Pranesh Shrestha</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
        <Navigationbar />

        <Stack sx={{overflow:'auto'}} flexGrow={1}>{props.children} </Stack>

        <Stack justifyContent="center" alignItems="center" direction="row">
                <h1>Links</h1>
                <a href="https://www.github.com/shresthapranesh">
                  <Image height={32} width={32} alt="Github" src="https://img.icons8.com/color/32/000000/github--v1.png" />
                </a>
              
                <a href="https://www.linkedin.com/in/praneshshrestha">
                  <Image height={32} width={32} alt="LinkedIn" src="https://img.icons8.com/color/32/000000/linkedin.png" />
                </a>
              
                <a href="https://www.twitter.com/shresthapranesh">
                  <Image height={32} width={32} alt="Twitter" src="https://img.icons8.com/color/32/000000/twitter-squared.png" />
                </a>
              
                <a href="https://www.facebook.com/pranesh.shrestha">
                  <Image height={32} width={32} alt="Facebook" src="https://img.icons8.com/color/32/000000/facebook-new.png" />
                </a>
              
                <a href="https://www.instagram.com/praneshshrestha13/">
                  <Image height={32} width={32} alt="Instagram" src="https://img.icons8.com/color/32/000000/instagram-new.png" />
                </a>
        </Stack>
      </Layout>
  );
}

export default Page;
