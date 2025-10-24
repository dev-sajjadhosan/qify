import { Download, Github, Moon, Sun } from "lucide-react";
import TooltipButton from "../custom_ui/tooltip-button";
import { Button } from "../ui/button";
import { TbArrowDownFromArc } from "react-icons/tb";
import { Link } from "react-router";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQrStore, type PICTUREEXTENSION } from "@/store/useQrStore";
import { toast } from "sonner";

const menuPaths = [
  {
    path: "/",
    label: "home",
    icon: "",
  },
  {
    path: "/about",
    label: "about",
    icon: " ",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("/");
  const qrInstance = useQrStore((s) => s.qrInstance);
  const { pictureExtension, setPictureExtension, theme, setTheme } =
    useQrStore();

  const handleDownload = (ext: "png" | "jpeg" | "webp" | "svg") => {
    if (!qrInstance) {
      toast.warning("QR code not ready yet");
      return;
    }
    qrInstance.download({
      name: `qr_${new Date().toISOString().split("T")[0]}`,
      extension: ext,
    });
  };

  return (
    <>
      <header className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-md">Qify</h3>
        </div>
        <div>
          <ul className="flex items-center gap-2 text-sm">
            {menuPaths.map((n, i) => (
              <Link
                key={i}
                to={n.path ? n.path : ""}
                onClick={() => setCurrent(n?.path)}
              >
                <li
                  className={`px-3 py-1 rounded-sm cursor-pointer capitalize ${
                    current === n.path
                      ? "bg-secondary text-secondary-foreground"
                      : ""
                  }`}
                >
                  {n.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <TooltipButton
            side="bottom"
            label={theme === "dark" ? "Light" : "Dark"}
            icon={theme === "dark" ? Moon : Sun}
            action={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          {/* <TooltipButton side="bottom" label="Light" icon={Sun} /> */}
          <TooltipButton
            side="bottom"
            variant="secondary"
            label="Github"
            icon={Github}
            url="https://github.com/dev-sajjadhosan/qify"
          />

          <Button variant={"secondary"}>
            <TbArrowDownFromArc />
            Export Json
          </Button>
          <div className="flex items-center gap-1 bg-secondary rounded-sm overflow-hidden">
            <Button
              // size={"sm"}
              variant={"default"}
              className="rounded-none"
              onClick={() =>
                handleDownload(
                  pictureExtension as "png" | "jpeg" | "webp" | "svg"
                )
              }
            >
              <Download />
              Download
            </Button>
            {/* <Separator orientation="vertical" className="h-5! bg-primary" /> */}
            <Select
              defaultValue="png"
              onValueChange={(v) => setPictureExtension(v as PICTUREEXTENSION)}
            >
              <SelectTrigger
                size="sm"
                defaultValue={pictureExtension}
                className="w-[85px] bg-transparent! border-0"
              >
                <SelectValue
                  placeholder="P-Type"
                  defaultValue={pictureExtension}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="svg">SVG</SelectItem>
                <SelectItem value="jpeg">JPEG</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
    </>
  );
}
