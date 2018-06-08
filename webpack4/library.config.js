const path = require('path');

module.exports = {
    mode: 'production',
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
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                default: false,
                vendors: false,
                library: {
                    name: 'library',
                    minChunks: 2
                }
            }
        },
        runtimeChunk: false
    }
};
