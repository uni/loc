import{r as s,h as t}from"./p-22eccc22.js";import{u as e}from"./p-78249524.js";import{U as i}from"./p-3ee8c433.js";import{b as o}from"./p-509cb3e2.js";import"./p-cf0d344f.js";const p=class{constructor(t){s(this,t),this.icons="mat",this.spin=!1,this.only=!1}render(){const{type:s,name:e,color:p,size:r,angle:c,spin:n,speed:a,steps:m}=this,l={type:s,name:e,color:p,size:r,angle:c,spin:n,speed:a,steps:m},h=o();return i({classes:h},this.only?"":t(`uni-icon-${this.icons}`,Object.assign({},l),t("slot",null)))}componentDidLoad(){e("uni-list-item-graphic","agree")}};export{p as uni_list_item_graphic}