import {
  TextAtomProps,
  sizeStyles,
  colourStyles,
  weightStyles,
  variantStyles,
} from "../../types/TextAtom.types";

export const Subtitle = ({
  children,
  size = "md",
  lgSize,
  colour,
  weight = "normal",
  variant = "default",
}: TextAtomProps) => {
  const baseStyles = "leading-normal font-secondary";
  const sizeStyle = sizeStyles[size];
  const lgSizeStyle = lgSize ? `lg:${sizeStyles[lgSize]}` : "";
  const colourStyle = colour ? colourStyles[colour] : "lavender";
  const weightStyle = weightStyles[weight];
  const variantStyle = variantStyles[variant];

  return (
    <h2
      className={`${baseStyles} ${sizeStyle} ${lgSizeStyle} ${colourStyle} ${weightStyle} ${variantStyle}`}
    >
      {children}
    </h2>
  );
};
