"use client";
import { useEffect, RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  condition: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (condition) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, condition]);
};

export default useClickOutside;
