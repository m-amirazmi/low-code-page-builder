import { EditorLayout } from "@/components/editor/layout";
import { BaseLayoutProps } from "@/lib/types";

export default function Layout({ children }: BaseLayoutProps) {
  return <EditorLayout>{children}</EditorLayout>;
}
