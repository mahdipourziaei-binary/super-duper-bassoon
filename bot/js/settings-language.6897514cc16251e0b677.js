(window.webpackJsonp=window.webpackJsonp||[]).push([["settings-language"],{710:function(e,a,n){"use strict";n.r(a);var t=n(6),g=n.n(t),l=n(2),s=n.n(l),c=n(0),i=n.n(c),r=n(7),u=n(8),_=n(244),o=function(e){return e===_.a},m=function(e){var a=e.children,n=e.lang;return i.a.createElement("div",{id:"dt_settings_".concat(n,"_button"),className:g()("settings-language__language-link",{"settings-language__language-link--active":o(n)})},a)},d=function(e){var a=e.lang;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{icon:"IconCountryFlag",className:"settings-language__language-link-flag settings-language__language-flag",type:a.replace(/(\s|_)/,"-").toLowerCase()}),i.a.createElement("span",{className:g()("settings-language__language-name",{"settings-language__language-name--active":o(a)})},Object(_.b)()[a]))};d.propTypes={lang:s.a.string},m.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,lang:s.a.string},a.default=function(){return i.a.createElement("div",{className:"settings-language"},i.a.createElement("div",{className:"settings-language__language-header"},i.a.createElement("span",null,i.a.createElement(r.a,{i18n_default_text:"Select language"}))),i.a.createElement("div",{className:"settings-language__language-container"},Object.keys(Object(_.b)()).map((function(e){return o(e)?i.a.createElement(m,{lang:e,key:e},i.a.createElement(d,{lang:e})):i.a.createElement("a",{id:"dt_settings_".concat(e,"_button"),key:e,href:Object(_.c)(e),className:g()("settings-language__language-link",{"settings-language__language-link--active":o(e)})},i.a.createElement(d,{lang:e,key:e}))}))))}}}]);
//# sourceMappingURL=settings-language.6897514cc16251e0b677.js.map