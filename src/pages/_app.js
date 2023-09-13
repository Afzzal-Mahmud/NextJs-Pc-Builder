import "@/styles/globals.css";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
