import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NavIconButtonProps } from "@/types/Tabs.types";

export default function NavIconButton({
  direction,
  onClick,
  ariaLabel,
}: NavIconButtonProps) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={isLeft ? "nav-button-left" : "nav-button-right"}
      aria-label={ariaLabel}
    >
      {isLeft ? <BsChevronLeft size={24} /> : <BsChevronRight size={24} />}
    </button>
  );
}
