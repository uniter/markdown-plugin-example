/**
 * Example of how to use Uniter's experimental inline PHP Markdown plugin
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/markdown-plugin-example
 *
 * Released under the MIT license
 * https://github.com/uniter/markdown-plugin-example/raw/master/MIT-LICENSE.txt
 */

module.exports = {
    plugins: [
        // Import the Markdown plugin
        require('uniter-markdown-plugin'),
    ],
    settings: {
        phptojs: {
            lineNumbers: true,
            mode: 'psync',
        },
        phpify: {
            bootstraps: ['browser/bootstrap.js'],
            include: [
                'src/**/*.php',
                'vendor/**/*.php',
            ],
        },
    },
};
