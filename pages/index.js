import React, { Component, useEffect } from "react";
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import {
  Blockquote
} from "@blueprintjs/core"
import styles from "../styles/index.module.css";

const MyImage = () => {
  return (
    <img
      src="/images/2.jpg"
      alt="mypic"
      height="500px"
      width="auto"
    />
  );
};

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch("/contacts")
    router.prefetch("/skills")
    router.prefetch("/resume")
    router.prefetch("/projects")
  })

  return (
    <Layout>
      <div className={styles.intro}>
        <div>
        <MyImage />
        </div>
        <div className={styles.introduction}>
          <Blockquote>
            <p>
              Hello, there <br />
              <span style={{ fontSize: "large" }}> I am </span>
              <span style={{ fontSize: "40px" }}> Pranesh Shrestha. </span>
            </p>
            <p>
              I am a full time Software Engineer.
              <br /> Welcome to my Portfolio Website.
            </p>
          </Blockquote>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
