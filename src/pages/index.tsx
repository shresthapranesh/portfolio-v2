import * as React from "react";
import Image from "next/image"
import Layout from "../components/Layout";
import { useMediaQuery } from "../hooks";

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
      <div className="flex flex-col gap-4 sm:flex-row p-5 ">
          <MyImage />
        
          <div className="pl-4 sm:pl-24">
              <p className="text-sm">
                Hello, there <br />
                I am <span className="text-lg">Pranesh Shrestha</span>
              </p>
              <p className="text-sm">
                I am a full time Software Engineer.
                <br /> Welcome to my Portfolio Website.
              </p>
          </div>
      </div>
  );
}

export default Index;
