import ColorSelectBox from "@/components/custom_ui/color-select-box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQrStore, type CORNERSQUARETYPE } from "@/store/useQrStore";
import { colors, StyleOptionsCorners } from "@/utils/shared";

export default function CornersDotsComponents() {
  const {
    cornersDotStyle,
    setCornersDotStyle,
    cornersDotColorType,
    cornersDotGardientType,
    setCornersDotColorType,
    setCornersDotGardientType,
    setCornersDotColor,
  } = useQrStore();
  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        <div className="flex flex-col gap-2">
          <Label>Corners Dots Styles:</Label>
          <div className="flex flex-wrap items-center gap-2">
            {StyleOptionsCorners.map((d, i) => (
              <Button
                key={i}
                variant={cornersDotStyle === d.label ? "default" : "secondary"}
                className="capitalize"
                onClick={() => setCornersDotStyle(d.label as CORNERSQUARETYPE)}
              >
                {d.label}
              </Button>
            ))}
          </div>
        </div>
        <ColorSelectBox
          data={colors}
          label="Corners Dots Color"
          colorType={cornersDotColorType}
          gardientType={cornersDotGardientType}
          setColorType={setCornersDotColorType}
          setGardientType={setCornersDotGardientType}
          getColor={setCornersDotColor}
        />
      </div>
    </>
  );
}
