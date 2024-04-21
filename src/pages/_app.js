import "@/styles/globals.css";
import ThemeProvider from "../../components/contextApi/ThemeContext";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </ThemeProvider>
  );
}
