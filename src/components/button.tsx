import { cn } from "../utils/cn";
import { Variant } from "../utils/types";

type Props = {
  variant?: Variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", ...restProps }: Props) {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-md tracking-wide border text-sm font-medium shadow-md transition",
        variant === "primary"
          ? "bg-zinc-800 hover:bg-zinc-950 text-zinc-100 border-zinc-800"
          : null,
        variant === "secondary" ? "border-zinc-900 hover:bg-zinc-900/5" : null,
        variant === "ghost"
          ? "bg-salmon hover:bg-gray-300/30 shadow-none hover:shadow-none"
          : null
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
