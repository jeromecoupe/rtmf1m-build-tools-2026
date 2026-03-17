// plugins
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

// collections
import { projects } from "./src/_11ty/collections/projects.js";

// filters
import { limit } from "./src/_11ty/filters/limit.js";

/**
 * Main eleventy config function
 * - Using Eleventy API
 * - Copy files and folders,
 * - Create collections, custom filters, etc.
 * - Configure server
 * - etc.
 * @param {*} eleventyConfig 
 */
export default function (eleventyConfig) {
  // limit filter
  eleventyConfig.addFilter("limit", limit);

  // collection projects
  eleventyConfig.addCollection("projects", projects);


  // configure dev server
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/css/**/*", "./dist/assets/js/**/*"]
  });

  // ignores: do not process assets files (handled by build pipeline)
  //watchIgnores: do not watching assets files for change
  eleventyConfig.ignores.add("./src/assets/**/*");
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // copy fonts and images to dist
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/**/*");
  eleventyConfig.addPassthroughCopy("./src/assets/img/**/*");

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight);
}

/**
 * Main eleventy config object
 * - Overrides default config directories: input, output, data, includes folders
 * - templating formats and languages
 */
export const config = {
  dir: {
    input: "src",
    output: "dist",
    data: "_data",
    includes: "_includes"
  },
  templateFormats: ["njk", "md", "html"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};