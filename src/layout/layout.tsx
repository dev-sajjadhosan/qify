import HomePage from "@/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Layout() {
  return (
    <div className="px-5.5 py-3.5 w-11/12 rounded-2xl shadow-2xs border">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
