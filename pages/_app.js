import "../styles/globals.css";
import Header from "../src/Components/Header";
import { AuthProvider } from "../src/utils/context";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
