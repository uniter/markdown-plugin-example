# PHP Markdown plugin example

An example of how to use [Uniter][]'s [experimental inline PHP Markdown plugin][].

## Usage

### Setup
```shell
$ git clone https://github.com/uniter/markdown-plugin-example.git
$ npm ci
$ composer install
```

### Command line test
```shell
$ npm start
```
You should see the expected output:
```
Here is your Markdown HTML:
<h3>My intro</h3><ul><li>Firstly, hello <em>Archie</em>, how are <em>you</em>?</li><li>Secondly, just where exactly did you go?</li></ul> 
```

### Browser test
```shell
$ npm run build:browser
$ open browser/browser.html
```
You should see the Markdown document rendered on the page.

[Uniter]: https://github.com/asmblah/uniter
[experimental inline PHP Markdown plugin]: https://github.com/uniter/markdown-plugin
