import ColorSelectBox from "@/components/custom_ui/color-select-box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQrStore, type CORNERSQUARETYPE } from "@/store/useQrStore";
import { colors, StyleOptionsCorners } from "@/utils/shared";

export default function CornersSquareComponents() {
  const {
    cornersSquareStyle,
    setCornersSquareStyle,
    cornersSquareColor,
    setCornersSquareColor,
    backgroundGardientType,
    setCornersSquareColorType,
    setCornersSquareGardientType,
  } = useQrStore();
  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        <div className="flex flex-col gap-2">
          <Label>Corners Square Styles:</Label>
          <div className="flex flex-wrap items-center gap-2">
            {StyleOptionsCorners.map((d, i) => (
              <Button
                key={i}
                variant={
                  cornersSquareStyle === d.label ? "default" : "secondary"
                }
                className="capitalize"
                onClick={() =>
                  setCornersSquareStyle(d.label as CORNERSQUARETYPE)
                }
              >
                {d.label}
              </Button>
            ))}
          </div>
        </div>
        <ColorSelectBox
          data={colors}
          label="Corners Square Color"
          colorType={cornersSquareColor}
          gardientType={backgroundGardientType}
          setColorType={setCornersSquareColorType}
          setGardientType={setCornersSquareGardientType}
          getColor={setCornersSquareColor}
        />
      </div>
    </>
  );
}
