import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:scale-105 font-bold text-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl hover:scale-105",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:scale-105",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/90 hover:to-secondary font-semibold border border-secondary/20 shadow-md hover:shadow-lg hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        emergency: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 font-bold shadow-lg ring-2 ring-red-500/30 hover:ring-red-500/50 hover:scale-105 animate-pulse",
        premium: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 font-bold shadow-lg ring-2 ring-amber-500/30 hover:ring-amber-500/50 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
