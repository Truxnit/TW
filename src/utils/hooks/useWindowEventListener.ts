import { useEffect } from "react";

export const useWindowEventListener = (
  type: string,
  listener: EventListenerOrEventListenerObject
): void => {
  useEffect(() => {
    window.addEventListener(type, listener);
    return () => {
      window.removeEventListener(type, listener);
    };
  }, [type, listener]);
};
