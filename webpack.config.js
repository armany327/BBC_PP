path = require('path');
LiveReloadPlugin = require('webpack-livereload-plugin');
wp = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: "./main.js"
    },
    output: {
        path: path.join(__dirname, 'static/js'),
        filename: "main.bundle.js"
    },
    plugins: [
        new LiveReloadPlugin(
            {
                'appendScriptTag': true
            }
        )
    ]
};