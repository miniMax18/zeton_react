
const getImageUrl = (name: string, postfix: string, dir: string="src/images/icons"): string => {
    return new URL(`${dir}/${name}.${postfix}`, import.meta.url).href
};

export default getImageUrl;