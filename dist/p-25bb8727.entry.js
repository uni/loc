import{r as i,c as s,g as a}from"./p-22eccc22.js";import{u as r}from"./p-78249524.js";import{U as e}from"./p-3ee8c433.js";import"./p-cf0d344f.js";const o=class{constructor(a){i(this,a),this.uniDialogContainerInitialized=s(this,"uniDialogContainerInitialized",7)}render(){return e({classes:{"mdc-dialog__container":!0}})}componentDidLoad(){r("uni-dialog-container","default"),this.uniDialogContainerInitialized.emit(this.el)}get el(){return a(this)}},t=class{constructor(s){i(this,s)}render(){return e({classes:{"mdc-dialog__scrim":!0}})}componentDidLoad(){r("uni-dialog-scrim","defer")}},c=class{constructor(s){i(this,s),this.role="dialog",this.modal="true",this.labelled="uni-dialog-title",this.described="uni-dialog-content"}render(){const{role:i,modal:s,labelled:a,described:r}=this;return e({props:{role:i,"aria-modal":s,"aria-labelledby":a,"aria-describedby":r},classes:{"mdc-dialog__surface":!0}})}componentDidLoad(){r("uni-dialog-surface","header")}};export{o as uni_dialog_container,t as uni_dialog_scrim,c as uni_dialog_surface}