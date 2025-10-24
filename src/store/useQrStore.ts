import type QRCodeStyling from "qr-code-styling";
import { create } from "zustand";
// import { persist } from "zustand/middleware";

export type DOTSTYLES =
  | "square"
  | "dots"
  | "rounded"
  | "extra-rounded"
  | "classy"
  | "classy-rounded"
  | undefined;

export type COLORTYPE = "single" | "gardient" | string;
export type GARDIENTTYPE = "linear" | "radiul";
export type CORNERSSTYLE =
  | "classy"
  | "classy-rounded"
  | "dot"
  | "dots"
  | "extra-rounded"
  | "rounded"
  | "square"
  | undefined;
// | string;
export type CORNERSQUARETYPE = "dot" | "square" | "extra-rounded" | undefined;

// export type CORNERDOTSTYLE = "none" | "square" | "dot" | undefined;
export type QRTYPEMODE =
  | "Byte"
  | "Numeric"
  | "Alphanumeric"
  | "Kanji"
  | undefined;
export type QRERRORLEVEL = "Q" | "L" | "M" | "H" | undefined;
export type PICTUREEXTENSION = "png" | "jpeg" | "webp" | "svg" | string;
export type TABOPTIONS =
  | "main"
  | "dots"
  | "corners"
  | "corners-dots"
  | "picture";
export type THEME = "dark" | "light" | "system";

// isSync, setIsSync;

interface QrStore {
  theme: THEME;
  setTheme: (v: THEME) => void;
  //
  qrInstance: QRCodeStyling | null;
  setQrInstance: (instance: QRCodeStyling) => void;
  //
  isSync: boolean;
  tab: TABOPTIONS;
  //
  data: string;
  color: string;
  bgColor: string;
  size: number;
  logo: string;
  width: number;
  height: number;
  margin: number;
  pictureExtension: PICTUREEXTENSION;
  //
  useImage: string;
  //
  usePicture: boolean;
  // dot styles
  dotStyle: DOTSTYLES;
  dotColorType: COLORTYPE;
  dotGardientType: GARDIENTTYPE;
  dotColor: string;
  // corners square
  cornersSquareStyle: CORNERSQUARETYPE;
  cornersSquareColorType: COLORTYPE;
  cornersSquareGardientType: GARDIENTTYPE;
  cornersSquareColor: string;

  //corners dot
  cornersDotStyle: CORNERSSTYLE;
  cornersDotColorType: COLORTYPE;
  cornersDotGardientType: GARDIENTTYPE;
  cornersDotColor: string;

  //   Background
  backgroundRadius: number;
  backgroundColorType: COLORTYPE;
  backgroundGardientType: GARDIENTTYPE;
  backgroundColor: string;

  //   Image
  imageHideBackground: boolean;
  imageSize: number;
  imageMargin: number;

  // Qr
  qrTypeNumber: number | undefined;
  qrTypeMode: QRTYPEMODE;
  qrErrorLevel: QRERRORLEVEL;

  //
  setIsSync: (v: boolean) => void;
  setTab: (v: TABOPTIONS) => void;
  //
  setData: (v: string) => void;
  setColor: (v: string) => void;
  setBgColor: (v: string) => void;
  setSize: (v: number) => void;
  setLogo: (v: string) => void;
  setWidth: (v: number) => void;
  setHeight: (v: number) => void;
  setMargin: (v: number) => void;
  setPictureExtension: (v: PICTUREEXTENSION) => void;
  //
  setUseImage: (v: string) => void;
  //
  setUsePicture: (v: boolean) => void;
  //   DOT
  setDotStyle: (v: DOTSTYLES) => void;
  setDotColorType: (v: COLORTYPE) => void;
  setDotGardientType: (v: GARDIENTTYPE) => void;
  setDotColor: (v: string) => void;
  // CORNERS SQUARE
  setCornersSquareStyle: (v: CORNERSQUARETYPE) => void;
  setCornersSquareColorType: (v: COLORTYPE) => void;
  setCornersSquareGardientType: (v: GARDIENTTYPE) => void;
  setCornersSquareColor: (v: string) => void;
  // CORNER DOTS
  setCornersDotStyle: (v: CORNERSSTYLE) => void;
  setCornersDotColorType: (v: COLORTYPE) => void;
  setCornersDotGardientType: (v: GARDIENTTYPE) => void;
  setCornersDotColor: (v: string) => void;
  // BACKGROUND
  setBackgroundRadius: (v: number) => void;
  setBackgroundColorType: (v: COLORTYPE) => void;
  setBackgroundGardientType: (v: GARDIENTTYPE) => void;
  setBackgroundColor: (v: string) => void;
  // IMAGE
  setImageHideBackground: (v: boolean) => void;
  setImageSize: (v: number) => void;
  setImageMargin: (v: number) => void;
  // QR
  setQrTypeNumber: (v: number) => void;
  setQrTypeMode: (v: QRTYPEMODE) => void;
  setQrErrorLevel: (v: QRERRORLEVEL) => void;
}

