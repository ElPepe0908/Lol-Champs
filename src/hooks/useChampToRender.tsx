import { useEffect, useRef, useState } from "react";

export const useChampToRender = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, observerOptions);

    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }
  }, []);

  return {
    isIntersecting,
    elementRef,
  };
};
