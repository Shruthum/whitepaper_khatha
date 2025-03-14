import { useState } from "react";
import { useEditorStore } from "../../../../store/use-editor-state";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Link2Icon } from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";

export default function LinkButton() {
  const { editor } = useEditorStore();
  const [input, setInput] = useState<string>(
    editor?.getAttributes("link").href || "",
  );
  function handleClick(href: string) {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setInput("");
  }

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setInput(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/50 px-3 overflow-hidden text-sm">
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          placeholder="https://example.com"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => handleClick(input)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
