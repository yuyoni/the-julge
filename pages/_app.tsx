import { ToastProvider } from "@/contexts/ToastContext";
import { globalStyles } from "@/styles/global";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
}
