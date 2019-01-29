import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

export default {
    entry: path.resolve(__dirname, 'static-root/demoproject/vue/index.js'),

    output: {
        path: path.resolve(__dirname, 'static-root/build/demoproject/vue'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        publicPath: 'http://localhost:8081/build/demoproject/vue/'
    },

    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },

    resolve: {
        alias: {
            css: path.resolve(__dirname, 'static-root/demoproject/css'),
            js: path.resolve(__dirname, 'static-root/demoproject/js')
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
