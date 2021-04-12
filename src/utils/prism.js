import Prism from 'prismjs';

export function highlightCSS (snippet) {
  return Prism.highlight(snippet, Prism.languages.css, 'css')
}

export function highlightJS (snippet) {
  return Prism.highlight(snippet, Prism.languages.javascript, 'javascript')
}

export function highlightSVG (snippet) {
  return Prism.highlight(snippet, Prism.languages.svg, 'svg')
}
