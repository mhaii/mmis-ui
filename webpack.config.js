const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

let loaders = {
    js: {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-1']
        }
    }
};

let plugins = [];

if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, output: { comments: false } }));
}


module.exports = [
    {
        entry: path.join(__dirname, 'server.js'),
        output: {
            path: path.join(__dirname),
            filename: 'server.bundle.js',
        },
        module: {
            loaders: [
                loaders.js
            ]
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        plugins: plugins
    },
    {
        entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            path: path.join(__dirname, 'public', 'js'),
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [
                loaders.js
            ]
        },
        plugins: plugins
    },
    {
        entry: path.join(__dirname, 'src', 'stylesheets', 'style.sass'),
        output: {
            path: path.join(__dirname, 'public', 'css'),
            filename: 'style.css',
        },
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                    })
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
             filename: 'style.css'
            })
        ]
    }
];
