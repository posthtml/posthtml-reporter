[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![code style][style]][style-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="110" height="100" title="PostHTML Reporter" vspace="50" src="http://posthtml.github.io/posthtml-reporter/logo.svg">
  <a href="https://github.com/posthtml/posthtml">
    <img width="220" height="200" title="PosHTML"           src="http://posthtml.github.io/posthtml/logo.svg">
  </a>
  <h1>Reporter Plugin</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-reporter
```

<h2 align="center">Usage</h2>

Reporter Plugin to display PostHTML Messages (`result.messages`) on various Interfaces

> :warning: Add this plugin as the last in your plugins array to work properly

<h2 align="center">Options</h2>

|Name|Default|Description|
|:--:|:-----:|:----------|
|console|true|Display messages on the Console|
|browser|false|Display messages in the Browser|
|notify |false|Display messages via Push Notification|

### Console

Display ❌ Error(s), ⚠️ Warnings(s) and ♻️ Dependencies by default

### Browser (WIP)

### Notify (WIP)


<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://github.com/michael-ciniawsky.png?v=3&s=150">
        <br>
        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/posthtml-reporter.svg
[npm-url]: https://npmjs.com/package/posthtml-reporter

[node]: https://img.shields.io/node/v/posthtml-reporter.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/posthtml-reporter.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-reporter

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[tests]: http://img.shields.io/travis/posthtml/posthtml-reporter.svg
[tests-url]: https://travis-ci.org/posthtml/posthtml-reporter

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-reporter/badge.svg
[cover-url]: https://coveralls.io/github/posthtml/posthtml-reporter

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-url]: https://gitter.im/posthtml/posthtml
