import{M}from"./modal-195e646f.js";import{_ as b,o as p,c as u,d as e,k as c,v as r,x as y,r as m,e as h,F as $,g as x,t as _}from"./index-e3b22acb.js";import{D as k}from"./DeleteModal-da3a7779.js";import"./component-functions-848d0fd3.js";const w={name:"couponModal",props:{coupon:{}},data(){return{modal:{},tempCoupon:{},due_date:""}},emits:["update-coupon"],methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mounted(){this.modal=new M(this.$refs.modal)}},D={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},L={class:"modal-dialog",role:"document"},V={class:"modal-content"},U=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},j={class:"mb-3"},T=e("label",{for:"title"},"標題",-1),B={class:"mb-3"},I=e("label",{for:"coupon_code"},"優惠碼",-1),S={class:"mb-3"},F=e("label",{for:"due_date"},"到期日",-1),O={class:"mb-3"},A=e("label",{for:"price"},"折扣百分比",-1),E={class:"mb-3"},P={class:"form-check"},q=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),z={class:"modal-footer"},G=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function H(s,o,i,a,t,d){return p(),u("div",D,[e("div",L,[e("div",V,[U,e("div",N,[e("div",j,[T,c(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=n=>t.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[r,t.tempCoupon.title]])]),e("div",B,[I,c(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=n=>t.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[r,t.tempCoupon.code]])]),e("div",S,[F,c(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),e("div",O,[A,c(e("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[3]||(o[3]=n=>t.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",E,[e("div",P,[c(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[y,t.tempCoupon.is_enabled]]),q])])]),e("div",z,[G,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>s.$emit("update-coupon",t.tempCoupon))},"更新優惠券 ")])])])],512)}const J=b(w,[["render",H]]),K={components:{CouponModal:J,DelModal:k},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},inject:["emitter"],methods:{openCouponModal(s,o){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...o},this.$refs.couponModal.showModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.showModal()},getCoupons(){this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/api/roger8426-api/admin/coupons";this.$http.get(s,this.tempProduct).then(o=>{this.coupons=o.data.coupons,this.isLoading=!1})},updateCoupon(s){this.tempCoupon=s;let o="https://vue3-course-api.hexschool.io/api/roger8426-api/admin/coupon",i="post";this.isNew||(o=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/coupon/${this.tempCoupon.id}`,i="put"),this.isLoading=!0,this.$http[i](o,{data:this.tempCoupon}).then(a=>{if(a.data.success)this.emitter.emit("push-message",{style:"primary",title:"更新成功"});else{const t=typeof a.data.message=="string"?[a.data.message]:a.data.message;this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.join("、")})}this.$refs.couponModal.hideModal(),this.getCoupons()})},delCoupon(){const s=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(o=>{if(o.data.success)this.getCoupons(),this.emitter.emit("push-message",{style:"success",title:"成功刪除優惠券"});else{const i=typeof o.data.message=="string"?[o.data.message]:o.data.message;this.emitter.emit("push-message",{style:"danger",title:"刪除優惠券失敗",content:i.join("、")}),this.isLoading=!1}this.$refs.delModal.hideModal(),this.getCoupons()})}},created(){this.getCoupons()}},Q={class:"container"},R={class:"text-end mt-4"},W={class:"table mt-4"},X=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),Y={key:0,class:"text-success"},Z={key:1,class:"text-info"},ee={class:"btn-group"},oe=["onClick"],te=["onClick"];function se(s,o,i,a,t,d){const n=m("LoadingView"),C=m("couponModal"),f=m("DelModal");return p(),u("div",Q,[h(n,{active:t.isLoading},null,8,["active"]),e("div",R,[e("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=l=>d.openCouponModal(!0))}," 建立新優惠券 ")]),e("table",W,[X,e("tbody",null,[(p(!0),u($,null,x(t.coupons,(l,g)=>(p(),u("tr",{key:g},[e("td",null,_(l.title),1),e("td",null,_(l.percent)+"%",1),e("td",null,_(s.$filters.date(l.due_date)),1),e("td",null,[l.is_enabled===1?(p(),u("span",Y,"啟用")):(p(),u("span",Z,"未啟用"))]),e("td",null,[e("div",ee,[e("button",{class:"btn btn-outline-primary btn-sm",onClick:v=>d.openCouponModal(!1,l)},"編輯",8,oe),e("button",{class:"btn btn-outline-danger btn-sm",onClick:v=>d.openDelCouponModal(l)},"刪除",8,te)])])]))),128))])]),h(C,{coupon:t.tempCoupon,ref:"couponModal",onUpdateCoupon:d.updateCoupon},null,8,["coupon","onUpdateCoupon"]),h(f,{item:t.tempCoupon,ref:"delModal",onDelItem:d.delCoupon},null,8,["item","onDelItem"])])}const de=b(K,[["render",se]]);export{de as default};
