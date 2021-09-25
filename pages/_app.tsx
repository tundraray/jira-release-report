import "../styles/globals.css";
import type { AppProps } from "next/app";

function JiraApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}
export default JiraApp;
