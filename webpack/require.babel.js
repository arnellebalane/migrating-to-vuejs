import path from 'path';
import merge from 'webpack-merge';
import base from './base.babel';

export default merge(base, {
    entry: {
        TheHeader: path.resolve(__dirname, '../static-root/demoproject/vue/amd-adapters/TheHeader.js')
    },

    output: {
        path: path.resolve(__dirname, '../static-root/build/demoproject/vue/amd-adapters'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: 'http://localhost:8081/build/demoproject/vue/',
        libraryTarget: 'amd',
        libraryExport: 'default'
    }
});
