import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { useStore } from "../redux/store";

const theme = {
  colors: {
    lavender: "#DADFF7",
    gunmetal: "#232C33",
    grey: "#B5B2C2",
    steelTeal: "#5A7D7C",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontWeigths: {
    ligth: 300,
    medium: 500,
    bold: 700,
  },
  font: "'Montserrat', sans-serif",
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>My blog</title>
          <link href="reset.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
