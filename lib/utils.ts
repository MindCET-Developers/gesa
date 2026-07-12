/** Join class names, dropping falsy values. A tiny clsx for this project. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
