const path = require('path')

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app', 'dist', 'js')
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000
    },
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.s[sc]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}