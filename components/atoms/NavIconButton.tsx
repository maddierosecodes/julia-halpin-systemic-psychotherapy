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
      className={`${
        isLeft ? "nav-button-left" : "nav-button-right"
      } hover:cursor-pointer`}
      aria-label={ariaLabel}
    >
      {isLeft ? <BsChevronLeft size={35} /> : <BsChevronRight size={35} />}
    </button>
  );
}
