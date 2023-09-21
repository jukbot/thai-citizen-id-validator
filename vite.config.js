module.exports = {
  cors: {
    origin: "http://localhost:3000",
  },
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
      fileName: "validator.min.js",
    },
  },
};
