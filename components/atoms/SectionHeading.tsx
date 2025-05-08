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

interface SectionHeadingProps extends TextAtomProps {
  isInteractive?: boolean;
}

export const SectionHeading = ({
  children,
  size = "lg",
  smSize,
  mdSize,
  lgSize,
  colour,
  smColour,
  mdColour,
  lgColour,
  weight = "bold",
  variant = "default",
  isInteractive = false,
}: SectionHeadingProps) => {
  const baseStyles = "leading-normal font-main";
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
  const interactiveStyles = isInteractive
    ? "transition-all duration-200 hover:text-lavender-400 hover:cursor-pointer"
    : "";

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
    interactiveStyles,
  ]
    .filter(Boolean)
    .join(" ");

  return <h3 className={combinedStyles}>{children}</h3>;
};
