import{r as s,h as e,g as t}from"./p-22eccc22.js";import{i as o}from"./p-d6c0869d.js";import{u as r}from"./p-18a83605.js";import{u as i}from"./p-a7efbb84.js";import{u as p}from"./p-decc7691.js";import"./p-891c8e03.js";const n=class{constructor(e){s(this,e),this.type="filled",this.spin=!1}render(){const s=this.name||i(this.el),t=o(s)?null:`uni-mat-${p(this.type)}-${s}`;return e(t,null)}componentDidRender(){const{el:s,color:e,size:t,angle:o,spin:i,speed:p,steps:n}=this;r({el:s,color:e,size:t,angle:o,spin:i,speed:p,steps:n,selector:"svg"})}get el(){return t(this)}};export{n as uni_icon_mat}