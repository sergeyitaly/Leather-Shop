
import { useLayoutEffect } from "react";
import { useController } from "react-scroll-parallax";


const ParallaxCache = () => {
    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
};

export default ParallaxCache;
