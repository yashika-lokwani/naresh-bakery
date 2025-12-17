import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Naresh Bakers Menu",
    short_name: "Naresh Bakers Menu",
    description: "",
    display: "standalone",
    start_url: "/",
    theme_color: "#ec2127",
    background_color: "#ec2127",
    scope: "/",
    orientation: "any",
    icons: [
      // {
      //   src: "icons/icon-16x16.png",
      //   sizes: "16x16",
      //   type: "image/png",
      // },
      // {
      //   src: "icons/icon-32x32.png",
      //   sizes: "32x32",
      //   type: "image/png",
      // },
      // {
      //   src: "icons/icon-48x48.png",
      //   sizes: "48x48",
      //   type: "image/png",
      // },
      // {
      //   src: "icons/icon-64x64.png",
      //   sizes: "64x64",
      //   type: "image/png",
      // },
      {
        src: "icons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "icons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
