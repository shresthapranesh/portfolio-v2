import 'antd/dist/antd.css';
import type {AppProps} from 'next/app'
import * as React from 'react'
import '../styles/globals.css'

export default function MyApp({Component,pageProps}:AppProps) {
    React.useEffect(() => {
        if("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
             navigator.serviceWorker.register("js/sw.js").then(
                function (registration) {
                  console.log("Service Worker registration successful with scope: ", registration.scope);
                },
                function (err) {
                  console.log("Service Worker registration failed: ", err);
                }
              );
            });
          }
    },[])
    return <Component {...pageProps} />
}