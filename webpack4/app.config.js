const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './app/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    optimization: {
        minimize: false
    }
};
