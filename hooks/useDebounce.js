import { useEffect, useRef } from "react";

export const useDebounce = (callback, delay) => {
  const timeoutIdRef = useRef(null);

  // cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    //(...args) => ['term']
    // if the user triggers again before delay ends → cancel old timer
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // set new timer
    timeoutIdRef.current = setTimeout(() => {
      callback(...args); // run the actual function after `delay`
    }, delay);
  };

  return debouncedCallback; // return the debounced version of callback (this wrapper function will be used with the search term in the component that imports this hook)
};
