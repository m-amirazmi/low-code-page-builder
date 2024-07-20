export const EditorContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-4 h-full w-full">
      <div className="bg-white shadow-md rounded h-full">{children}</div>
    </div>
  );
};
