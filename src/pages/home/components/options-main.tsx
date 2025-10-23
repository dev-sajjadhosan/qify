import ColorSelectBox from "@/components/custom_ui/color-select-box";
import TooltipButton from "@/components/custom_ui/tooltip-button";
import InputBox from "@/components/shared/input-box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQrStore, type QRERRORLEVEL } from "@/store/useQrStore";
import { Circle, ImagePlus, ImageUp, Square, Trash2 } from "lucide-react";

const colors = [
  {
    color: "#313131",
  },
  {
    color: "#fff",
  },
  {
    color: "#F719AD",
  },
  {
    color: "#16A300",
  },
  {
    color: "#F54927",
  },
  {
    color: "#F77619",
  },
  {
    color: "#19A2F7",
  },
  {
    color: "#8C19F7",
  },
  {
    color: "#008DA3",
  },
];

export default function OptionsMain() {
  const {
    isSync,
    setIsSync,
    //
    width,
    height,
    margin,
    setWidth,
    setHeight,
    setMargin,
    logo,
    size,
    setSize,
    setLogo,
    //
    // backgroundColor,
    backgroundRadius,
    backgroundColorType,
    backgroundGardientType,
    setBackgroundColor,
    setBackgroundColorType,
    setBackgroundGardientType,
    setBackgroundRadius,
    //
    dotColorType,
    dotGardientType,
    setDotColorType,
    setDotColor,
    setDotGardientType,
    //
    usePicture,
    setUsePicture,
    //
    qrTypeNumber,
    setQrTypeNumber,
    setQrErrorLevel,
    qrErrorLevel,
  } = useQrStore();

  return (
    <div className="space-y-4">
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
      <ColorSelectBox
        data={colors}
        label="QrCode Color"
        colorType={dotColorType}
        gardientType={dotGardientType}
        setColorType={setDotColorType}
        setGardientType={setDotGardientType}
        getColor={setDotColor}
      />
      <div className="flex flex-col gap-1">
        <Label>Use Picture:</Label>
        <div className="flex items-center gap-5">
          {logo ? (
            <Button onClick={() => setLogo("")}>
              <Trash2 /> Remove
            </Button>
          ) : (
            <label
              htmlFor="upload_image"
              className="flex items-center gap-2 border border-secondary rounded-sm px-5 py-2 text-sm font-medium [&_svg]:size-4.5 hover:bg-secondary/85 hover:text-secondary-foreground cursor-pointer active:scale-95"
            >
              <input
                type="file"
                name="upload_image"
                id="upload_image"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setLogo(url);
                  }
                }}
              />
              <ImagePlus />
              Upload
            </label>
          )}

          <Button
            variant={"secondary"}
            onClick={() => setUsePicture(!usePicture)}
          >
            <ImageUp />
            Use Picture
          </Button>
        </div>
      </div>
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
            <SelectTrigger size="sm" className="w-[85px]">
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
    </div>
  );
}
