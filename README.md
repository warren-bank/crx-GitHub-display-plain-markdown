### [GitHub display plain markdown](https://github.com/warren-bank/crx-GitHub-display-plain-markdown/tree/greasemonkey-userscript)

[Userscript](https://github.com/warren-bank/crx-GitHub-display-plain-markdown/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-display-plain-markdown.user.js) for [GitHub](https://github.com/) to run in:
* the [WebMonkey](https://github.com/warren-bank/Android-WebMonkey) application
  - for Android
* the [Tampermonkey](https://www.tampermonkey.net/) web browser extension
  - for [Firefox/Fenix](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - for [Chrome/Chromium](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* the [Violentmonkey](https://violentmonkey.github.io/) web browser extension
  - for [Firefox/Fenix](https://addons.mozilla.org/firefox/addon/violentmonkey/)
  - for [Chrome/Chromium](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)

Its purpose is to:
* enhance the [markdown rendering capability on GitHub](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-markdown)
  - native behavior:
    * `?plain=0` _(default)_
      - render HTML from markdown
      - display within HTML page
    * `?plain=1`
      - display raw markdown
      - display within HTML page
  - enhanced behavior:
    * `?plain=2`
      - render HTML from markdown
      - remove all HTML page elements that are not rendered from markdown
      - example: [_./README.md_](https://github.com/warren-bank/crx-GitHub-display-plain-markdown/blob/greasemonkey-userscript/README.md?plain=2)

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
