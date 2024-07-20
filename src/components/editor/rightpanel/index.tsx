import { usePreviewStore } from "@/store/preview-store";
import { cn } from "@/lib/utils";

export const EditorRightPanel = () => {
  const { view } = usePreviewStore();

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
