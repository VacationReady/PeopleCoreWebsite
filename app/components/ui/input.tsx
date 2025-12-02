"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-background text-base transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",
        filled: "border-transparent bg-muted hover:bg-muted/80 focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-input",
        ghost: "border-transparent hover:bg-muted focus-visible:bg-muted focus-visible:ring-1 focus-visible:ring-ring",
      },
      inputSize: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-4",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  error?: boolean
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, leftIcon: LeftIcon, rightIcon: RightIcon, error, errorMessage, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative">
          {LeftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <LeftIcon className="h-4 w-4" />
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, inputSize }),
              LeftIcon && "pl-10",
              RightIcon && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            {...props}
          />
          {RightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <RightIcon className="h-4 w-4" />
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p className="mt-1.5 text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }






