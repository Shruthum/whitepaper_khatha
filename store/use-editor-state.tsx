import { create } from "zustand";
import type { Editor } from "@tiptap/react";

type EditorStateProps = {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
};
export const useEditorStore = create<EditorStateProps>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
