import { RefObject, useEffect, useState } from "react";

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options?: Options,
): IntersectionObserverEntry | undefined {
  const { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false } = options || {};
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}
