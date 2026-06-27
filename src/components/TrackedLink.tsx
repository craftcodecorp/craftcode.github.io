import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { trackConversionEvent } from "@/lib/analytics-init";

type TrackingProps = {
  eventName?: "cta_click" | "navigation_click" | "content_click" | "whatsapp_click";
  eventLabel: string;
  eventLocation: string;
  conversionGoal?: "diagnostico_tecnologia_ia";
  children: ReactNode;
};

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & TrackingProps;

export const TrackedAnchor = ({
  eventName = "cta_click",
  eventLabel,
  eventLocation,
  conversionGoal,
  onClick,
  children,
  ...props
}: TrackedAnchorProps) => (
  <a
    {...props}
    onClick={(event) => {
      trackConversionEvent(eventName, {
        cta_label: eventLabel,
        cta_location: eventLocation,
        cta_target: props.href,
        conversion_goal: conversionGoal ?? (eventName === "cta_click" || eventName === "whatsapp_click" ? "diagnostico_tecnologia_ia" : undefined),
      });
      onClick?.(event);
    }}
  >
    {children}
  </a>
);

type TrackedRouterLinkProps = LinkProps & TrackingProps;

export const TrackedRouterLink = ({
  eventName = "cta_click",
  eventLabel,
  eventLocation,
  conversionGoal,
  onClick,
  children,
  ...props
}: TrackedRouterLinkProps) => (
  <Link
    {...props}
    onClick={(event) => {
      trackConversionEvent(eventName, {
        cta_label: eventLabel,
        cta_location: eventLocation,
        cta_target: String(props.to),
        conversion_goal: conversionGoal ?? (eventName === "cta_click" || eventName === "whatsapp_click" ? "diagnostico_tecnologia_ia" : undefined),
      });
      onClick?.(event);
    }}
  >
    {children}
  </Link>
);
