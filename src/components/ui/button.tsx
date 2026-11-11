import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      default:
        "bg-navy-midnight text-white shadow-sm hover:bg-navy-secondary active:scale-[0.98]",
      destructive:
        "bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98]",
      outline:
        "border border-slate-200 bg-white text-navy-midnight shadow-xs hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]",
      secondary:
        "bg-slate-100 text-navy-midnight shadow-xs hover:bg-slate-200 active:scale-[0.98]",
      ghost:
        "text-navy-midnight hover:bg-slate-100 hover:text-coral-rose",
      link:
        "text-coral-bright underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-12 rounded-2xl px-8 text-base",
      icon: "h-10 w-10 p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };
