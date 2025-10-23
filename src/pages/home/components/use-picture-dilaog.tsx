import TooltipButton from "@/components/custom_ui/tooltip-button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQrStore } from "@/store/useQrStore";
import { PawPrint, Plus, Smile, Webhook } from "lucide-react";

export default function UsePictureDialog() {
  const { setUsePicture, usePicture, useImage, setUseImage } = useQrStore();
  return (
    <>
      <Dialog open={usePicture} onOpenChange={() => setUsePicture(!usePicture)}>
        <DialogContent className="p-5 w-4xl flex items-center gap-3 h-11/12">
          <div className="flex flex-col gap-3 border-r pr-2">
            <TooltipButton side="right" label="Socials" icon={Webhook} />
            <TooltipButton side="right" label="Animal" icon={PawPrint} />
            <TooltipButton side="right" label="Emoji" icon={Smile} />
            <TooltipButton side="right" label="Upload" icon={Plus} />
          </div>
          <div
            className={`flex flex-wrap items-center justify-center gap-5 mt-5 pl-2 overflow-y-scroll h-full p-5`}
          >
            {Array.from({ length: 19 }).map((_, i) => (
              <Card
                key={i}
                className={`w-40 h-44 cursor-pointer p-5 ${
                  useImage === `image-${i}` ? "bg-neutral-200" : ""
                }`}
                onClick={() => setUseImage(`image-${i}`)}
              >
                <CardContent className="flex flex-col gap-2 h-full p-0">
                  <img
                    src="vite.svg"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
