import { jsx as a } from "react/jsx-runtime";
import { useSettings as n, useFiles as p } from "@mywallpaper/sdk-react";
import { useState as c, useEffect as u } from "react";
function y() {
  const e = n(), { request: t, isFileReference: l } = p(), [i, o] = c(null);
  u(() => {
    e.sourceType === "local" && l(e.wallpaperImage) && t("wallpaperImage").then((s) => {
      s && o(s);
    });
  }, [e.sourceType, e.wallpaperImage, t, l]);
  const r = e.sourceType === "url" ? e.imageUrl : i;
  return r ? /* @__PURE__ */ a(
    "img",
    {
      src: r,
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
  y as default
};
