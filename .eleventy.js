module.exports = function(eleventyConfig) {
  // Add markdown-it for better markdown processing
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let md = markdownIt(options);
  eleventyConfig.setLibrary("md", md);
  
  // Add markdown filter for templates
  eleventyConfig.addFilter("markdown", function(content) {
    return md.render(content);
  });

  // Add passthrough for UTF-8 filenames
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({
    "src/content/*.md": "content"
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Handle markdown files
  eleventyConfig.addCollection("concepts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/*.md");
  });

  // Configure input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
