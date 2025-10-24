import { CircleQuestionMark, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router";
import type React from "react";

interface TooltipBtnProps {
  label?: string;
  icon?: React.ComponentType<LucideProps>;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  action?: (e?: any) => void;
  url?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "icon" | "menuIcon" | "sm" | "lg";
  className?: string;
  iconWidth?: number;
  iconSize?: number;
  type?: "button" | "submit" | "reset";
}

export default function TooltipButton({
  label = "no label",
  icon: Icon = CircleQuestionMark, // <- rename here
  url,
  target,
  align,
  side,
  action,
  variant = "ghost",
  size = "icon",
  className,
  iconWidth,
  iconSize,
  type,
}: TooltipBtnProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className={className}>
        {url ? (
          <Link to={url} target={target}>
            <Button
              variant={variant}
              onClick={action}
              size="menuIcon"
              type={type}
            >
              {(Icon && <Icon strokeWidth={iconWidth} size={iconSize} />) ||
                Icon}
              {/* render properly */}
            </Button>
          </Link>
        ) : (
          <Button
            variant={variant}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              if (action) action(e);
            }}
            size={size}
            type={type}
          >
            {Icon && <Icon strokeWidth={iconWidth} size={iconSize} />}
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent align={align} side={side}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
