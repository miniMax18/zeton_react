import { renderToStaticMarkup } from 'react-dom/server';
import { JSX } from 'react/jsx-runtime';

type UrlStringToBackgroundCssType = string;

const ParserElementToDataUrlBackground = (element: JSX.Element): UrlStringToBackgroundCssType => {
    let svgStringFromJSXElementEncoded: string = encodeURIComponent(renderToStaticMarkup(element));
    let dataStringUrlDecorated: string = `url("data:image/svg+xml,${svgStringFromJSXElementEncoded}") no-repeat center`;
    return dataStringUrlDecorated
  }

export default ParserElementToDataUrlBackground