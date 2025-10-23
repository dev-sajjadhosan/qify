import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Link } from "lucide-react";
import OptionsMain from "./components/options-main";
import { useStore } from "@/store/userStore";
import UsePictureDialog from "./components/use-picture-dilaog";
import QrGenerate from "./components/qr-generate";
import { useQrStore } from "@/store/useQrStore";

const menuPaths = [
  {
    hash: "main",
    label: "main",
    icon: " ",
  },
  {
    hash: "dots",
    label: "dots",
    icon: " ",
  },
  {
    hash: "corners",
    label: "corners",
    icon: " ",
  },
  {
    hash: "corners_dots",
    label: "corners-dots",
    icon: " ",
  },
  {
    hash: "picture",
    label: "picture",
    icon: " ",
  },
];

export default function HomePage() {
  const { current, setCurrent } = useStore();
  const { data } = useQrStore();
  return (
    <>
      <UsePictureDialog />
      <div className="flex flex-col gap-1.5 h-full">
        <Header />
        <div className="mt-7 flex items-center justify-between w-full">
          <div className="flex flex-col gap-7">
            <QrGenerate />
            <div className="flex items-center gap-1.5 border px-3 py-1 rounded-md">
              <Link size={20} />
              <Input
                placeholder="get url here..."
                className="bg-transparent! border-0"
                defaultValue={data}
              />
              <Button variant={"ghost"}>
                <Copy /> Copy
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2 h-full">
            <div>
              <ul className="flex items-center text-sm bg-secondary rounded-md h-9 mb-5 overflow-hidden w-fit">
                {menuPaths.map((n, i) => (
                  <li
                    key={i}
                    onClick={() => setCurrent(n?.hash ?? "")}
                    className={`h-full w-fit px-5 cursor-pointer capitalize flex items-center justify-center ${
                      current === n.hash
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {n.label}
                  </li>
                ))}
              </ul>
            </div>
            <OptionsMain />
            {/* <div className="flex flex-col gap-1">
              <Label>Dot Options:</Label>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  "square",
                  "dots",
                  "rounded",
                  "extra rounded",
                  "classy",
                  "classy rounded",
                ].map((d, i) => (
                  <Button key={i}>{d}</Button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
