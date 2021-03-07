<?php

use MyUniterProjects\MarkdownPluginExample\Markdown;

require_once __DIR__ . '/../vendor/autoload.php';

$markdown = new Markdown();

$domDocument->getElementById('main')->innerHTML = $markdown->getHtml();
