import { cn } from "../utils/cn";
import { Variant } from "../utils/types";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
};

export function Button({ children, variant = "primary" }: Props) {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-full tracking-wider font-semibold shadow-md transition",
        "hover:shadow-xl",
        variant === "primary" ? "bg-orange-400 hover:bg-orange-600" : null,
        variant === "secondary" ? "bg-teal-400 hover:bg-teal-600" : null,
        variant === "ghost"
          ? "bg-salmon hover:bg-gray-300/30 shadow-none hover:shadow-none"
          : null
      )}
    >
      {children}
    </button>
  );
}
