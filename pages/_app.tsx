import 'antd/dist/antd.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import type {AppProps} from 'next/app'
import '../styles/globals.css'

export default function MyApp({Component,pageProps}:AppProps) {
    return <Component {...pageProps} />
}