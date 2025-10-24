import { useRef, useState } from "react";
import { Label } from "../ui/label";
import PopoverBox from "./popover-box";
import type { COLORTYPE, GARDIENTTYPE } from "@/store/useQrStore";

export default function ColorSelectBox({
  label,
  data,
  colorType,
  gardientType,
  setColorType,
  setGardientType,
  getColor,
}: {
  label: string;
  data?: any;
  colorType: COLORTYPE;
  gardientType: GARDIENTTYPE;
  setColorType: (v: COLORTYPE) => void;
  setGardientType: (v: GARDIENTTYPE) => void;
  getColor: (v: string) => void;
}) {
  const [color, setColor] = useState("");
  const refA = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>{label}: </Label>
        <div className="flex flex-wrap items-center gap-3">
          {data?.map((c: any, i: number) => (
            <span
              key={i}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm ring-2 font-semibold cursor-pointer active:scale-95 shadow text-foreground ${
                color === c.color ? "ring-primary" : "ring-transparent"
              }`}
              style={{ background: `${c.color}` }}
              onClick={() => {
                getColor(c.color);
                setColor(c.color);
              }}
            >
              {i + 1}
            </span>
          ))}
          <div className="flex items-center gap-1.5">
            <label
              htmlFor="cus_color"
              className={`flex items-center gap-3 border rounded-md overflow-hidden cursor-pointer ring-2 ${
                color === refA.current?.value
                  ? "ring-primary"
                  : "ring-transparent"
              }`}
            >
              <span className="pl-3 font-normal">A</span>
              <input
                type="color"
                name="cus_color"
                id="cus_color"
                ref={refA}
                className="w-12 h-9 border-0"
                onChange={(e) => getColor(e.target.value)}
              />
            </label>
            {colorType === "gardient" && (
              <label
                htmlFor="cus_color"
                className="flex items-center gap-3 border rounded-md overflow-hidden cursor-pointer"
              >
                <span className="pl-3 font-normal">B</span>
                <input
                  type="color"
                  name="cus_color"
                  id="cus_color"
                  className="w-12 h-9 border-0"
                  onChange={(e) => getColor(e.target.value)}
                />
              </label>
            )}
          </div>
          <PopoverBox
            colorType={colorType}
            gardientType={gardientType}
            setColorType={setColorType}
            setGardientType={setGardientType}
          />
        </div>
      </div>
    </>
  );
}
