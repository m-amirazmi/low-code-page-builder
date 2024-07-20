"use client";

import { forwardRef } from "react";
import { IFrameProps } from "./types";
import { cn } from "@/lib/utils";

export const IFrame = forwardRef<HTMLIFrameElement, IFrameProps>(
  ({ src, width = "100%" }, ref) => {
    return (
      <div className="w-full p-4 overflow-hidden mx-auto">
        <iframe
          src={src}
          style={{ width }}
          className={cn("shadow-lg border-none mx-auto h-full")}
          title="Responsive Preview"
          ref={ref}
        />
      </div>
    );
  }
);
IFrame.displayName = "IFrame";
