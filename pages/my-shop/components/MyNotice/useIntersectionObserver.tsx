import { RefObject, useEffect, useState } from "react";

const useIntersectionObserver = (
  targetRef: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
  },
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isIntersectiong = entry?.isIntersecting;

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setEntry(entry);
  };
  useEffect(() => {
    const target = targetRef?.current;

    if (isIntersectiong || !target) return;
    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [
    targetRef,
    options.root,
    options.rootMargin,
    options.threshold,
    isIntersectiong,
  ]);

  return entry;
};

export default useIntersectionObserver;
