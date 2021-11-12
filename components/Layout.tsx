import Navigationbar from "./Navbar";
import Head from "next/head";
import * as React from 'react';
import { Divider, H1 } from "@blueprintjs/core";

const Layout = (props:JSX.ElementChildrenAttribute) => (
  <div>
    <Head>
      <title>Pranesh Shrestha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
    </Head>

    <Navigationbar />
    <div>{props.children}</div>

    <footer>
      <div className="footer">
          <H1>Links</H1>
          <Divider />
          <a href="https://www.github.com/shresthapranesh">
            <img src="https://img.icons8.com/color/32/000000/github--v1.png" />
          </a>
        
          <a href="https://www.linkedin.com/in/praneshshrestha">
            <img src="https://img.icons8.com/color/32/000000/linkedin.png" />
          </a>
        
          <a href="https://www.twitter.com/shresthapranesh">
            <img src="https://img.icons8.com/color/32/000000/twitter-squared.png" />
          </a>
        
          <a href="https://www.facebook.com/pranesh.shrestha">
            <img src="https://img.icons8.com/color/32/000000/facebook-new.png" />
          </a>
        
          <a href="https://www.instagram.com/praneshshrestha13/">
            <img src="https://img.icons8.com/color/32/000000/instagram-new.png" />
          </a>
      </div>
    </footer>
  </div>
);

export default Layout;
