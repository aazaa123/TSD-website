module.exports = {

    // context: __dirname,
    //define entry point
    entry: './app/index.js',

    //define output point
    output: {
        path: __dirname,
        // publicPath: 'dist',
        filename: 'bundle.js'
    },

    module: {

        loaders: [

            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },

            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            },

            {
                test: /\.js?$/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'es2015']
                    }
                }

            }

        ]

    }

};
