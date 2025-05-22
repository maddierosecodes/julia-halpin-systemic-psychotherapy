"use client";

import { useRef, useReducer, useEffect, TouchEvent } from "react";
import { useSearchParams } from "next/navigation";
import TabList from "./TabList";
import TabBorder from "./TabBorder";
import NavIconButton from "../atoms/NavIconButton";
import { TabDisplayProps } from "@/types/Tabs.types";
import { tabReducer } from "@/reducers/tabReducer";
import { useTabMetrics } from "@/hooks/useTabMetrics";

export default function TabDisplay({
  tabs,
  defaultTabIndex = 0,
}: TabDisplayProps) {
  const searchParams = useSearchParams();
  const [{ currentIndex }, dispatch] = useReducer(tabReducer, {
    currentIndex: defaultTabIndex,
  });

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentBoxRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number>(0);

  const { left, width, containerWidth } = useTabMetrics(
    tabRefs.current,
    contentBoxRef.current,
    currentIndex
  );

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Require a minimum swipe distance to trigger navigation
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < tabs.length - 1) {
        dispatch({ type: "NEXT", total: tabs.length });
      } else if (diffX < 0 && currentIndex > 0) {
        dispatch({ type: "PREV", total: tabs.length });
      }
    }
  };

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      const tabIndex = tabs.findIndex((tab) => tab.id === service);
      if (tabIndex !== -1) {
        dispatch({ type: "GO_TO", index: tabIndex });
      }
    }
  }, [searchParams, tabs]);

  const handleTabClick = (index: number) => {
    dispatch({ type: "GO_TO", index });
  };

  const handlePrevious = () => {
    dispatch({ type: "PREV", total: tabs.length });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT", total: tabs.length });
  };

  return (
    <div
      id="services"
      className="relative mt-5 lg:mt-0 w-full bg-lavender-900/20 border-2 border-lavender-900 rounded-lg mx-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <div className="hidden md:flex justify-center w-full">
          <TabList
            tabs={tabs}
            currentIndex={currentIndex}
            onTabClick={handleTabClick}
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
            tabRefs={tabRefs}
          />
        </div>
        {/* Mobile Title Display */}
        <div className="block md:hidden px-4 py-3 text-center">
          <h2 className="text-2xl font-medium text-lavender-900">
            {tabs[currentIndex].label}
          </h2>
          <div className="text-sm text-lavender-900 mt-1">
            Swipe to view more services
          </div>
        </div>
      </div>

      <div
        ref={contentBoxRef}
        className="tab-content-box border-t-3 border-t-gold-500 md:border-t-0"
        role="tabpanel"
        id={`panel-${tabs[currentIndex].id}`}
        aria-labelledby={`tab-${tabs[currentIndex].id}`}
      >
        {/* Dynamic border - visible from md up */}
        <div className="hidden md:block">
          <TabBorder
            left={left}
            width={width}
            containerWidth={containerWidth}
          />
        </div>
        {tabs[currentIndex].content}
      </div>

      {/* Navigation buttons - visible from md up */}
      <div className="hidden md:block">
        <NavIconButton
          direction="left"
          onClick={handlePrevious}
          ariaLabel="Previous tab"
        />
        <NavIconButton
          direction="right"
          onClick={handleNext}
          ariaLabel="Next tab"
        />
      </div>
    </div>
  );
}
