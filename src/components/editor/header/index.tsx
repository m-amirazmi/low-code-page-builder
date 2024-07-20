import { usePreviewStore } from "@/components/store/preview-store";
import { PreviewStore } from "@/components/store/preview-store/types";
import { Button } from "@/components/ui/button";

export const EditorHeader = () => {
  const { setView } = usePreviewStore();

  const handleResponsiveSwitcher = (view: PreviewStore["view"]) => {
    setView(view);
  };

  return (
    <header className="flex w-full shadow-md bg-white z-10">
      <div className="flex-1 flex items-center justify-start p-4">
        <span>Back</span>
        <span>Theme name / App name</span>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        Page dropdown
      </div>
      <div className="flex-1 flex items-center justify-end p-4">
        <div>
          <Button onClick={() => handleResponsiveSwitcher("xs")}>Mobile</Button>
          <Button onClick={() => handleResponsiveSwitcher("sm")}>Tablet</Button>
          <Button onClick={() => handleResponsiveSwitcher("lg")}>
            Desktop
          </Button>
          <Button onClick={() => handleResponsiveSwitcher("xl")}>
            Fullscreen
          </Button>
        </div>
        <div>Save</div>
      </div>
    </header>
  );
};
