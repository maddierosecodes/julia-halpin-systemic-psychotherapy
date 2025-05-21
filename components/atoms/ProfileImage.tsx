import Image from "next/image";
import { BLUR_DATA_URL } from "../utils/imageUtils";

interface ProfileImageProps {
  src: string;
  alt: string;
  shape?: "circle" | "square" | "rounded" | "tall";
  width?: number;
  height?: number;
  containerClassName?: string;
  priority?: boolean;
  border?: boolean;
}

export const ProfileImage = ({
  src,
  alt,
  shape = "square",
  width = 576,
  height = 576,
  containerClassName = "",
  priority = false,
  border = false,
}: ProfileImageProps) => {
  const shapeClasses = {
    circle: "rounded-full",
    square: "",
    rounded: "rounded-lg",
    tall: "aspect-[75%] rounded-lg",
  };

  return (
    <figure
      className={`relative overflow-hidden ${
        shapeClasses[shape]
      } ${containerClassName} ${border ? "border-3 border-gold" : ""}`}
      style={{ width: "100%", height: "100%" }}
      role="img"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
        quality={80}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </figure>
  );
};
