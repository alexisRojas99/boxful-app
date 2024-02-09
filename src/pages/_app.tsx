import "@/styles/globals.css";
import { queryClient } from "@/config/queryClient";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithlayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithlayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        {getLayout(<Layout>{<Component {...pageProps} />}</Layout>)}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
