import { useEffect, useRef, useState } from "react";
import ImageSlider from "@/components/ImageSlider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/styles/tailwind.css";
import "focus-visible";

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Set Load Delay
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      {/* Background Color */}
      <div className="flex flex-col justify-center bg-zinc-300 dark:bg-zinc-900">
        {/* Main Content Container */}
        <div className="flex w-screen justify-center">
          <div className="
              w-full
              md:max-w-5xl
             
              bg-zinc-300 
              p-2 
             
              dark:bg-neutral-800
              
              ">
            <main>
              {/* <QueryClientProvider client={queryClient}> */}

              <Header />
              <Component previousPathname={previousPathname} {...pageProps} />
              <Footer />

              {/* <ReactQueryDevtools />
                </QueryClientProvider> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
