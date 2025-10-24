import ColorSelectBox from "@/components/custom_ui/color-select-box";
import TooltipButton from "@/components/custom_ui/tooltip-button";
import InputBox from "@/components/shared/input-box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQrStore, type QRERRORLEVEL } from "@/store/useQrStore";
import { colors } from "@/utils/shared";
import {
  Circle,
 
  MousePointerClick,
  QrCode,
  Square,

} from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import UploadSection from "./upload-section";

export default function OptionsMain() {
  const {
    isSync,
    setIsSync,
    //
    data,
    width,
    height,
    margin,
    setData,
    setWidth,
    setHeight,
    setMargin,
   
    size,
    setSize,
    
    //
    dotColorType,
    dotGardientType,
    setDotColorType,
    setDotGardientType,
    setDotColor,
    // backgroundColor,
    backgroundRadius,
    backgroundColorType,
    backgroundGardientType,
    setBackgroundColor,
    setBackgroundColorType,
    setBackgroundGardientType,
    setBackgroundRadius,
    //
  
    //
    qrTypeNumber,
    setQrTypeNumber,
    setQrErrorLevel,
    qrErrorLevel,
  } = useQrStore();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-5">
        <div className="flex gap-1 items-end">
          <InputBox
            label="Width:"
            placeHolder="width"
            max={400}
            min={0}
            defValue={isSync ? size : width}
            getValue={(v) =>
              isSync ? setSize(Number(v)) : setWidth(Number(v))
            }
          />
          <TooltipButton
            variant={isSync ? "default" : "secondary"}
            icon={Square}
            label="Sync"
            action={() => (isSync ? setIsSync(false) : setIsSync(true))}
          />
          <InputBox
            label="Height:"
            placeHolder="height"
            max={400}
            min={0}
            defValue={isSync ? size : height}
            getValue={(v) =>
              isSync ? setSize(Number(v)) : setHeight(Number(v))
            }
          />
        </div>
        <InputBox
          label="Margin:"
          placeHolder="margin"
          max={90}
          min={0}
          defValue={margin}
          getValue={(v) => setMargin(Number(v))}
        />
      </div>
      <ColorSelectBox
        data={colors}
        label="Background Color"
        colorType={backgroundColorType}
        gardientType={backgroundGardientType}
        setColorType={setBackgroundColorType}
        setGardientType={setBackgroundGardientType}
        getColor={setBackgroundColor}
      />
      {/* <ColorSelectBox
        data={colors}
        label="QrCode Color"
        colorType={dotColorType}
        gardientType={dotGardientType}
        setColorType={setDotColorType}
        setGardientType={setDotGardientType}
        getColor={setDotColor}
      /> */}
      <UploadSection />
      <div className="grid grid-cols-3 gap-5">
        <InputBox
          label="Qr Dots:"
          placeHolder="dots"
          max={40}
          min={3}
          defValue={qrTypeNumber}
          getValue={(v) => setQrTypeNumber(v)}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium">Background Radius:</h3>
          <Button
            onClick={() => {
              if (backgroundRadius === 1) {
                setBackgroundRadius(0);
                setMargin(0);
              } else {
                setBackgroundRadius(1);
                // setMargin(10);
              }
            }}
            variant={backgroundRadius === 1 ? "default" : "secondary"}
          >
            <Circle /> Circle
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Error Correction:</Label>
          <Select
            defaultValue={qrErrorLevel}
            value={qrErrorLevel}
            onValueChange={(v) => setQrErrorLevel(v as QRERRORLEVEL)}
          >
            <SelectTrigger className="w-[85px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="Q">Q</SelectItem>
              <SelectItem value="H">H</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-1.5 border px-3 py-3 rounded-lg">
        <QrCode size={20} />
        <Input
          placeholder="Write your link here"
          className="bg-transparent! border-0"
          defaultValue={data}
          ref={inputRef}
          onKeyDown={(e) => {
            const k = e.key.toLocaleLowerCase();
            if (k === "enter") {
              const v = inputRef.current?.value;
              if (v === "") return toast.warning("Your Field is empty!");
              setData(v || "");
            }
          }}
        />
        <Button
          onClick={() => {
            const v = inputRef.current?.value;
            if (v === "") return toast.warning("Your Field is empty!");
            setData(v || "");
          }}
        >
          <MousePointerClick /> Generate
        </Button>
      </div>
    </div>
  );
}