export const useQrStore = create<QrStore>()((set) => ({
  theme: "dark",
  setTheme: (v: THEME) => set({ theme: v }),
  //
  qrInstance: null,
  setQrInstance: (instance) => set({ qrInstance: instance }),
  //
  isSync: false,
  tab: "main",
  //
  data: "https://www.google.com",
  color: "#0a0a0a",
  bgColor: "#f1f1f1",
  logo: "",
  size: 250,
  width: 300,
  height: 300,
  margin: 0,
  pictureExtension: "png",
  //
  useImage: "",
  //
  usePicture: false,
  //
  dotStyle: "square",
  dotColorType: "single",
  dotGardientType: "linear",
  dotColor: "",
  //
  cornersSquareStyle: "square",
  cornersSquareColorType: "single",
  cornersSquareGardientType: "linear",
  cornersSquareColor: "",
  //
  cornersDotStyle: "square",
  cornersDotColorType: "single",
  cornersDotGardientType: "linear",
  cornersDotColor: "",
  //
  backgroundRadius: 0,
  backgroundColorType: "single",
  backgroundGardientType: "linear",
  backgroundColor: "",
  //
  imageHideBackground: false,
  imageSize: 0.5,
  imageMargin: 20,
  //
  qrTypeNumber: 0,
  qrTypeMode: "Byte",
  qrErrorLevel: "Q",

  //
  setIsSync: (v: boolean) => set({ isSync: v }),
  setTab: (v: TABOPTIONS) => set({ tab: v }),
  //
  setData: (v: string) => set({ data: v }),
  setColor: (v: string) => set({ color: v }),
  setBgColor: (v: string) => set({ bgColor: v }),
  setSize: (v: number) => set({ size: v }),
  setLogo: (v: string) => set({ logo: v }),
  setWidth: (v: number) => set({ width: v }),
  setHeight: (v: number) => set({ height: v }),
  setMargin: (v: number) => set({ margin: v }),
  setPictureExtension: (v: PICTUREEXTENSION) => set({ pictureExtension: v }),
  //
  setUseImage: (v: string) => set({ useImage: v }),
  //
  setUsePicture: (v: boolean) => set({ usePicture: v }),
  //
  setDotStyle: (v: DOTSTYLES) => set({ dotStyle: v }),
  setDotColorType: (v: COLORTYPE) => set({ dotColorType: v }),
  setDotGardientType: (v: GARDIENTTYPE) => set({ dotGardientType: v }),
  setDotColor: (v: string) => set({ dotColor: v }),
  //
  setCornersSquareStyle: (v: CORNERSQUARETYPE) =>
    set({ cornersSquareStyle: v }),
  setCornersSquareColorType: (v: COLORTYPE) =>
    set({ cornersSquareColorType: v }),
  setCornersSquareGardientType: (v: GARDIENTTYPE) =>
    set({ cornersSquareGardientType: v }),
  setCornersSquareColor: (v: string) => set({ cornersSquareColor: v }),
  //
  setCornersDotStyle: (v: CORNERSSTYLE) => set({ cornersDotStyle: v }),
  setCornersDotColorType: (v: COLORTYPE) => set({ cornersDotColorType: v }),
  setCornersDotGardientType: (v: GARDIENTTYPE) =>
    set({ cornersDotGardientType: v }),
  setCornersDotColor: (v: string) => set({ cornersDotColor: v }),
  //
  setBackgroundRadius: (v: number) => set({ backgroundRadius: v }),
  setBackgroundColorType: (v: COLORTYPE) => set({ backgroundColorType: v }),
  setBackgroundGardientType: (v: GARDIENTTYPE) =>
    set({ backgroundGardientType: v }),
  setBackgroundColor: (v: string) => set({ backgroundColor: v }),
  //
  setImageHideBackground: (v: boolean) => set({ imageHideBackground: v }),
  setImageSize: (v: number) => set({ imageSize: v }),
  setImageMargin: (v: number) => set({ imageMargin: v }),
  //
  setQrTypeNumber: (v: number) => set({ qrTypeNumber: v }),
  setQrTypeMode: (v: QRTYPEMODE) => set({ qrTypeMode: v }),
  setQrErrorLevel: (v: QRERRORLEVEL) => set({ qrErrorLevel: v }),
}));
