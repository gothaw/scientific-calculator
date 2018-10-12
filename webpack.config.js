const path = require('path');

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/js/index.js'),
            path.resolve(__dirname, 'src/js/modules/input-stack.js'),
            path.resolve(__dirname, 'src/js/modules/shunting-yard.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/dist/js' // for webpack server
    },
};