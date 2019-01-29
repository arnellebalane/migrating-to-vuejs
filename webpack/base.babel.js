import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

export default {
    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /zepto\.js$/,
            loader: 'exports-loader',
            query: {
                Zepto: true
            }
        }]
    },

    resolve: {
        alias: {
            css: path.resolve(__dirname, '../static-root/demoproject/css'),
            js: path.resolve(__dirname, '../static-root/demoproject/js'),

            // Aliases for third-party dependencies
            zepto: path.resolve(__dirname, '../static-root/vendor/zepto/zepto.js')
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
