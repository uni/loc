import{r as s,h as t,g as o}from"./p-22eccc22.js";import{i}from"./p-d018faa6.js";import{u as e}from"./p-c139f318.js";import{u as r}from"./p-3346d370.js";import"./p-5dc1f1c1.js";import"./p-4709fc07.js";import"./p-364ddc92.js";const p=class{constructor(t){s(this,t),this.spin=!1}componentWillLoad(){this.name=this.name||r(this.el)}render(){const s=i(this.name)?null:`uni-bs-${this.name}`;return t(s,null)}componentDidLoad(){const{el:s,color:t,size:o,angle:i,spin:r,speed:p,steps:c}=this;e({el:s,color:t,size:o,angle:i,spin:r,speed:p,steps:c,selector:"svg"})}get el(){return o(this)}};export{p as uni_icon_bs}