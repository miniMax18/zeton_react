import { renderToStaticMarkup } from 'react-dom/server';
const FromSVGToDataUri = (element) => {
    let svgString = encodeURIComponent(renderToStaticMarkup(element));
    let dataUri = `url("data:image/svg+xml,${svgString}") no-repeat center`;
    return dataUri;
  }

export default FromSVGToDataUri