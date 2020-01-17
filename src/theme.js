module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.js',
            },
        },
        output: {
            devtoolModuleFilenameTemplate: './webpack/[resource-path]',
            chunkFilename: '[name].bundle.js',
        },

        optimization: {minimize: false}
    },
    breakpoints: {
        xs: "0em" /* 0px */,
        sm: "30em" /* 480px */,
        md: "64em" /* 1024px */,
        lg: "75em" /* 1200px */
    },
    colors: {
        primary: "#2c97de",
        secondary: "#7F8FA4",
        warning: "#f2c500",
        success: "#1fce6d",
        danger: "#e94b35",
        error: "#e94b35"
    },
}
