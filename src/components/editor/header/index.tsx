export const EditorHeader = () => {
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
        <div>Responsive switcher</div>
        <div>Save</div>
      </div>
    </header>
  );
};
