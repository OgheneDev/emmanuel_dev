import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  asChild,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0d] disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default:
      "bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 shadow-lg shadow-cyan-500/20",
    outline:
      "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-white",
    ghost: "text-gray-300 hover:bg-gray-800/60 hover:text-cyan-400",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
  };

  const classes =
    `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(childElement, {
      ...props,
      className: `${childElement.props.className || ""} ${classes}`.trim(),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
