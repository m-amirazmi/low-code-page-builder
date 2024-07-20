"use client";

import { EditorLayoutProps } from "./types";
import { EditorHeader } from "../header";
import { EditorActionBar } from "../actionbar";
import { EditorSidebar } from "../sidebar";
import { EditorContent } from "../content";
import { EditorRightPanel } from "../rightpanel";

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className="flex flex-col bg-neutral-200 h-screen w-screen overflow-hidden">
      <EditorHeader />
      <div className="flex flex-row h-full w-full justify-between">
        <EditorActionBar />
        <EditorSidebar />
        <EditorContent>{children}</EditorContent>
        <EditorRightPanel />
      </div>
    </div>
  );
};
