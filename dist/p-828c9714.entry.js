import{r as s,h as t,g as i}from"./p-ac3aee25.js";import"./p-e87a614e.js";import"./p-478d6391.js";import"./p-027d9aaa.js";import{u as e}from"./p-c50d5ec8.js";import{U as h}from"./p-4f6e4e3e.js";import{u as a,a as o,b as r}from"./p-8ddb3312.js";const c=class{constructor(t){s(this,t),this.inactive=!1,this.once=!1,this.capture=!1,this.all=!1,this.prevent=!1,this.stop=!1,this.bindStart="{{",this.bindEnd="}}"}disconnect(){this.isConnected&&(a(this.el,this.listen),this.isConnected=!1)}connectedCallback(){o(this),this.isConnected=r(this)}render(){return this.disconnect(),o(this),this.isConnected=r(this),h(t("slot",null))}componentDidLoad(){e("uni-event-shadow","try-catch")}disconnectedCallback(){this.disconnect()}get el(){return i(this)}};export{c as uni_event_shadow}