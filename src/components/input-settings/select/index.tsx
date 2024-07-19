import { useState } from "react";
import { InputSelectProps } from "./types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info } from "@/components/ui/info";

export const InputSelect: React.FC<InputSelectProps> = ({
  id,
  label,
  options,
  type,
  defaultValue = "",
  info,
  onGetValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (value: string) => {
    onGetValue && onGetValue(value);
    setValue(value);
  };
  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Select name={id} onValueChange={handleChange} value={value}>
          <SelectTrigger>
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Info>{info}</Info>
    </div>
  );
};
