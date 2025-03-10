"use client";

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheck2Icon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "../../../../store/use-editor-state";
import { Separator } from "@/components/ui/separator";
import FontFamilyButton from "@/components/ui/custom/FontFamilyButton";
import Heading from "@/components/ui/custom/Heading";

export type ToolBoxButtonProps = {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
};
export type SectionProps = {
  label: string;
} & ToolBoxButtonProps;

function ToolBoxButtonController({
  icon: Icon,
  isActive,
  onClick,
}: ToolBoxButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center rounded-sm justify-center hover:bg-neutral-200/50",
        isActive && "bg-neutral-200/50",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}
export default function ToolBox() {
  const { editor } = useEditorStore();
  const sections: SectionProps[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Checker",
        icon: SpellCheck2Icon,
        onClick: () => {
          const currentattr = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            currentattr === "false" ? "true" : "false",
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comments",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("to be added"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];
  return (
    <div className="px-2.5 py-0.5 bg-[#F1F4F9] rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolBoxButtonController key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Heading />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolBoxButtonController key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[2].map((item) => (
        <ToolBoxButtonController key={item.label} {...item} />
      ))}
    </div>
  );
}
