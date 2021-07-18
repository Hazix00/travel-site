﻿const path = require('path')

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist', 'js')
    },
    mode: 'development',
    watch: true
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader', 'postcss-loader']
    //         }
    //     ]
    // }
}