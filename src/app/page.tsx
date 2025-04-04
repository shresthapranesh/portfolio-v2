import React from 'react'
import Image from "next/image"

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

export default function Page(){
    return (
    <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi There.</h1>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">I am Pranesh Shrestha</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am software engineer at Meta. <br/> Welcome to my Portfolio Website</p>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <MyImage />
            </div>                
      </div>
    </section>
    )
}