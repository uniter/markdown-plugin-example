<?php

/**
 * Example of how to use Uniter's experimental inline PHP Markdown plugin
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/markdown-plugin-example
 *
 * Released under the MIT license
 * https://github.com/uniter/markdown-plugin-example/raw/master/MIT-LICENSE.txt
 */

namespace MyUniterProjects\MarkdownPluginExample;

class Markdown
{
    public function getHtml()
    {
        $name = 'Archie';
        $where = 'just where exactly';

        // Use our custom inline Markdown syntax to embed a document
        $myMarkdownTree = markdown {
### My intro
- Firstly, hello *$name*, how are _you_?
- Secondly, $where did you go?
        };

        return $myMarkdownTree->toHtml();
    }
}
