import React, { Component, useEffect } from "react";
import {useRouter} from "next/router";
import Image from "next/image"
import Layout from "../components/Layout";
import {
  Blockquote, Button
} from "@blueprintjs/core"
import styles from "../styles/index.module.css";

const MyImage = () => {
  return (
    <div style={{display:'block'}}>
    <Image
      src="/images/2.jpg"
      alt="mypic"
      height={500}
      width={665}
    />
    </div>
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
          <Blockquote>
            <p>
              Hello, there <br />
              I am
              <span className={styles.headingXl}> Pranesh Shrestha. </span>
            </p>
            <p>
              I am a full time Software Engineer.
              <br /> Welcome to my Portfolio Website.
            </p>
            <Button intent="primary" icon="document" text="Resume" onClick={handleClick} />
          </Blockquote>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
