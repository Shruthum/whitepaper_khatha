import { ChevronDownIcon } from "lucide-react";
import { useEditorStore } from "../../../../store/use-editor-state";
import { Button } from "../button";
import type { Level } from "@tiptap/extension-heading";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { cn } from "@/lib/utils";

const Heading = () => {
  const { editor } = useEditorStore();
  function getCurrentHeading() {
    for (let level = 1; level <= headings.length; ++level) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal text";
  }
  function handleClick(value: number) {
    if (value === 0) {
      editor?.chain().focus().setParagraph().run();
    } else {
      editor
        ?.chain()
        .focus()
        .toggleHeading({ level: value as Level })
        .run();
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/50 px-1.5 border overflow-hidden text-sm"
        >
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-1 px-3 pb-4 flex flex-col gap-y-2">
        {headings.map((item) => (
          <button
            style={{ fontSize: item.fontSize }}
            key={item.value}
            onClick={() => handleClick(item.value)}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/50",
              item.value === 0 ||
                !editor?.isActive("heading") ||
                (editor.isActive("heading", { level: item.value }) &&
                  "bg-neutral-200/80"),
            )}
          >
            {item.label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const headings = [
  { label: "Normal text", value: 0, fontSize: "16px" },
  { label: "Heading 1", value: 1, fontSize: "32px" },
  { label: "Heading 2", value: 2, fontSize: "24px" },
  { label: "Heading 3", value: 3, fontSize: "20px" },
  { label: "Heading 4", value: 4, fontSize: "18px" },
  { label: "Heading 5", value: 5, fontSize: "16px" },
];

export default Heading;
