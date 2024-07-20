"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Blocks, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EditorActionBar = () => {
  const [selectedAction, setSelectedAction] = useState<"sections" | "settings">(
    "sections"
  );

  return (
    <div className="h-full flex flex-col bg-white border-r p-2 gap-1">
      <Button
        onClick={() => setSelectedAction("sections")}
        variant="ghost"
        className={cn(
          "p-3 rounded-lg hover:text-teal-700 hover:bg-neutral-300/50",
          selectedAction === "sections"
            ? "bg-neutral-300/50 text-teal-700"
            : "text-neutral-900"
        )}
      >
        <Blocks strokeWidth={2} size={18} />
      </Button>
      <Button
        onClick={() => setSelectedAction("settings")}
        variant="ghost"
        className={cn(
          "p-3 rounded-lg hover:text-teal-700 hover:bg-neutral-300/50",
          selectedAction === "settings"
            ? "bg-neutral-300/50 text-teal-700"
            : "text-neutral-900"
        )}
      >
        <Settings strokeWidth={2} size={18} />
      </Button>
    </div>
  );
};
