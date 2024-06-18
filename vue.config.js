const version = new Date().getTime();
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
            includeLocales: false,
            enableBridge: true
        }
    },


    devServer: {
        https: false,
        hotOnly: true, //是否开启热更新
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // '/api': {
            //     target: 'https://tophis.net', // 代理的目标地址
            //     changeOrigin: true, // 是否改变源
            //     pathRewrite: {
            //         // '^/api/app': '' // 路径重写，将/api开头的请求转发到目标地址
            //     }
            // }
            //
            '/api': {
                target: 'http://43.136.88.180:18081', // 代理的目标地址
                changeOrigin: true, // 是否改变源
                pathRewrite: {
                    '^/api/app': '' // 路径重写，将/api开头的请求转发到目标地址
                }
            }
        },
    },
    css: {
        sourceMap: false,
        extract: {
            filename: `static/css/[name].${version}.css`,
            chunkFilename: `static/css/[name].${version}.css`,
        }

    },
    configureWebpack: {
        output: {
            filename: `static/js/[name].${version}.js`,
            chunkFilename: `static/js/[name].${version}.js`
        },
    }


};
