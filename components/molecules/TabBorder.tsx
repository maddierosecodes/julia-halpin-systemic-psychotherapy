import { TabBorderProps } from "@/types/Tabs.types";

export default function TabBorder({
  left,
  width,
  containerWidth,
}: TabBorderProps) {
  return (
    <div className="tab-line-container">
      <div className="tab-line" style={{ width: `${left - 12}px` }} />
      <div
        className="tab-line"
        style={{
          left: `${left + width - 16}px`,
          width: `${containerWidth - (left + width - 10)}px`,
        }}
      />
    </div>
  );
}
