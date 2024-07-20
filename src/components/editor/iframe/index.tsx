"use client";

import { forwardRef } from "react";
import { IFrameProps } from "./types";

export const IFrame = forwardRef<HTMLIFrameElement, IFrameProps>(
  ({ height = "100%", src, width = "100%" }, ref) => {
    const iframeStyle: React.CSSProperties = {
      width,
      height,
      border: "none",
    };

    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <iframe
          src={src}
          style={iframeStyle}
          title="Responsive Preview"
          ref={ref}
        />
      </div>
    );
  }
);
IFrame.displayName = "IFrame";
