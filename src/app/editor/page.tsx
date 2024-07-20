"use client";

import { Sections } from "@/components/sections";
import { useEditorStore } from "@/store/editor-store";

export default function EditorPage() {
  const { getSections } = useEditorStore();
  const sections = getSections({ pageName: "homepage__1" });

  return (
    <div>
      This is editor page
      <Sections sections={sections} />
    </div>
  );
}
