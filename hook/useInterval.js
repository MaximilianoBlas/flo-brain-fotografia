import { useEffect, useRef } from "react";

// Custom hook by Dan Abramov
export const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    // console.log(`callback ${callback} y delay ${delay} y savedCallback ${savedCallback}`);

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
        // console.log(`primer useEffect savedcallback ${savedCallback}`);
    }, [callback]);

    // Set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
};
