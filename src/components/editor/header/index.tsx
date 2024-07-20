import { usePreviewStore } from "@/store/preview-store";
import { PreviewStore } from "@/store/preview-store/types";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editor-store";

export const EditorHeader = () => {
  const { setView } = usePreviewStore();
  const { createPage } = useEditorStore();

  const handleResponsiveSwitcher = (view: PreviewStore["view"]) => {
    setView(view);
  };

  const handleNewPage = () => {
    createPage({ name: "homepage", path: "/", label: "Homepage" });
  };
  const handleNewPage2 = () => {
    createPage({ name: "homepage", path: "/home", label: "Homepage" });
  };
  const handleNewPage3 = () => {
    createPage({ name: "homepage", path: "/homepage", label: "Homepage" });
  };

  return (
    <header className="flex w-full shadow-md bg-white z-10">
      <div className="flex-1 flex items-center justify-start p-4">
        <span>Back</span>
        <span>Theme name / App name</span>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Button onClick={handleNewPage}>Add page</Button>
        <Button onClick={handleNewPage2}>Add page 2</Button>
        <Button onClick={handleNewPage3}>Add page 3</Button>
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
