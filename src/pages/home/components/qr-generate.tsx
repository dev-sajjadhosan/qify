import { useEffect, useRef } from "react";
import QRCodeStyling, { type TypeNumber, type DotType } from "qr-code-styling";
import { Card, CardContent } from "@/components/ui/card";
import { useQrStore, type CORNERSQUARETYPE } from "@/store/useQrStore";

export default function QrGenerate() {
  const setQrInstance = useQrStore((s) => s.setQrInstance);
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);
  const {
    theme,
    isSync,
    data,
    width,
    height,
    size,
    logo,
    dotStyle,
    dotColor,
    cornersSquareStyle,
    cornersSquareColor,
    cornersDotStyle,
    cornersDotColor,
    backgroundColor,
    backgroundRadius,
    imageHideBackground,
    imageSize,
    imageMargin,
    qrTypeNumber,
    qrTypeMode,
    qrErrorLevel,
    margin,
    //
    setDotColor,
    setBackgroundColor,
  } = useQrStore();

  useEffect(() => {
    if (theme === "dark") {
      setDotColor("#fff");
      setBackgroundColor("#0a0a0a");
    } else {
      setDotColor("#0a0a0a");
      setBackgroundColor("#fff");
    }
  }, [theme, setDotColor, setBackgroundColor]);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      data,
      width: isSync ? size : width,
      height: isSync ? size : height,
      image: logo,
      type: "svg",
      margin,
      dotsOptions: {
        color: dotColor,
        type: dotStyle as DotType,
      },
      cornersSquareOptions: {
        color: cornersSquareColor,
        type: cornersSquareStyle as CORNERSQUARETYPE,
      },
      cornersDotOptions: { color: cornersDotColor, type: cornersDotStyle },
      backgroundOptions: { color: backgroundColor, round: backgroundRadius },
      imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: imageHideBackground,
        imageSize,
        margin: imageMargin,
      },
      qrOptions: {
        errorCorrectionLevel: qrErrorLevel,
        mode: qrTypeMode,
        typeNumber: qrTypeNumber as TypeNumber,
      },
    });

    setQrInstance(qrCode.current!);
    if (qrRef.current) qrCode.current.append(qrRef.current);
  }, []);

  useEffect(() => {
    qrCode.current?.update({
      data,
      width: isSync ? size : width,
      height: isSync ? size : height,
      margin,
      type: "svg",
      image: logo,
      dotsOptions: {
        color: dotColor,
        type: dotStyle as DotType,
        // roundSize: true,
      },
      cornersSquareOptions: {
        color: cornersSquareColor,
        type: cornersSquareStyle as CORNERSQUARETYPE,
      },
      cornersDotOptions: { color: cornersDotColor, type: cornersDotStyle },
      backgroundOptions: { color: backgroundColor, round: backgroundRadius },
      imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: imageHideBackground,
        imageSize,
        margin: imageMargin,
      },
      qrOptions: {
        errorCorrectionLevel: qrErrorLevel,
        mode: qrTypeMode,
        typeNumber: qrTypeNumber as TypeNumber,
      },
    });
  }, [
    isSync,
    data,
    width,
    height,
    size,
    margin,
    logo,
    dotColor,
    dotStyle,
    cornersSquareStyle,
    cornersSquareColor,
    cornersDotStyle,
    cornersDotColor,
    backgroundColor,
    backgroundRadius,
    qrTypeNumber,
    qrErrorLevel,
    qrTypeMode,
    imageHideBackground,
    imageSize,
    imageMargin,
  ]);

  return (
    <Card className="w-lg h-[27rem] bg-transparent! border-0">
      <CardContent className="flex flex-col items-center justify-center h-full">
        <div ref={qrRef}></div>
      </CardContent>
    </Card>
  );
}
