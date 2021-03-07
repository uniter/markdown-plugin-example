/**
 * Example of how to use Uniter's experimental inline PHP Markdown plugin
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/markdown-plugin-example
 *
 * Released under the MIT license
 * https://github.com/uniter/markdown-plugin-example/raw/master/MIT-LICENSE.txt
 */

module.exports = function (engine) {
    engine.defineGlobal('domDocument', document);
};
