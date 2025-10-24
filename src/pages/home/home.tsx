import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Copy,
  ExternalLink,
  Link,
  SquareArrowOutUpLeftIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import OptionsMain from "./components/options-main";
import UsePictureDialog from "./components/use-picture-dilaog";
import QrGenerate from "./components/qr-generate";
import { useQrStore, type TABOPTIONS } from "@/store/useQrStore";
import DotsCompoents from "./components/dots-tab";
import CornersSquareComponents from "./components/corners-square-tab";
import CornersDotsComponents from "./components/corners-dots-tab";
import PictureComponents from "./components/picture-tab";
import TooltipButton from "@/components/custom_ui/tooltip-button";
import { toast } from "sonner";

const menuPaths = [
  {
    label: "main",
    icon: " ",
  },
  {
    label: "dots",
    icon: " ",
  },
  {
    label: "corners",
    icon: " ",
  },
  {
    label: "corners-dots",
    icon: " ",
  },
  {
    label: "picture",
    icon: " ",
  },
];

export default function HomePage() {
  const { data, tab, setTab } = useQrStore();
  return (
    <>
      <UsePictureDialog />
      <div className="flex flex-col gap-1.5 h-full">
        <Header />
        <div className="mt-7 flex items-center justify-between w-full h-full">
          <div className="flex flex-col gap-7">
            <QrGenerate />
            <div className="flex items-center gap-1.5 border px-3 py-1 rounded-md">
              <Link size={20} />
              <Input
                placeholder="get url here..."
                className="bg-transparent! border-0"
                defaultValue={data}
                value={data}
              />
              <TooltipButton
                icon={Copy}
                label="Copy"
                action={() => {
                  navigator.clipboard.writeText(data);
                  toast.success("Copied!");
                }}
              />
              <TooltipButton
                icon={ExternalLink}
                label="View Link"
                variant="secondary"
                size="sm"
                url={data}
                target="_blank"
              />
            </div>
          </div>
          {/* ----------------- */}
          <div className="flex flex-col justify-start gap-3 w-1/2 h-full mt-15">
            <div className="justify-start">
              <ul className="flex items-center text-sm bg-secondary rounded-md h-9 mb-5 overflow-hidden w-fit">
                {menuPaths.map((n, i) => (
                  <li
                    key={i}
                    onClick={() => setTab(n.label as TABOPTIONS)}
                    className={`h-full w-fit px-5 cursor-pointer capitalize flex items-center justify-center ${
                      tab === n.label
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {n.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {tab == "main" ? (
                <OptionsMain />
              ) : tab === "dots" ? (
                <DotsCompoents />
              ) : tab === "corners" ? (
                <CornersSquareComponents />
              ) : tab === "corners-dots" ? (
                <CornersDotsComponents />
              ) : tab === "picture" ? (
                <PictureComponents />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
