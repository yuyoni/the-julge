import { ToastProvider } from "@/contexts/ToastContext";
import { globalStyles } from "@/styles/global";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      retryDelay: 3000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ToastProvider>
    </>
  );
}
