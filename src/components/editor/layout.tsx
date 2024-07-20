import { BaseLayoutProps } from "@/lib/types";
import { EditorHeader } from "./header";
import { EditorActionBar } from "./actionbar";
import { EditorSidebar } from "./sidebar";
import { EditorRightPanel } from "./rightpanel";
import { EditorContent } from "./content";

export const EditorLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col bg-neutral-200 h-screen w-screen">
      <EditorHeader />
      <div className="flex flex-row h-full">
        <EditorActionBar />
        <EditorSidebar />
        <EditorContent>{children}</EditorContent>
        <EditorRightPanel />
      </div>
    </div>
  );
};
