var __spreadArray=this&&this.__spreadArray||function(r,e){for(var t=0,n=e.length,a=r.length;t<n;t++,a++)r[a]=e[t];return r};System.register([],(function(r){"use strict";return{execute:function(){var e=function(r){var e=[];var t=0;var n;r=r.replace(/(\[[^\]]*\])/g,(function(r,n){var a="__ph-"+t+"__";e.push(n);t++;return a}));n=r.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(r,n,a){var s="__ph-"+t+"__";e.push(a);t++;return n+s}));var a={content:n,placeholders:e};return a};var t=function(r,e){return e.replace(/__ph-(\d+)__/g,(function(e,t){return r[+t]}))};var n="-shadowcsshost";var a="-shadowcssslotted";var s="-shadowcsscontext";var c=")(?:\\(("+"(?:\\([^)(]*\\)|[^)(]*)+?"+")\\))?([^,{]*)";var o=new RegExp("("+n+c,"gim");var i=new RegExp("("+s+c,"gim");var v=new RegExp("("+a+c,"gim");var u=n+"-no-combinator";var l=/-shadowcsshost-no-combinator([^\s]*)/;var f=[/::shadow/g,/::content/g];var p="([>\\s~+[.,{:][\\s\\S]*)?$";var h=/-shadowcsshost/gim;var g=/:host/gim;var d=/::slotted/gim;var m=/:host-context/gim;var _=/\/\*\s*[\s\S]*?\*\//g;var x=function(r){return r.replace(_,"")};var w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;var S=function(r){return r.match(w)||[]};var b=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;var W=/([{}])/g;var O="{";var j="}";var E="%BLOCK%";var R=function(r,e){var t=k(r);var n=0;return t.escapedString.replace(b,(function(){var r=[];for(var a=0;a<arguments.length;a++){r[a]=arguments[a]}var s=r[2];var c="";var o=r[4];var i="";if(o&&o.startsWith("{"+E)){c=t.blocks[n++];o=o.substring(E.length+1);i="{"}var v={selector:s,content:c};var u=e(v);return""+r[1]+u.selector+r[3]+i+u.content+o}))};var k=function(r){var e=r.split(W);var t=[];var n=[];var a=0;var s=[];for(var c=0;c<e.length;c++){var o=e[c];if(o===j){a--}if(a>0){s.push(o)}else{if(s.length>0){n.push(s.join(""));t.push(E);s=[]}t.push(o)}if(o===O){a++}}if(s.length>0){n.push(s.join(""));t.push(E)}var i={escapedString:t.join(""),blocks:n};return i};var y=function(r){r=r.replace(m,s).replace(g,n).replace(d,a);return r};var T=function(r,e,t){return r.replace(e,(function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}if(r[2]){var n=r[2].split(",");var a=[];for(var s=0;s<n.length;s++){var c=n[s].trim();if(!c)break;a.push(t(u,c,r[3]))}return a.join(",")}else{return u+r[3]}}))};var A=function(r,e,t){return r+e.replace(n,"")+t};var C=function(r){return T(r,o,A)};var L=function(r,e,t){if(e.indexOf(n)>-1){return A(r,e,t)}else{return r+e+t+", "+e+" "+r+t}};var B=function(r,e){var t="."+e+" > ";var n=[];r=r.replace(v,(function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}if(r[2]){var a=r[2].trim();var s=r[3];var c=t+a+s;var o="";for(var i=r[4]-1;i>=0;i--){var v=r[5][i];if(v==="}"||v===","){break}o=v+o}var l=o+c;var f=""+o.trimRight()+c.trim();if(l.trim()!==f.trim()){var p=f+", "+l;n.push({orgSelector:l,updatedSelector:p})}return c}else{return u+r[3]}}));return{selectors:n,cssText:r}};var I=function(r){return T(r,i,L)};var K=function(r){return f.reduce((function(r,e){return r.replace(e," ")}),r)};var $=function(r){var e=/\[/g;var t=/\]/g;r=r.replace(e,"\\[").replace(t,"\\]");return new RegExp("^("+r+")"+p,"m")};var M=function(r,e){var t=$(e);return!t.test(r)};var U=function(r,e,t){h.lastIndex=0;if(h.test(r)){var n="."+t;return r.replace(l,(function(r,e){return e.replace(/([^:]*)(:*)(.*)/,(function(r,e,t,a){return e+n+t+a}))})).replace(h,n+" ")}return e+" "+r};var q=function(r,n,a){var s=/\[is=([^\]]*)\]/g;n=n.replace(s,(function(r){var e=[];for(var t=1;t<arguments.length;t++){e[t-1]=arguments[t]}return e[0]}));var c="."+n;var o=function(r){var e=r.trim();if(!e){return""}if(r.indexOf(u)>-1){e=U(r,n,a)}else{var t=r.replace(h,"");if(t.length>0){var s=t.match(/([^:]*)(:*)(.*)/);if(s){e=s[1]+c+s[2]+s[3]}}}return e};var i=e(r);r=i.content;var v="";var l=0;var f;var p=/( |>|\+|~(?!=))\s*/g;var g=r.indexOf(u)>-1;var d=!g;while((f=p.exec(r))!==null){var m=f[1];var _=r.slice(l,f.index).trim();d=d||_.indexOf(u)>-1;var x=d?o(_):_;v+=x+" "+m+" ";l=p.lastIndex}var w=r.substring(l);d=d||w.indexOf(u)>-1;v+=d?o(w):w;return t(i.placeholders,v)};var z=function(r,e,t,n){return r.split(",").map((function(r){if(n&&r.indexOf("."+n)>-1){return r.trim()}if(M(r,e)){return q(r,e,t).trim()}else{return r.trim()}})).join(", ")};var D=function(r,e,t,n,a){return R(r,(function(r){var a=r.selector;var s=r.content;if(r.selector[0]!=="@"){a=z(r.selector,e,t,n)}else if(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document")){s=D(r.content,e,t,n)}var c={selector:a.replace(/\s{2,}/g," ").trim(),content:s};return c}))};var F=function(r,e,t,n,a){r=y(r);r=C(r);r=I(r);var s=B(r,n);r=s.cssText;r=K(r);if(e){r=D(r,e,t,n)}r=r.replace(/-shadowcsshost-no-combinator/g,"."+t);r=r.replace(/>\s*\*\s+([^{, ]+)/gm," $1 ");return{cssText:r.trim(),slottedSelectors:s.selectors}};var G=r("scopeCss",(function(r,e,t){var n=e+"-h";var a=e+"-s";var s=S(r);r=x(r);var c=[];if(t){var o=function(r){var e="/*!@___"+c.length+"___*/";var t="/*!@"+r.selector+"*/";c.push({placeholder:e,comment:t});r.selector=e+r.selector;return r};r=R(r,(function(r){if(r.selector[0]!=="@"){return o(r)}else if(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document")){r.content=R(r.content,o);return r}return r}))}var i=F(r,e,n,a);r=__spreadArray([i.cssText],s).join("\n");if(t){c.forEach((function(e){var t=e.placeholder,n=e.comment;r=r.replace(t,n)}))}i.slottedSelectors.forEach((function(e){r=r.replace(e.orgSelector,e.updatedSelector)}));return r}))}}}));