import{p as e,H as o}from"./p-1e3a44cd.js";const t="undefined"!=typeof Deno,n=!(t||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),s=(t&&Deno,n?process:t&&Deno,n?process:t&&Deno,()=>e()),r=()=>{i(o.prototype);const t=import.meta.url,n={};return""!==t&&(n.resourcesUrl=new URL(".",t).href),e(n)},i=e=>{const o=e.cloneNode;e.cloneNode=function(e){if("TEMPLATE"===this.nodeName)return o.call(this,e);const t=o.call(this,!1),n=this.childNodes;if(e)for(let e=0;e<n.length;e++)2!==n[e].nodeType&&t.appendChild(n[e].cloneNode(!0));return t}};export{s as a,r as p}