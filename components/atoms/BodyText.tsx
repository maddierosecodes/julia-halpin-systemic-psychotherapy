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
} from "../../types/TextAtom.types";

export const BodyText = ({
  children,
  size = "md",
  smSize,
  mdSize,
  lgSize,
  colour,
  smColour,
  mdColour,
  lgColour,
  weight = "normal",
  variant = "default",
}: TextAtomProps) => {
  const baseStyles = "leading-relaxed font-main";
  const sizeStyle = sizeStyles[size];
  const smSizeStyle = smSize ? smallSizeStyles[smSize] : "";
  const mdSizeStyle = mdSize ? mediumSizeStyles[mdSize] : "";
  const lgSizeStyle = lgSize ? largeSizeStyles[lgSize] : "";
  const colourStyle = colour ? colourStyles[colour] : "ink";
  const smColourStyle = smColour ? smallColourStyles[smColour] : "";
  const mdColourStyle = mdColour ? mediumColourStyles[mdColour] : "";
  const lgColourStyle = lgColour ? largeColourStyles[lgColour] : "";
  const weightStyle = weightStyles[weight];
  const variantStyle = variantStyles[variant];

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
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={combinedStyles}>{children}</p>;
};
