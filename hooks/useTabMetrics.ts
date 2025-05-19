import { useState, useEffect } from "react";

export function useTabMetrics(
  tabRefs: (HTMLDivElement | null)[],
  contentBox: HTMLDivElement | null,
  index: number
) {
  const [metrics, setMetrics] = useState({
    left: 0,
    width: 0,
    containerWidth: 0,
  });

  useEffect(() => {
    const measure = () => {
      const tab = tabRefs[index];
      if (tab && contentBox) {
        const tabLeft = tab.offsetLeft - contentBox.offsetLeft;
        const tabWidth = tab.offsetWidth;
        const boxWidth = contentBox.offsetWidth;
        setMetrics({
          left: tabLeft,
          width: tabWidth,
          containerWidth: boxWidth,
        });
      }
    };

    const observer = new ResizeObserver(measure);
    if (contentBox) observer.observe(contentBox);
    window.addEventListener("resize", measure);

    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [index, tabRefs, contentBox]);

  return metrics;
}
