module.exports = {
  plugins: [
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
