import{D as v}from"./DeleteModal-81e4deb3.js";import{M as x}from"./modal-ff10d495.js";import{_ as f,o as d,c as l,a as t,t as o,d as b,F as u,e as g,r as _,b as p,n as w,i as P,p as C}from"./index-ac95d885.js";import{P as L}from"./PageComponent-589c0cac.js";import"./component-functions-f77ee72d.js";const D={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:{},tempOrder:{},isPaid:!1}},emits:["update-order"],inject:["emitter"],methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}},mounted(){this.modal=new x(this.$refs.modal)}},V={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog modal-xl",role:"document"},U={class:"modal-content border-0"},j=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},N={class:"row"},S={class:"col-md-4"},q=t("h3",null,"用戶資料",-1),F={class:"table"},I={key:0},z=t("th",{style:{width:"100px"}},"姓名",-1),A=t("th",null,"Email",-1),G=t("th",null,"電話",-1),H=t("th",null,"地址",-1),J={class:"col-md-8"},K=t("h3",null,"訂單細節",-1),Q={class:"table"},R=t("th",{style:{width:"100px"}},"訂單編號",-1),T=t("th",null,"下單時間",-1),W=t("th",null,"付款時間",-1),X={key:0},Y={key:1},Z=t("th",null,"付款狀態",-1),tt={key:0,class:"text-primary"},et={key:1,class:"text-muted"},st=t("th",null,"總金額",-1),ot=t("h3",null,"選購商品",-1),dt={class:"table"},lt=t("thead",null,[t("tr")],-1),nt={class:"text-end"},rt={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function at(s,r,h,m,e,c){return d(),l("div",V,[t("div",E,[t("div",U,[j,t("div",B,[t("div",N,[t("div",S,[q,t("table",F,[e.tempOrder.user?(d(),l("tbody",I,[t("tr",null,[z,t("td",null,o(e.tempOrder.user.name),1)]),t("tr",null,[A,t("td",null,o(e.tempOrder.user.email),1)]),t("tr",null,[G,t("td",null,o(e.tempOrder.user.tel),1)]),t("tr",null,[H,t("td",null,o(e.tempOrder.user.address),1)])])):b("",!0)])]),t("div",J,[K,t("table",Q,[t("tbody",null,[t("tr",null,[R,t("td",null,o(e.tempOrder.id),1)]),t("tr",null,[T,t("td",null,o(s.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[W,t("td",null,[e.tempOrder.paid_date?(d(),l("span",X,o(s.$filters.date(e.tempOrder.paid_date)),1)):(d(),l("span",Y,"時間不正確"))])]),t("tr",null,[Z,t("td",null,[e.tempOrder.is_paid?(d(),l("strong",tt,"已付款")):(d(),l("span",et,"尚未付款"))])]),t("tr",null,[st,t("td",null,o(s.$filters.currency(e.tempOrder.total)),1)])])]),ot,t("table",dt,[lt,t("tbody",null,[(d(!0),l(u,null,g(e.tempOrder.products,i=>(d(),l("tr",{key:i.id},[t("th",null,o(i.product.title),1),t("td",null,o(i.qty)+" / "+o(i.product.unit),1),t("td",nt,o(s.$filters.currency(i.final_total)),1)]))),128))])])])])]),t("div",rt,[it,t("button",{type:"button",class:"btn btn-primary",onClick:r[0]||(r[0]=i=>s.$emit("update-order",e.tempOrder))},"確認")])])])],512)}const ct=f(D,[["render",at]]),ht={data(){return{orders:{},pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{DelModal:v,OrderModal:ct,Pagination:L},inject:["emitter"],methods:{getOrders(s=1){this.currentPage=s;const r=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(r,this.tempProduct).then(h=>{this.orders=h.data.orders,this.pagination=h.data.pagination,this.isLoading=!1})},openModal(s){this.tempOrder={...s},this.$refs.orderModal.showModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.showModal()},updatePaid(s){this.isLoading=!0;const r=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/order/${s.id}`,h={is_paid:s.is_paid};this.$http.put(r,{data:h}).then(m=>{m.data.success&&this.emitter.emit("push-message",{style:"success",title:"更新付款狀態"}),this.getOrders(this.currentPage),this.$refs.orderModal.hideModal()})},delOrder(){const s=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(r=>{r.data.success&&(this.$refs.delModal.hideModal(),this.getOrders(this.currentPage))})}},created(){this.getOrders()}},ut={class:"container px-0"},_t={class:"table mt-4"},pt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),mt={class:"pb-0"},bt={class:"pb-0"},gt=["textContent"],ft={class:"pb-0"},Ot={class:"list-unstyled"},yt={class:"text-right pb-0"},$t={class:"pb-0"},Mt={class:"form-check form-switch"},kt=["id","onUpdate:modelValue","onChange"],vt=["for"],xt={key:0},wt={key:1},Pt={class:"pb-0"},Ct={class:"btn-group"},Lt=["onClick"],Dt=["onClick"];function Vt(s,r,h,m,e,c){const i=_("LoadingView"),O=_("Pagination"),y=_("OrderModal"),$=_("DelModal");return d(),l(u,null,[p(i,{active:e.isLoading},null,8,["active"]),t("div",ut,[t("table",_t,[pt,t("tbody",null,[(d(!0),l(u,null,g(e.orders,(n,M)=>(d(),l(u,{key:M},[e.orders.length?(d(),l("tr",{key:0,class:w({"text-secondary":!n.is_paid})},[t("td",mt,o(s.$filters.date(n.create_at)),1),t("td",bt,[n.user?(d(),l("span",{key:0,textContent:o(n.user.email)},null,8,gt)):b("",!0)]),t("td",ft,[t("ul",Ot,[(d(!0),l(u,null,g(n.products,(a,k)=>(d(),l("li",{key:k},o(a.product.title)+" 數量："+o(a.qty)+" "+o(a.product.unit),1))),128))])]),t("td",yt,o(n.total),1),t("td",$t,[t("div",Mt,[P(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${n.id}`,"onUpdate:modelValue":a=>n.is_paid=a,onChange:a=>c.updatePaid(n)},null,40,kt),[[C,n.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${n.id}`},[n.is_paid?(d(),l("span",xt,"已付款")):(d(),l("span",wt,"未付款"))],8,vt)])]),t("td",Pt,[t("div",Ct,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:a=>c.openModal(n)},"檢視",8,Lt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:a=>c.openDelOrderModal(n)},"刪除",8,Dt)])])],2)):b("",!0)],64))),128))])]),p(O,{pages:e.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"])]),p(y,{order:e.tempOrder,ref:"orderModal",onUpdateOrder:c.updatePaid},null,8,["order","onUpdateOrder"]),p($,{item:e.tempOrder,ref:"delModal",onDelItem:c.delOrder},null,8,["item","onDelItem"])],64)}const St=f(ht,[["render",Vt]]);export{St as default};