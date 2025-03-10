"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex rounded-sm flex-col min-h-[1054px] w-[816px]",
      },
    },
    extensions: [StarterKit],
    content: "<p>Hello World</p>",
  });
  return (
    <div className="px-4 print:p-0 print:bg-white print:overflow-visible size-full overflow-x-auto bg-[#F9FBFD]">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
