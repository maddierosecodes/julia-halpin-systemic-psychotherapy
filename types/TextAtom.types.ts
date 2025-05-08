export type TextSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";

export type TextColour = "ink" | "rose" | "indigo" | "lavender" | "ivory";
export type TextWeight = "normal" | "medium" | "bold" | "semibold";
export type TextVariant = "default" | "dark-bg" | "light-bg";
export type TextTruncate = "none" | "2-lines" | "3-lines";

export interface TextAtomProps {
  children: React.ReactNode;
  size?: TextSize;
  smSize?: TextSize;
  mdSize?: TextSize;
  lgSize?: TextSize;
  colour?: TextColour;
  smColour?: TextColour;
  mdColour?: TextColour;
  lgColour?: TextColour;
  weight?: TextWeight;
  variant?: TextVariant;
  truncate?: TextTruncate;
}

export const sizeStyles: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
};

export const smallSizeStyles: Record<TextSize, string> = {
  sm: "sm:text-sm",
  md: "sm:text-base",
  lg: "sm:text-lg",
  xl: "sm:text-xl",
  "2xl": "sm:text-2xl",
  "3xl": "sm:text-3xl",
  "4xl": "sm:text-4xl",
  "5xl": "sm:text-5xl",
  "6xl": "sm:text-6xl",
  "7xl": "sm:text-7xl",
  "8xl": "sm:text-8xl",
};

export const mediumSizeStyles: Record<TextSize, string> = {
  sm: "md:text-sm",
  md: "md:text-base",
  lg: "md:text-lg",
  xl: "md:text-xl",
  "2xl": "md:text-2xl",
  "3xl": "md:text-3xl",
  "4xl": "md:text-4xl",
  "5xl": "md:text-5xl",
  "6xl": "md:text-6xl",
  "7xl": "md:text-7xl",
  "8xl": "md:text-8xl",
};

export const largeSizeStyles: Record<TextSize, string> = {
  sm: "lg:text-sm",
  md: "lg:text-base",
  lg: "lg:text-lg",
  xl: "lg:text-xl",
  "2xl": "lg:text-2xl",
  "3xl": "lg:text-3xl",
  "4xl": "lg:text-4xl",
  "5xl": "lg:text-5xl",
  "6xl": "lg:text-6xl",
  "7xl": "lg:text-7xl",
  "8xl": "lg:text-8xl",
};

export const colourStyles: Record<TextColour, string> = {
  ink: "text-ink-400",
  rose: "text-rose-500",
  indigo: "text-indigo-600",
  lavender: "text-lavender-800",
  ivory: "text-ivory-50",
};

export const smallColourStyles: Record<TextColour, string> = {
  ink: "sm:text-ink-400",
  rose: "sm:text-rose-500",
  indigo: "sm:text-indigo-600",
  lavender: "sm:text-lavender-800",
  ivory: "sm:text-ivory-50",
};

export const mediumColourStyles: Record<TextColour, string> = {
  ink: "md:text-ink-400",
  rose: "md:text-rose-500",
  indigo: "md:text-indigo-600",
  lavender: "md:text-lavender-800",
  ivory: "md:text-ivory-50",
};

export const largeColourStyles: Record<TextColour, string> = {
  ink: "lg:text-ink-400",
  rose: "lg:text-rose-500",
  indigo: "lg:text-indigo-600",
  lavender: "lg:text-lavender-800",
  ivory: "lg:text-ivory-50",
};

export const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  semibold: "font-semibold",
};

export const variantStyles: Record<TextVariant, string> = {
  default: "",
  "dark-bg": "text-ivory-50",
  "light-bg": "text-ink-400",
};

export const truncateStyles: Record<TextTruncate, string> = {
  none: "",
  "2-lines": "line-clamp-2",
  "3-lines": "line-clamp-3",
};
