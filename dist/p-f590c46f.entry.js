import{r as s,c as t,h as i,g as e}from"./p-22eccc22.js";import{i as r}from"./p-f8ca667b.js";import{u as o}from"./p-6545c60c.js";import{u as a}from"./p-78249524.js";import{U as n}from"./p-3ee8c433.js";import{u as p}from"./p-fabd1ad7.js";import"./p-cf0d344f.js";const c=class{constructor(i){s(this,i),this.uniReplaced=t(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.bindStart="{{",this.bindEnd="}}"}render(){return n({props:{hidden:!1}},i("slot",null))}componentDidRender(){const{el:s,bindStart:t,bindEnd:i,uniReplaced:e}=this,a={el:s,state:o(this.state),bindStart:t,bindEnd:i,uniReplaced:e};r(this.state)&&(this.inactive?this.activate&&p(a):p(a)),setTimeout((()=>this.activate=!1))}componentDidLoad(){a("uni-replace-shadow","filter")}get el(){return e(this)}};export{c as uni_replace_shadow}