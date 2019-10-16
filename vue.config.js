// vue cli3.5 config by wangyong
module.exports = {
    publicPath: './', //root
    outputDir: 'dist', //root name
    assetsDir: 'source', //source name
    lintOnSave: false, // close esLint
    productionSourceMap: false, //close SourceMap

    devServer: {
        proxy: {
            // '/collect': 'http://localhost:8888/',
            '/myjson': {
                target: 'https://api.myjson.com', // 接口域名
                secure: false, // https配置false
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/myjson': '',
                }
            }
        },
        // host: 'localhost',
        port: 8299,
        open: true
    },

    pluginOptions: { // 第三方插件配置
        // 'style-resources-loader': {
        //     preProcessor: 'scss', //声明类型
        //     'patterns': [
        //     ],
        // }
    },

    css: {
        sourceMap: false,
        loaderOptions: {
            sass: {
                data: `@import "@/assets/style/global.scss";`
            }
        }

    },
    chainWebpack:config=>{
        if(process.env.use_analyzer){ 
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            }
        if(process.env.NODE_ENV === 'production'){
            config
                .plugin('compression-webpack-plugin')
                .use(require.resolve('compression-webpack-plugin'),[{
                    test:/\.js$|\.html$|\.css$/,
                    threshold:10240,
                    deleteOriginalAssets:false//是否删除原有文件
                }])
            config
                .plugin('UglifyJsPlugin')
                .use(require.resolve('uglifyjs-webpack-plugin'),[{
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        }
                      }
                }])
                // config.module
                // .rule(/\.(png|jpg|jpeg|gif)$/)
                // .use('url-loader')
                // .loader('url-loader')
                // .options({
                //     limit:50000 , //表示低于50000字节（50K）的图片会以 base64编码
                // })
        }
    }
}