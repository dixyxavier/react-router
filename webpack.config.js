var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./src/app.jsx"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js(x?)/,
                exclude: /node_modules/,
                loader: 'react-hot'
            },
            {
                test: /\.js(x?)/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    include: __dirname + 'src',
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};