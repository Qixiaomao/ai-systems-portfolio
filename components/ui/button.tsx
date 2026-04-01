import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:pointer-events-none disabled:opacity-50 sm:px-5 sm:py-3",
  {
    variants: {
      variant: {
        default: "bg-amber-400 text-black hover:bg-amber-300",
        outline: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />;
});
Button.displayName = "Button";

function ButtonLink({ href, children, variant = "default" }: { href: string; children: React.ReactNode; variant?: VariantProps<typeof buttonVariants>["variant"] }) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), "min-h-12 px-5 py-3 text-[15px] sm:text-sm")}>
      {children}
    </Link>
  );
}

export { Button, ButtonLink, buttonVariants };
