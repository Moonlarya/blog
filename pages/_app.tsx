import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { useStore } from "./redux/store";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

interface IMyApp {
  Component: any;
  pageProps: any;
}

const MyApp: FC<IMyApp> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
