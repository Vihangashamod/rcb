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

    const renderIcon =
      icon !== undefined ? icon : <ArrowUpRight className="ihb-icon-svg" />;

    // Extract label text
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
        <span className="ihb-ripple" aria-hidden="true" />
        <span className="ihb-inner">
          <span className="ihb-text">{labelContent}</span>
          {renderIcon && <span className="ihb-icon-slot">{renderIcon}</span>}
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
