import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQrStore } from "@/store/useQrStore";
import { ImagePlus, ImageUp, Trash2 } from "lucide-react";

export default function UploadSection() {
  const { logo, setLogo, usePicture, setUsePicture } = useQrStore();
  return (
    <>
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
    </>
  );
}
