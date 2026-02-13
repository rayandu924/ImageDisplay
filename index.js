import { jsx as o } from "react/jsx-runtime";
import { useSettings as a, useFiles as p } from "@mywallpaper/sdk-react";
import { useState as f, useEffect as m } from "react";
function F() {
  const e = a(), { request: t, isFileReference: l } = p(), [r, n] = f(null);
  m(() => {
    l(e.wallpaperImage) && t("wallpaperImage").then((s) => {
      s && n(s);
    });
  }, [e.wallpaperImage, t, l]);
  const i = r || e.imageUrl || null;
  return i ? /* @__PURE__ */ o(
    "img",
    {
      src: i,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        pointerEvents: "none"
      }
    }
  ) : null;
}
export {
  F as default
};
