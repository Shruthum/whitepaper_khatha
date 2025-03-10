"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "../../../../store/use-editor-state";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const FontFamilyButton = () => {
  const { editor } = useEditorStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "h-7 w-[128px] border shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/50 px-1.5 overflow-hidden text-sm",
          )}
        >
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-4 size-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {fonts.map((item) => (
          <button
            key={item.value}
            style={{ fontFamily: item.value }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/50",
              editor?.getAttributes("textStyle").fontFamily === item.value &&
                "bg-neutral-200/80",
            )}
          >
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const fonts = [
  { label: "Arial", value: "Arial" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Courier New", value: "Courier New" },
  { label: "Georgia", value: "Georgia" },
  { label: "Veronica", value: "Veronica" },
];

export default FontFamilyButton;
