import { Info } from "@/components/ui/info";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InputTextareaProps } from "./types";
import { useState } from "react";

export const InputTextarea: React.FC<InputTextareaProps> = ({
  id,
  label,
  type,
  info,
  onGetValue,
  placeholder,
  defaultValue = "",
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(currentTarget.value);
    onGetValue && onGetValue(currentTarget.value);
  };

  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          name={id}
          id={id}
        />
      </div>
      <Info>{info}</Info>
    </div>
  );
};
