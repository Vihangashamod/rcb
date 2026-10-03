import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "primary"
    | "hero-primary"
    | "hero-outline"
    | "whatsapp"
    | "solid-primary";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  text?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      children,
      text,
      className,
      variant = "default",
      size = "default",
      icon,
      asChild = false,
      href,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    // Normalize variant class
    const variantClass =
      variant === "primary" || variant === "default"
        ? "ihb-primary"
        : variant === "hero-primary"
          ? "ihb-hero-primary"
          : variant === "hero-outline"
            ? "ihb-hero-outline"
            : variant === "whatsapp"
              ? "ihb-whatsapp"
              : "ihb-solid-primary";

    const sizeClass =
      size === "sm" ? "ihb-sm" : size === "lg" ? "ihb-lg" : "ihb-default";

    const defaultIcon = icon || <ArrowUpRight className="size-4 shrink-0" />;

    // Extract label text if children is a string or provided via text prop
    let labelContent: React.ReactNode = text;
    if (!labelContent && typeof children === "string") {
      labelContent = children;
    } else if (!labelContent && React.isValidElement(children)) {
      const childProps = (children as React.ReactElement<{ children?: React.ReactNode }>).props;
      if (childProps && typeof childProps.children === "string") {
        labelContent = childProps.children;
      }
    }

    if (!labelContent) {
      labelContent = children;
    }

    const inner = (
      <>
        <span className="ihb-dot" aria-hidden="true" />
        <span className="ihb-default-content">{labelContent}</span>
        <span className="ihb-hover-content" aria-hidden="true">
          <span>{labelContent}</span>
          {defaultIcon}
        </span>
      </>
    );

    // If href is provided, render native link or Next.js Link
    if (href) {
      const isInternal = href.startsWith("/") && !href.startsWith("//");
      const linkProps = {
        className: cn("ihb-btn", variantClass, sizeClass, className),
        target,
        rel: target === "_blank" ? "noopener noreferrer" : rel,
      };

      if (isInternal) {
        return (
          <Link href={href} {...linkProps} {...(props as any)}>
            {inner}
          </Link>
        );
      }

      return (
        <a href={href} {...linkProps} {...(props as any)}>
          {inner}
        </a>
      );
    }

    // If asChild is specified, clone the child element
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        className: cn("ihb-btn", variantClass, sizeClass, className, child.props.className),
        ...props,
        children: inner,
      });
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={cn("ihb-btn", variantClass, sizeClass, className)}
        {...props}
      >
        {inner}
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
