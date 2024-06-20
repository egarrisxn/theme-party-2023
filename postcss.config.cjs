module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        'nesting-rules': true
      },
      autoprefixer: { grid: true }
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
