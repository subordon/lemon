
// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://lemon-coral.vercel.app",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    // image(),
    mdx(),
    sitemap(),
  ],
});