import path from 'path';
import merge from 'webpack-merge';
import base from './base.babel';

export default merge(base, {
    entry: path.resolve(__dirname, '../static-root/demoproject/vue/index.js'),

    output: {
        path: path.resolve(__dirname, '../static-root/build/demoproject/vue'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        publicPath: 'http://localhost:8081/build/demoproject/vue/'
    }
});
