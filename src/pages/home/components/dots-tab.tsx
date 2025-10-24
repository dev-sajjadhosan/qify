import ColorSelectBox from "@/components/custom_ui/color-select-box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQrStore, type DOTSTYLES } from "@/store/useQrStore";
import { colors, StyleOptions } from "@/utils/shared";

export default function DotsCompoents() {
  const {
    dotStyle,
    setDotStyle,
    dotColorType,
    setDotColor,
    setDotColorType,
    dotGardientType,
    setDotGardientType,
  } = useQrStore();
  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        <div className="flex flex-col gap-2">
          <Label>Dots Styles:</Label>
          <div className="flex flex-wrap items-center gap-2">
            {StyleOptions.map((d, i) => (
              <Button
                key={i}
                variant={dotStyle === d.label ? "default" : "secondary"}
                className="capitalize"
                onClick={() => setDotStyle(d.label as DOTSTYLES)}
              >
                {d.label}
              </Button>
            ))}
          </div>
        </div>
        <ColorSelectBox
          data={colors}
          label="Dots Color"
          colorType={dotColorType}
          gardientType={dotGardientType}
          setColorType={setDotColorType}
          setGardientType={setDotGardientType}
          getColor={setDotColor}
        />
      </div>
    </>
  );
}
