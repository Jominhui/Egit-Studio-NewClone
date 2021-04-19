import React, { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import Studio from "../../components/Studio";

const StudioContainer = ({}) => {
  const studioRef = useRef<HTMLDivElement>(null);
  const start = 500;
  const end = 1550;

  const saFunc = useCallback(() => {
    if (document.body.getBoundingClientRect().top !== 0) {
      if (studioRef.current && studioRef.current.children) {
        for (const element of studioRef.current.children as any) {
          if (element.classList.contains("show")) {
            if (
              window.innerHeight >
              element.getBoundingClientRect().top - end
            ) {
              element.classList.remove("show");
            }
          }
          if (!element.classList.contains("show")) {
            if (
              window.innerHeight >
              element.getBoundingClientRect().top + start
            ) {
              element.classList.add("show");
            }
          }
          if (element.classList.contains("show")) {
            if (
              window.innerHeight >
              element.getBoundingClientRect().top + end
            ) {
              element.classList.remove("show");
            }
          }
        }
      }
    }
  }, [studioRef]);

  useEffect(() => {
    window.addEventListener("load", saFunc);
    window.addEventListener("scroll", saFunc);
    return () => {
      window.removeEventListener("load", saFunc);
      window.removeEventListener("scroll", saFunc);
    };
  }, [saFunc]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Studio studioRef={studioRef} />
    </>
  );
};

export default observer(StudioContainer);
