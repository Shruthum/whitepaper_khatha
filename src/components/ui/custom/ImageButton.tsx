import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { useEditorStore } from "../../../../store/use-editor-state";
import { useState } from "react";
import { ImageIcon, SearchIcon, UploadIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { Input } from "../input";
import { Button } from "../button";

const ImageButton = () => {
  const { editor } = useEditorStore();
  const [isopen, setOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  function handleClick(src: string) {
    editor?.chain().focus().setImage({ src }).run();
  }
  function onUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const imageurl = URL.createObjectURL(file);
        handleClick(imageurl);
      }
    };
    input.click();
  }

  function handleImageUrlSubmit() {
    if (url) {
      handleClick(url);
      setUrl("");
      setOpen(false);
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/50 px-3 overflow-hidden text-sm">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2.5 flex items-center justify-center gap-x-2">
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4" /> Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <SearchIcon className="size-4" /> Search
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isopen} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Image Url</DialogTitle>
          </DialogHeader>
          <div className="flex gap-x-2">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleImageUrlSubmit();
                }
              }}
              placeholder="Insert Image url..."
            />
            <Button onClick={() => handleImageUrlSubmit()}>Add</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageButton;
