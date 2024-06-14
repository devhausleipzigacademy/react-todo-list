import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx takes multiple arguments that are all string
// and produces one result string
// twMerge looks for duplicate Tailwind classes (e.g. you set bg-color 2 times)
// and takes the last one you applied and delete the ones before
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
