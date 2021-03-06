module.exports = {
    entry: './src/app.js',
    output:{
        filename: 'app.bundle.js',
        path: __dirname + '/public/js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}