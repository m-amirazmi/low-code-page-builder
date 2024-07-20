import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux";

export const EditorSidebar = () => {
  const view = useAppSelector((state) => state.editorResponsiveFrame.view);

  return (
    <div
      className={cn(
        "h-full bg-white border-r",
        view !== "xl" ? "w-[300px]" : "w-0 hidden"
      )}
    >
      <div className="py-3 px-4 border-b">
        <h1 className="font-bold text-lg">Homepage</h1>
      </div>
      <div className="py-3 px-4 border-b">Header components (Shared)</div>
      <div className="py-3 px-4 border-b">Body components (Unique)</div>
      <div className="py-3 px-4 border-b">Footer components (Shared)</div>
    </div>
  );
};
