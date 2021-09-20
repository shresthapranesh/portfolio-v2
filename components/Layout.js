import Navigationbar from "./Navbar";
import Head from "next/head";
import React from 'react';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>Pranesh Shrestha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      <script async type="text/javascript" src="./js/scripts.js"></script>
      <script async type="text/javascript" src="./js/helper.js"></script>
    </Head>

    <Navigationbar />
    <div>{props.children}</div>

    <footer id="footer">
      <div className="social">
        <ul className="social-list">
          <li>
            <a href="https://www.github.com/shresthapranesh">
              <img src="https://img.icons8.com/color/32/000000/github--v1.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/praneshshrestha">
              <img src="https://img.icons8.com/color/32/000000/linkedin.png" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/shresthapranesh">
              <img src="https://img.icons8.com/color/32/000000/twitter-squared.png" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/pranesh.shrestha">
              <img src="https://img.icons8.com/color/32/000000/facebook-new.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/praneshshrestha13">
              <img src="https://img.icons8.com/color/32/000000/instagram-new.png" />
            </a>
          </li>
        </ul>
      </div>

      <div className="copy">
        <p>Created By Pranesh Shrestha</p>
        <p>&copy; All Rights Reserved</p>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
