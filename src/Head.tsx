import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ZetonFaviconBlue from './images/icons/zeton-favicon-blue.png';
import HelmetDispatcher from "react-helmet-async/lib/Dispatcher";

const Head = (): JSX.Element => (
  
  <Helmet>
    <link rel="icon" href={ZetonFaviconBlue} />
    <meta name="description" content="Application Zeton" />
    <link rel="apple-touch-icon" href={ZetonFaviconBlue} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href={`"https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"`}
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
