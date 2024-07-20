import { usePreviewStore } from "@/store/preview-store";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/editor-store";

export const EditorRightPanel = () => {
  const { view } = usePreviewStore();
  const {} = useEditorStore();

  return (
    <div
      className={cn(
        "h-full bg-white border-l",
        view !== "xl" ? "w-[300px]" : "w-0 hidden"
      )}
    >
      <form>
        <div>{/* <InputSettings /> */}</div>
      </form>
    </div>
  );
};
