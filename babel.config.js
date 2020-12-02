const plugins = [];
//ログを非表示する処理
if (process.env.VUE_APP_MODE === "production") {
    plugins.push(["transform-remove-console", { exclude: ["error", "warn"] }]);
}
module.exports = {
    plugins: plugins,
    presets: [
        [
            "@vue/app",
            {
                useBuiltIns: "entry",
                polyfills: ["es6.promise", "es6.symbol"],
            },
        ],
    ],
    comments: false,
};
