import { EditorLayout } from "@/components/editor/layout";
import { BaseLayoutProps } from "@/lib/types";

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <EditorLayout>
      This is layout
      <div>HerE?</div>
      {children}
    </EditorLayout>
  );
}
