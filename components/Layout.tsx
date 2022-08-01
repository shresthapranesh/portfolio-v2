import Navigationbar from "./NavigationBar";
import Image from "next/image";
import Head from "next/head";
import * as React from 'react';
import styled from '@emotion/styled'

import {Stack} from './Stack/Stack'
import { SocialButton } from "./SocialButton";

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
                <SocialButton link="https://www.github.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/github--v1.png" />
                <SocialButton link="https://www.linkedin.com/in/praneshshrestha" img="https://img.icons8.com/color/32/000000/linkedin.png" />
                <SocialButton link="https://www.twitter.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/twitter-squared.png" />
                <SocialButton link="https://www.facebook.com/pranesh.shrestha" img="https://img.icons8.com/color/32/000000/facebook-new.png" />
                <SocialButton link="https://www.instagram.com/praneshshrestha13/" img="https://img.icons8.com/color/32/000000/instagram-new.png" />
        </Stack>
      </Layout>
  );
}

export default Page;
