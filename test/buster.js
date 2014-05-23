var config = module.exports;

config["Browser Tests"] = {
  rootPath: "../",
  libs: [
    "public/js/libs/require.js",
    "test/config-require.js"
  ],
  environment: "browser",
  sources: [
    "public/js/**/*.js"
  ],
  tests: [
    "test/unit/**/*-test.js"
  ],
  extensions: [
    require("buster-amd"),
    require("buster-istanbul")
  ],
  "buster-amd": {
    pathMapper: function(path) {
      return "../../" + path.replace(/\.js$/, "").replace(/^\//, "");
    }
  },
  "buster-istanbul": {
    outputDirectory: "target/coverage",
    formats: ["html", "cobertura"]
  }
};
