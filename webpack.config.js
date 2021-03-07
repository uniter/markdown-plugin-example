/**
 * Example of how to use Uniter's experimental inline PHP Markdown plugin
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/markdown-plugin-example
 *
 * Released under the MIT license
 * https://github.com/uniter/markdown-plugin-example/raw/master/MIT-LICENSE.txt
 */

module.exports = {
    context: __dirname,
    // You can simply use a PHP script as your browser entrypoint -
    // any relevant config in uniter.config.js (like we're using to pull in
    // the Markdown plugin in this case) will be applied as necessary
    entry: './browser/entry.php',
    module: {
        rules: [
            {
                test: /\.php$/,
                use: 'uniter-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'browser.js'
    }
};
