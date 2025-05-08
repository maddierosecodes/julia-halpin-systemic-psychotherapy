import {
  TextAtomProps,
  sizeStyles,
  smallSizeStyles,
  mediumSizeStyles,
  largeSizeStyles,
  colourStyles,
  smallColourStyles,
  mediumColourStyles,
  largeColourStyles,
  weightStyles,
  variantStyles,
  truncateStyles,
} from "../../types/TextAtom.types";

export const Title = ({
  children,
  size = "md",
  smSize,
  mdSize,
  lgSize,
  colour,
  smColour,
  mdColour,
  lgColour,
  weight = "medium",
  variant = "default",
  truncate = "none",
}: TextAtomProps) => {
  const baseStyles = "leading-tight font-primary";
  const sizeStyle = sizeStyles[size];
  const smSizeStyle = smSize ? smallSizeStyles[smSize] : "";
  const mdSizeStyle = mdSize ? mediumSizeStyles[mdSize] : "";
  const lgSizeStyle = lgSize ? largeSizeStyles[lgSize] : "";
  const colourStyle = colour ? colourStyles[colour] : "";
  const smColourStyle = smColour ? smallColourStyles[smColour] : "";
  const mdColourStyle = mdColour ? mediumColourStyles[mdColour] : "";
  const lgColourStyle = lgColour ? largeColourStyles[lgColour] : "";
  const weightStyle = weightStyles[weight];
  const variantStyle = variantStyles[variant];
  const truncateStyle = truncateStyles[truncate];

  const combinedStyles = [
    baseStyles,
    sizeStyle,
    smSizeStyle,
    mdSizeStyle,
    lgSizeStyle,
    variantStyle,
    colourStyle,
    smColourStyle,
    mdColourStyle,
    lgColourStyle,
    weightStyle,
    truncateStyle,
  ]
    .filter(Boolean)
    .join(" ");

  return <h1 className={combinedStyles}>{children}</h1>;
};
