"use client";

import { useRef, useState } from "react";
import { EditorContentProps } from "./types";
import { IFrame } from "../iframe";

export const EditorContent: React.FC<EditorContentProps> = ({ children }) => {
  const iframeRef = useRef(null);
  const [src, setSrc] = useState("http://localhost:3000/preview");

  return (
    <div className="flex-1 p-4 h-full w-full">
      <div className="bg-white shadow-md rounded h-full">
        <IFrame src={src} ref={iframeRef} />
      </div>
    </div>
  );
};
