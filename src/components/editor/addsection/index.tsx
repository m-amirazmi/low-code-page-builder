import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { sections } from "./sections";
import { useEditorStore } from "@/store/editor-store";

export const AddSection = () => {
  const [open, setOpen] = useState(false);

  const { createSection } = useEditorStore();

  const handleSelect = (selected: string) => {
    createSection({
      pageName: "homepage__1",
      sectionName: selected,
      sectionLabel: sections.find(({ value }) => value === selected)
        ?.label as string,
    });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          Choose a section
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {sections.map((i) => (
                <CommandItem
                  key={i.value}
                  value={i.value}
                  onSelect={handleSelect}
                  className="cursor-pointer"
                >
                  {i.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
