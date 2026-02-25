import Link from "next/link";
import { cn } from "@/lib/cn";
interface Props {
  href: string;
  size?: "sm" | "md";
  variant?: "black" | "gray" | "disabled" | "primary";
  className?: string;
  children: React.ReactNode;
  underline?: boolean;
}
export default function NextLink({
  href,
  size = "sm",
  variant = "primary",
  className,
  children,
  underline = false,
}: Props) {
  const sizes = {
    sm: "text-base",
    md: "text-lg",
  };
  const variants = {
    black: "ds-text-primary",
    gray: "ds-text-secondary",
    primary: "ds-text-alt",
    disabled: "ds-text-disabled",
  };
  return (
    <Link
      href={href}
      className={cn(
        sizes[size],
        variants[variant],
        underline ? "underline hover:underline" : "hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
