import React from 'react'
import '../styles/globals.css'
import Head from "next/head";
import Navigationbar from '../components/NavigationBar';
import { SocialButton } from '../components/SocialButton/SocialButton';

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
    <html>
        <Head>
          <title>Pranesh Shrestha</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Pranesh Shrestha | Portfolio</title>
        </Head>
        
        <body className="container h-screen m-auto dark:bg-zinc-950 dark:text-white flex flex-col">
            <Navigationbar />
            <main className="flex-grow overflow-auto w-full dark:bg-zinc-900 rounded">
                {children}
            </main>
            <footer className="border-t-[1px] border-zinc-300/10 w-full flex flex-row justify-center items-center">
                <h1>Links</h1>
                <SocialButton link="https://www.github.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/github--v1.png" />
                <SocialButton link="https://www.linkedin.com/in/praneshshrestha" img="https://img.icons8.com/color/32/000000/linkedin.png" />
                <SocialButton link="https://www.twitter.com/shresthapranesh" img="https://img.icons8.com/color/32/000000/twitter-squared.png" />
                <SocialButton link="https://www.facebook.com/pranesh.shrestha" img="https://img.icons8.com/color/32/000000/facebook-new.png" />
                <SocialButton link="https://www.instagram.com/praneshshrestha13/" img="https://img.icons8.com/color/32/000000/instagram-new.png" />
            </footer>
        </body>
    </html>
    )
}
