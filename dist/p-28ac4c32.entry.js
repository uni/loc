import{r as s,h as i,g as t}from"./p-22eccc22.js";import{i as e}from"./p-d6c0869d.js";import{u as n}from"./p-18a83605.js";import{u as r}from"./p-a7efbb84.js";import"./p-891c8e03.js";const o=class{constructor(i){s(this,i),this.img=!1,this.url="https://cdn.jsdelivr.net/npm/@uiwebkit/icn",this.version="0.1.0",this.alter="uni-icon-bi",this.spin=!1}render(){const s=this.name||r(this.el),t=e(s)?null:`uni-bi-${s}`;return this.img?i("img",{src:`${this.url}@${this.version}/dist/assets/svg/bi/${s}.svg`,alt:this.alter}):i(t,null)}componentDidRender(){const{el:s,color:i,size:t,angle:e,spin:r,speed:o,steps:c}=this;n({el:s,color:i,size:t,angle:e,spin:r,speed:o,steps:c,selector:this.img?"img":"svg"})}get el(){return t(this)}};export{o as uni_icon_bi}