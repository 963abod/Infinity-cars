"use client";

import { useEffect, useState } from "react";
import KineticTextLoader from "./KineticTextLoader";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1600); // بتختفي بعد ثانية ونصف تقريباً

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070d18] transition-opacity duration-500">
      <KineticTextLoader text="Loading" />
    </div>
  );
}
