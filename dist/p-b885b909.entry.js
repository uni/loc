import{r as s,h as t,g as i}from"./p-22eccc22.js";import{u as c}from"./p-78249524.js";import{U as o}from"./p-cf0d344f.js";import{u as h,a,b as r}from"./p-2fce9a77.js";import"./p-f8ca667b.js";import"./p-6545c60c.js";import"./p-cafcfad3.js";const e=class{constructor(t){s(this,t),this.inactive=!1,this.once=!1,this.capture=!1,this.all=!1,this.prevent=!1,this.stop=!1}disconnect(){this.isConnected&&(h(this.el,this.listen),this.isConnected=!1)}connectedCallback(){a(this),this.isConnected=r(this)}render(){return this.disconnect(),a(this),this.isConnected=r(this),o(t("slot",null))}componentDidLoad(){c("uni-event-shadow","try-catch")}disconnectedCallback(){this.disconnect()}get el(){return i(this)}};export{e as uni_event_shadow}