import { Download, Github, Moon } from "lucide-react";
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
          <TooltipButton side="bottom" label="Dark" icon={Moon} />
          <TooltipButton
            side="bottom"
            variant="secondary"
            label="Github"
            icon={Github}
          />

          <Button variant={"secondary"}>
            <TbArrowDownFromArc />
            Export Json
          </Button>
          <div className="flex items-center gap-1 bg-secondary rounded-md overflow-hidden">
            <Button size={"sm"} variant={"default"} className="rounded-none">
              <Download />
              Download
            </Button>
            {/* <Separator orientation="vertical" className="h-5! bg-primary" /> */}
            <Select defaultValue="png">
              <SelectTrigger
                size="sm"
                className="w-[85px] bg-transparent! border-0"
              >
                <SelectValue placeholder="P-Type" />
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
