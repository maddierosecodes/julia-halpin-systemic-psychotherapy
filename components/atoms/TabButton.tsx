import { TabButtonProps } from "@/types/Tabs.types";

export default function TabButton({
  label,
  isActive,
  onClick,
  tabId,
  ref,
  isFirst = false,
}: TabButtonProps) {
  return (
    <div
      ref={ref}
      className={`group ${
        isActive ? "tab-button-active" : "tab-button-inactive"
      } ${isFirst ? "border-l-3" : ""}`}
    >
      <button
        onClick={onClick}
        className="tab-label"
        role="tab"
        aria-selected={isActive}
        aria-controls={`panel-${tabId}`}
      >
        {label}
      </button>
    </div>
  );
}
