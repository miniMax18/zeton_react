import { renderToStaticMarkup } from 'react-dom/server';
import { JSX } from 'react/jsx-runtime';

type UrlStringToBackgroundCssType = string;

const FromJSXElementToDataUri = (element: JSX.Element): UrlStringToBackgroundCssType => {
    let svgStringFromJSXElement: string = encodeURIComponent(renderToStaticMarkup(element));
    let dataStringUrl: string = `url("data:image/svg+xml,${svgStringFromJSXElement}") no-repeat center`;
    return dataStringUrl;
  }

export default FromJSXElementToDataUri

const FromSVGToDataUri2 = (element: JSX.Element) => {
  let svgString = encodeURIComponent(renderToStaticMarkup(element));
  let dataUri = `url("data:image/svg+xml,${svgString}") no-repeat center`;
  return dataUri;
}