import{r as s,h as t}from"./p-22eccc22.js";import{u as e}from"./p-78249524.js";import{U as i}from"./p-3ee8c433.js";import"./p-cf0d344f.js";const o=class{constructor(t){s(this,t),this.icons="mat",this.spin=!1,this.only=!1}render(){const{icons:s,type:e,name:o,color:n,size:c,angle:p,spin:r,speed:a,steps:m}=this,l={icons:s,type:e,name:o,color:n,size:c,angle:p,spin:r,speed:a,steps:m};return i({classes:{"mdc-top-app-bar__action-item":!0}},this.only?t("slot",null):t("uni-icon-button",Object.assign({},l),t("slot",null)))}componentDidLoad(){e("uni-header-action-item","init")}};export{o as uni_header_action_item}