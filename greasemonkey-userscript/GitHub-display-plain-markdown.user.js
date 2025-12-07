// ==UserScript==
// @name         GitHub display plain markdown
// @description  Remove all HTML page elements that are not rendered from markdown, when viewing a markdown blob in any GitHub repo from a URL with the querystring parameter "plain=2"
// @version      1.2.0
// @include      /^https?:\/\/(?:[^\.\/]*\.)*github\.com\/[^\/]+\/[^\/]+\/blob\/.+\.(?:md|markdown|mdown|mkdn)(\?.*)?$/
// @icon         https://github.githubassets.com/favicons/favicon.png
// @run-at       document-end
// @homepage     https://github.com/warren-bank/crx-GitHub-display-plain-markdown/tree/greasemonkey-userscript
// @supportURL   https://github.com/warren-bank/crx-GitHub-display-plain-markdown/issues
// @downloadURL  https://github.com/warren-bank/crx-GitHub-display-plain-markdown/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-display-plain-markdown.user.js
// @updateURL    https://github.com/warren-bank/crx-GitHub-display-plain-markdown/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-display-plain-markdown.user.js
// @namespace    warren-bank
// @author       Warren Bank
// @copyright    Warren Bank
// ==/UserScript==

// ----------------------------------------------------------------------------- CSP

// add support for CSP 'Trusted Type' assignment
var add_default_trusted_type_policy = function() {
  if (typeof unsafeWindow.trustedTypes !== 'undefined') {
    try {
      var passthrough_policy = function(string) {return string}

      unsafeWindow.trustedTypes.createPolicy('default', {
          createHTML:      passthrough_policy,
          createScript:    passthrough_policy,
          createScriptURL: passthrough_policy
      })
    }
    catch(e) {}
  }
}

// ----------------------------------------------------------------------------- helpers

var empty_element = function(el) {
  while (el.childNodes.length)
    el.removeChild(el.childNodes[0])
}

// ----------------------------------------------------------------------------- DOM modifiers

var process_markdown_page_content = function() {
  var md_content = unsafeWindow.document.querySelector('article.markdown-body')
  if (!md_content) return

  var body = unsafeWindow.document.body
  empty_element(body)
  body.appendChild(md_content)

  // css tweaks
  md_content.classList.remove('container-lg')
  conditionally_change_body_padding()

  // tweak HTML attributes
  conditionally_open_links_in_new_tab()
}

var conditionally_change_body_padding = function() {
  var qs_regex = /[\?&]padding=([^&]+)(?:&|$)/
  var qs = unsafeWindow.location.search
  var match = qs_regex.exec(qs)
  if (!match || !match[1]) return

  var padding = decodeURIComponent(match[1])

  if (/^\d+$/.test(padding))
    padding = padding + 'px'

  var body = unsafeWindow.document.body
  body.style.padding = padding
}

var conditionally_open_links_in_new_tab = function() {
  var qs_regex = /[\?&]target=_?blank(?:&|$)/
  var qs = unsafeWindow.location.search
  if (!qs_regex.test(qs)) return

  var anchors = unsafeWindow.document.querySelectorAll('a[href]')
  for (var i=0; i < anchors.length; i++) {
    anchors[i].setAttribute('target', '_blank')
  }
}

// ----------------------------------------------------------------------------- bootstrap

var init = function() {
  var qs_regex = /[\?&]plain=2(?:&|$)/
  var qs = unsafeWindow.location.search
  if (!qs_regex.test(qs)) return

  add_default_trusted_type_policy()
  process_markdown_page_content()
}

init()
