import { ImageLoader } from 'next/image';

export function normalizeUnslashUrl(src: string) {

    const unsplashBaseUrl = 'https://images.unsplash.com';
    
    if (src.slice(0, 4) === "http") {
        return new URL(src);
    } else {
        return new URL(`${unsplashBaseUrl}/${src[0] === "/" ? src.slice(1) : src}`);
    }
}


// A custon image loader that utilizes the normalizeUnsplashUrl function


export const unsplashLoader: ImageLoader = ({ src, width, quality }) => {
    const url = normalizeUnslashUrl(src);
    
    const params = url.searchParams;

    params.set("auto", params.getAll("auto").join(",") || "format");
    params.set("fit", params.get("fit") || "max");
    params.set("w", width.toString());

    if (quality) {
        params.set("q", quality.toString());
    }

    return url.href;
}