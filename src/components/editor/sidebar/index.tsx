import { cn } from "@/lib/utils";
import { AddSection } from "../addsection";
import { usePreviewStore } from "@/store/preview-store";
import { useEditorStore } from "@/store/editor-store";
import { Button } from "@/components/ui/button";

export const EditorSidebar = () => {
  const { view } = usePreviewStore();
  const { getSections, pages } = useEditorStore();

  const sections = getSections({ pageName: "homepage__1" });

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
      <div className="py-3 px-4 border-b flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {sections.map(({ label, name }) => (
            <Button key={name} variant="outline" className="justify-start">
              {label}
            </Button>
          ))}
        </div>
        <AddSection />
      </div>
      <div className="py-3 px-4 border-b">Footer components (Shared)</div>
    </div>
  );
};
