const path = require('path');

module.exports = {
    entry: {
        'bundle.js': [
            './src/js/index.js',
            './src/js/modules/rpn.js'
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/dist/js' // for webpack server
    }
};