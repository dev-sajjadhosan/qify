import InputBox from "@/components/shared/input-box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQrStore } from "@/store/useQrStore";
import UploadSection from "./upload-section";

export default function PictureComponents() {
  const {
    imageSize,
    imageMargin,
    imageHideBackground,
    setImageSize,
    setImageMargin,
    setImageHideBackground,
  } = useQrStore();
  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        <UploadSection/>
        <div className="flex flex-col gap-2">
          <Label>Picture Background:</Label>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={imageHideBackground ? "secondary" : "default"}
              onClick={() => setImageHideBackground(false)}
            >
              Hide BG
            </Button>
            <Button
              variant={imageHideBackground ? "default" : "secondary"}
              onClick={() => setImageHideBackground(true)}
            >
              Show BG
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <InputBox
            label="Picture Size:"
            placeHolder="pictue size"
            max={1}
            min={0}
            step={0.1}
            defValue={imageSize}
            getValue={(v) => setImageSize(Number(v))}
          />
          <InputBox
            label="Picture Margin:"
            placeHolder="pictue margin"
            max={100}
            min={0}
            defValue={imageMargin}
            getValue={(v) => setImageMargin(Number(v))}
          />
        </div>
      </div>
    </>
  );
}
