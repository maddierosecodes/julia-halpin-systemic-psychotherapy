import TabButton from "../atoms/TabButton";
import { TabListProps } from "@/types/Tabs.types";

export default function TabList({
  tabs,
  currentIndex,
  onTabClick,
  containerRef,
  tabRefs,
}: TabListProps) {
  return (
    <div className="flex lg:flex" role="tablist" ref={containerRef}>
      {tabs.map((tab, index) => (
        <TabButton
          key={tab.id}
          ref={(el: HTMLDivElement | null) => {
            tabRefs.current[index] = el;
          }}
          label={tab.label}
          isActive={currentIndex === index}
          onClick={() => onTabClick(index)}
          tabId={tab.id}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
