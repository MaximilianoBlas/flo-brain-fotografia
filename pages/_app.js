import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
const router = useRouter();

useEffect(() => {
    import("react-facebook-pixel")
        .then((ReactPixel) => {
            ReactPixel.init("XXXXXXXXXXXXXXXXXXXXX"); // facebookPixelId
            ReactPixel.pageView();

            router.events.on("routeChangeComplete", () => {
                ReactPixel.pageView();
            });
        });
}, [router.events]);

    return <Component {...pageProps} />;
}
