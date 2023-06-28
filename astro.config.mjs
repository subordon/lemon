
// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://lemon-coral.vercel.app",
  experimental: {
    // assets: true,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    image(),
    mdx(),
    sitemap(),
  ],
});