import { PaintBucket, Palette, Settings2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { Button } from "../ui/button";
import { type COLORTYPE, type GARDIENTTYPE } from "@/store/useQrStore";

export default function PopoverBox({
  colorType = "single",
  gardientType = "linear",
  setColorType,
  setGardientType,
}: {
  colorType: COLORTYPE;
  gardientType: GARDIENTTYPE;
  setColorType: (v: COLORTYPE) => void;
  setGardientType: (v: GARDIENTTYPE) => void;
}) {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button size={"icon"} variant={"secondary"}>
            <Settings2 />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-5 flex flex-col gap-2 w-xs"
          side="bottom"
          align="end"
        >
          <h3 className="text-xs mb-2">Color Options</h3>
          <p className="text-xs">Color Type:</p>
          <div className="flex items-center gap-7">
            <Button
              variant={colorType === "single" ? "default" : "ghost"}
              onClick={() => setColorType("single")}
            >
              <PaintBucket />
              Single
            </Button>
            <Button
              variant={colorType === "gardient" ? "default" : "ghost"}
              onClick={() => setColorType("gardient")}
            >
              <Palette /> Gardient
            </Button>
          </div>
          <p className="text-xs mt-2">Gardient Type:</p>
          <div className="flex items-center gap-7">
            <Button
              variant={gardientType === "linear" ? "default" : "ghost"}
              onClick={() => setGardientType("linear")}
              disabled={colorType === "gardient" ? false : true}
            >
              Linear
            </Button>
            <Button
              variant={gardientType === "radiul" ? "default" : "ghost"}
              onClick={() => setGardientType("radiul")}
              disabled={colorType === "gardient" ? false : true}
            >
              Radiul
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
