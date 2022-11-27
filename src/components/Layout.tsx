import * as React from 'react';
import Navigationbar from "./NavigationBar";
import Image from "next/image";
import Head from "next/head";
import { SocialButton } from "./SocialButton";

type PageProps = {
  children:React.ReactNode
}

const Page = (props:PageProps) => {
  return (
      <div className="flex flex-col items-center dark:bg-slate-800 dark:text-white w-full h-screen">
          <Head>
            <title>Pranesh Shrestha</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
        <Navigationbar />

        <div className="flex-grow overflow-auto">{props.children} </div>

        <div className="flex flex-row justify-center items-center">
                <h1>Links</h1>
                <SocialButton link="https://www.github.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/github--v1.png" />
                <SocialButton link="https://www.linkedin.com/in/praneshshrestha" img="https://img.icons8.com/color/32/000000/linkedin.png" />
                <SocialButton link="https://www.twitter.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/twitter-squared.png" />
                <SocialButton link="https://www.facebook.com/pranesh.shrestha" img="https://img.icons8.com/color/32/000000/facebook-new.png" />
                <SocialButton link="https://www.instagram.com/praneshshrestha13/" img="https://img.icons8.com/color/32/000000/instagram-new.png" />
        </div>
      </div>
  );
}

export default Page;