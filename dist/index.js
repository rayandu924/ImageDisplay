import { jsx as a } from "react/jsx-runtime";
import { useSettings as n, useFiles as o } from "@mywallpaper/sdk-react";
import { useState as p, useEffect as m } from "react";
function g() {
  const e = n(), { request: t, isFileReference: r } = o(), [l, i] = p(null);
  return m(() => {
    r(e.wallpaperImage) && t("wallpaperImage").then((s) => {
      s && i(s);
    });
  }, [e.wallpaperImage, t, r]), l ? /* @__PURE__ */ a(
    "img",
    {
      src: l,
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
  g as default
};
