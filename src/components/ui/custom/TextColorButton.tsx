import { useEditorStore } from "../../../../store/use-editor-state";
import { ColorResult, CirclePicker, SketchPicker } from "react-color";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../dropdown-menu";

const TextColorButton = () => {
  const { editor } = useEditorStore();
  const current_value = editor?.getAttributes("textStyle").color || "#000";
  const handleClick = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/50 px-4 overflow-hidden text-sm">
          <span className="text-sm font-bold">A</span>
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: current_value }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex flex-col gap-y-2 items-center">
        <CirclePicker color={current_value} onChange={handleClick} />
        <SketchPicker color={current_value} onChange={handleClick} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default TextColorButton;
