import { useEffect, useRef } from "react";
import QRCodeStyling, { type TypeNumber } from "qr-code-styling";
import { Card, CardContent } from "@/components/ui/card";
import { useQrStore } from "@/store/useQrStore";

export default function QrGenerate() {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);
  const {
    isSync,
    //
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
  } = useQrStore();

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      data,
      width: isSync ? size : width,
      height: isSync ? size : height,
      image: logo,
      type: "svg",
      // image:
      //   "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      margin,
      dotsOptions: { color: dotColor, type: dotStyle },
      cornersSquareOptions: {
        color: cornersSquareColor,
        type: cornersSquareStyle,
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

    if (qrRef.current) qrCode.current.append(qrRef.current);
  }, []);

  useEffect(() => {
    qrCode.current?.update({
      data,
      width: isSync ? size : width,
      height: isSync ? size : height,
      margin,
      type: "svg",
      // image:
      //   "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      image: logo,
      dotsOptions: { color: dotColor, type: dotStyle, roundSize: true },
      cornersSquareOptions: {
        color: cornersSquareColor,
        type: cornersSquareStyle,
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
    cornersDotStyle,
    backgroundColor,
    backgroundRadius,
    qrTypeNumber,
    qrErrorLevel,
    qrTypeMode,
    imageHideBackground,
    imageMargin,
  ]);

  return (
    <Card className="w-lg h-[27rem]">
      <CardContent className="flex flex-col items-center justify-center h-full">
        <div ref={qrRef}></div>
      </CardContent>
    </Card>
  );
}
