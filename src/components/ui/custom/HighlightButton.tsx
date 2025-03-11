import { ColorResult, SketchPicker } from "react-color";
import { useEditorStore } from "../../../../store/use-editor-state";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../dropdown-menu";
import { HighlighterIcon } from "lucide-react";

export default function HightlightButton() {
  const { editor } = useEditorStore();
  const current_value = editor?.getAttributes("hightlight").color || "#FFFFFF";
  const handleClick = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/50 px-3 overflow-hidden text-sm">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={current_value} onChange={handleClick} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
