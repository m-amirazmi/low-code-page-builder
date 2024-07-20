"use client";

import { useRef, useState } from "react";
import { EditorContentProps } from "./types";
import { IFrame } from "../iframe";
import { usePreviewStore } from "@/store/preview-store";

const minBreakpoints = {
  xs: "390px",
  sm: "767px",
  md: "1023px",
  lg: "100%",
  xl: "100%",
};

export const EditorContent: React.FC<EditorContentProps> = () => {
  const iframeRef = useRef(null);

  const { view } = usePreviewStore();

  return (
    <div className="flex-1 p-4 overflow-hidden mx-auto">
      <IFrame
        src={process.env.NEXT_PUBLIC_PREVIEW_URL as string}
        width={minBreakpoints[view]}
        ref={iframeRef}
      />
    </div>
  );
};
