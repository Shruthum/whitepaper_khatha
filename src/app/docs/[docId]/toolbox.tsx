"use client";

import { LucideIcon, Undo2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <Button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center hover:bg-neutral-200/50",
        isActive && "bg-neutral-200/50",
      )}
    >
      <Icon className="size-4" />
    </Button>
  );
}
export default function ToolBox() {
  const sections: SectionProps[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => console.log("Undo Clicked"),
      },
    ],
  ];
  return (
    <div className="px-2.5 py-0.5 bg-[#F1F4F9] rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolBoxButtonController key={item.label} {...item} />
      ))}
    </div>
  );
}
