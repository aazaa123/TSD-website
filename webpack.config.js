var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


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
                loader: 'style-loader!css-loader!sass-loader',
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

    },

    plugins: [

        new BrowserSyncPlugin(
          // BrowserSync options
          {
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/'
          },
          // plugin options
          {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
          }
        )
  ]

};
