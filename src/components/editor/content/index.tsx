"use client";

import { useRef, useState } from "react";
import { EditorContentProps } from "./types";
import { IFrame } from "../iframe";
import { useAppSelector } from "@/redux";
import { cn } from "@/lib/utils";

const minBreakpoints = {
  xs: "390px",
  sm: "767px",
  md: "1023px",
  lg: "100%",
  xl: "100%",
};

export const EditorContent: React.FC<EditorContentProps> = () => {
  const [src] = useState("http://localhost:3000/preview");
  const iframeRef = useRef(null);

  const view = useAppSelector((state) => state.editorResponsiveFrame.view);

  return <IFrame src={src} width={minBreakpoints[view]} ref={iframeRef} />;
};
