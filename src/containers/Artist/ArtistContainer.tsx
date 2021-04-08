import React, { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import Artist from "../../components/Artist";

const ArtistContainer = ({}) => {
  const artistRef = useRef<HTMLDivElement>(null);
  const saTriggerMargin = 500;

  const saFunc = useCallback(() => {
    if (artistRef.current && artistRef.current.children) {
      for (const element of artistRef.current.children as any) {
        if (!element.classList.contains("show")) {
          if (
            window.innerHeight >
            element.getBoundingClientRect().top + saTriggerMargin
          ) {
            element.classList.add("show");
          }
        }
      }
    }
  }, [artistRef]);

  useEffect(() => {
    window.addEventListener("load", saFunc);
    window.addEventListener("scroll", saFunc);
    return () => {
      window.removeEventListener("load", saFunc);
      window.removeEventListener("scroll", saFunc);
    };
  }, [saFunc]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Artist artistRef={artistRef} />
    </>
  );
};

export default observer(ArtistContainer);
