"use client";

import { forwardRef } from "react";
import { IFrameProps } from "./types";
import { cn } from "@/lib/utils";

export const IFrame = forwardRef<HTMLIFrameElement, IFrameProps>(
  ({ src, width = "100%" }, ref) => {
    return (
      <iframe
        src={src}
        style={{ width }}
        className={cn("shadow-lg border-none mx-auto h-full scrollbar-hide")}
        title="Responsive Preview"
        ref={ref}
      />
    );
  }
);
IFrame.displayName = "IFrame";
