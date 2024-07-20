import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux";

export const EditorRightPanel = () => {
  const view = useAppSelector((state) => state.editorResponsiveFrame.view);

  return (
    <div
      className={cn(
        "h-full bg-white border-l",
        view !== "xl" ? "w-[300px]" : "w-0 hidden"
      )}
    >
      Right panel
    </div>
  );
};
