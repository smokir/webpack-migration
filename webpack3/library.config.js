const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        library: '../library/library.js',
        'extension-a': '../library/extension-a.js',
        'extension-b': '../library/extension-b.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js',
        library: 'library',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'library',
            minChunks: 2
        })
    ]
};
