import { ReactNode, Ref, MutableRefObject, RefObject } from "react";

// === Core Tab Types ===

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export type TabDirection = "left" | "right";

// === Atom: TabButton ===

export interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  tabId: string;
  ref?: Ref<HTMLDivElement>;
  isFirst?: boolean;
}

// === Atom: NavIconButton ===

export interface NavIconButtonProps {
  direction: TabDirection;
  onClick: () => void;
  ariaLabel: string;
}

// === Molecule: TabList ===

export interface TabListProps {
  tabs: Pick<TabItem, "id" | "label">[];
  currentIndex: number;
  onTabClick: (index: number) => void;
  containerRef: RefObject<HTMLDivElement | null>;
  tabRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

// === Molecule: TabBorder ===

export interface TabBorderProps {
  left: number;
  width: number;
  containerWidth: number;
}

// === Molecule: TabDisplay ===

export interface TabDisplayProps {
  tabs: TabItem[];
  defaultTabIndex?: number;
}
