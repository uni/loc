import{r as s,c as i,g as t}from"./p-22eccc22.js";import{a as h}from"./p-ee95c732.js";import{u as o}from"./p-78249524.js";import{b as a}from"./p-5a84e352.js";import"./p-1f16e2cb.js";const r=class{constructor(t){s(this,t),this.uniLoadStart=i(this,"uniLoadStart",7),this.uniLoadFinish=i(this,"uniLoadFinish",7),this.uniLoadSuccess=i(this,"uniLoadSuccess",7),this.uniLoadWrapInitialized=i(this,"uniLoadWrapInitialized",7),this.activate=!1,this.inactive=!1,this.method="get",this.response="json",this.bindStart="{{",this.bindEnd="}}"}componentDidRender(){(!this.inactive||this.activate||h(this.inactiveBind,this.bindStart,this.bindEnd))&&a(this.el,this.response,this.uniLoadSuccess),setTimeout((()=>this.activate=!1))}componentDidLoad(){o("uni-load-wrap","for"),this.uniLoadWrapInitialized.emit()}get el(){return t(this)}};export{r as uni_load_wrap}