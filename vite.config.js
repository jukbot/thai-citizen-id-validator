module.exports = {
  test: {
    coverage: {
      provider: "istanbul",
    },
  },
  build: {
    minify: "esbuild",
    outDir: "./dist",
    lib: {
      entry: "./lib/validator.js",
      name: "validateThaiID",
      fileName: (format) => `validator.${format}.js`,
    },
  },
};
