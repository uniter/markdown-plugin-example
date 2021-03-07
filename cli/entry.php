<?php

/**
 * Example of how to use Uniter's experimental inline PHP Markdown plugin
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/markdown-plugin-example
 *
 * Released under the MIT license
 * https://github.com/uniter/markdown-plugin-example/raw/master/MIT-LICENSE.txt
 */

use MyUniterProjects\MarkdownPluginExample\Markdown;

require_once __DIR__ . '/../vendor/autoload.php';

$markdown = new Markdown();

print 'Here is your Markdown HTML:' . PHP_EOL;
print $markdown->getHtml() . PHP_EOL;
