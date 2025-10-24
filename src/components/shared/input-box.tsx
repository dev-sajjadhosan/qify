import { Minus, Plus } from "lucide-react";
import TooltipButton from "../custom_ui/tooltip-button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

export default function InputBox({
  label = "no label",
  placeHolder = "no label",
  max = 20,
  min = 4,
  getValue,
  defValue = 0,
  step = 1,
}: {
  label: string;
  placeHolder: string;
  max?: number;
  min?: number;
  step?: number;
  defValue?: number;
  getValue?: (v: number) => void;
}) {
  const [current, setCurrent] = useState(defValue);

  const updateValue = (newVal: number) => {
    const clamped = Math.max(min, Math.min(max, newVal));
    setCurrent(clamped);
    getValue?.(clamped);
  };

  const sendValue = (key?: string) => {
    if (key === "arrowup") updateValue(current + step);
    if (key === "arrowdown") updateValue(current - step);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-1">
        <TooltipButton label="Decrement" icon={Minus} action={() => sendValue("arrowdown")} />
        <Input
          type="number"
          placeholder={placeHolder}
          value={current}
          onChange={(e) => updateValue(Number(e.target.value))}
          onKeyDown={(e) => sendValue(e.key.toLowerCase())}
          min={min}
          max={max}
          step={step}
          className="w-24 text-center"
        />
        <TooltipButton label="Increment" icon={Plus} action={() => sendValue("arrowup")} />
      </div>
    </div>
  );
}
