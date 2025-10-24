import { Button } from "@/components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import { useNavigate } from "react-router";

export default function AboutPage() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-3">
      <>
        <Button variant={"secondary"} onClick={() => nav(-1)}>
          <ArrowBigLeftDash />
        </Button>
        <h1 className="text-4xl font-normal mb-2 self-center">About Qify</h1>
        <p className="text-lg mb-3 text-center">
          Qify is a professional web application for generating, customizing,
          and managing QR codes. This project was created to enhance my
          knowledge of modern web development using React and TypeScript, with a
          focus on educational use cases.
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Key Features: </h2>
          <ul className="list-decimal flex flex-col gap-3 px-13">
            <li>
              Instantly generate QR codes for URLs, text, contact details, and
              more
            </li>
            <li>
              Advanced customization: colors, styles, and branding options
            </li>
            <li>High-resolution downloads (PNG, SVG)</li>
            <li>Organize and manage your QR code history with ease</li>
            <li>Mobile-friendly and responsive design</li>
            <li>Privacy-focused: your data stays on your device</li>
          </ul>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">Technology</h2>
          <p className="">
            Qify is built with{" "}
            <span className="font-medium text-destructive">React</span> and{" "}
            <span className="font-medium text-destructive">Tailwind CSS</span>{" "}
            for a fast, modern user experience. The project is open source and
            welcomes contributions from the community.
          </p>
        </div>
        <div className="text-center text-md text-neutral-600 self-end">
          &copy; {new Date().getFullYear()} Qify. Free and open source.
        </div>
      </>
    </div>
  );
}
