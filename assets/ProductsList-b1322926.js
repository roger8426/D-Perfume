import{D as x}from"./DeleteModal-1bd47e78.js";import{M as w}from"./modal-53d2ba02.js";import{_ as b,o as r,c,a as t,g as n,h as u,f as L,p as k,q as C,i as U,d as V,r as m,b as h,F as g,e as $,t as _}from"./index-d08e83de.js";import{P as D}from"./PageEmp-da723a0d.js";import"./component-functions-81ebb201.js";const N={props:{product:{type:Object,default(){return{}}}},data(){return{modal:{},tempProduct:{},isLoading:!1}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},uploadImg(){this.isLoading=!0;const l=this.$refs.uploadImg.files[0],o=new FormData;o.append("file-to-upload",l);const i="https://vue3-course-api.hexschool.io/api/roger8426-api/admin/upload";this.$http.post(i,o).then(p=>{p.data.success&&(this.tempProduct.imageUrl=p.data.imageUrl,this.isLoading=!1)})}},watch:{product(){this.tempProduct=this.product}},mounted(){this.modal=new w(this.$refs.modal)}},I={class:"modal",ref:"modal"},E={class:"modal-dialog modal-xl",role:"document"},A={class:"modal-content border-0"},F=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"商品編輯")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},j={class:"row"},B={class:"col-sm-4"},O={class:"mb-3"},S=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),q={class:"mb-3"},H=t("label",{for:"customFile",class:"form-label"},[U("或 上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1),J={class:"w-100 text-center"},K={key:0,class:"spinner-border spinner-border text-primary mt-1 ms-1",role:"status"},R=t("span",{class:"visually-hidden"},"Loading...",-1),Z=[R],z=["src"],G={class:"col-sm-8"},Q={class:"mb-3"},W=t("label",{for:"title",class:"form-label"},"標題",-1),X={class:"row gx-2"},Y={class:"mb-3 col-md-6"},tt=t("label",{for:"category",class:"form-label"},"品牌",-1),ot=V('<option value="CHANEL" selected>CHANEL</option><option value="Jo Malone">Jo Malone</option><option value="Curology">Curology</option><option value="Dior">Dior</option><option value="Chloe">Chloe</option><option value="ZARA">ZARA</option><option value="TONIK">TONIK</option>',7),et=[ot],st={class:"mb-3 col-md-6"},lt=t("label",{for:"price",class:"form-label"},"單位",-1),it={class:"row gx-2"},dt={class:"mb-3 col-md-6"},nt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),at={class:"mb-3 col-md-6"},rt=t("label",{for:"price",class:"form-label"},"售價",-1),ct=t("hr",null,null,-1),pt={class:"mb-3"},ut=t("label",{for:"description",class:"form-label"},"產品描述",-1),mt={class:"mb-3"},ht=t("label",{for:"content",class:"form-label"},"說明內容",-1),_t={class:"mb-3"},gt={class:"form-check"},bt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ft={class:"modal-footer"},Pt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1),vt=["disabled"];function yt(l,o,i,p,e,d){return r(),c("div",I,[t("div",E,[t("div",A,[F,t("div",T,[t("div",j,[t("div",B,[t("div",O,[S,n(t("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imgUrl=s)},null,512),[[u,e.tempProduct.imgUrl]])]),t("div",q,[H,t("input",{type:"file",id:"customFile",class:"form-control",ref:"uploadImg",onChange:o[1]||(o[1]=(...s)=>d.uploadImg&&d.uploadImg(...s))},null,544)]),t("div",J,[this.isLoading?(r(),c("div",K,Z)):this.isLoading?L("",!0):(r(),c("img",{key:1,class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,z))])]),t("div",G,[t("div",Q,[W,n(t("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":o[2]||(o[2]=s=>e.tempProduct.title=s)},null,512),[[u,e.tempProduct.title]])]),t("div",X,[t("div",Y,[tt,n(t("select",{name:"brand",class:"form-control",id:"category",required:"","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.category=s)},et,512),[[k,e.tempProduct.category]])]),t("div",st,[lt,n(t("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.unit=s)},null,512),[[u,e.tempProduct.unit]])])]),t("div",it,[t("div",dt,[nt,n(t("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.origin_price=s)},null,512),[[u,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",at,[rt,n(t("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.price=s)},null,512),[[u,e.tempProduct.price,void 0,{number:!0}]])])]),ct,t("div",pt,[ut,n(t("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.description=s)},null,512),[[u,e.tempProduct.description]])]),t("div",mt,[ht,n(t("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.content=s)},null,512),[[u,e.tempProduct.content]])]),t("div",_t,[t("div",gt,[n(t("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.is_enabled=s)},null,512),[[C,e.tempProduct.is_enabled]]),bt])])])])]),t("div",ft,[Pt,t("button",{type:"button",class:"btn btn-primary",disabled:e.isLoading,onClick:o[10]||(o[10]=s=>l.$emit("update-product",e.tempProduct))},"確認",8,vt)])])])],512)}const Mt=b(N,[["render",yt]]),xt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:Mt,DelModal:x,PageEmp:D},inject:["emitter"],methods:{getProducts(l=1){const o=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/products/?page=${l}`;this.isLoading=!0,this.$http.get(o).then(i=>{this.isLoading=!1,i.data.success&&(this.products=i.data.products,this.pagination=i.data.pagination)})},openModal(l,o){l?(this.tempProduct={},this.tempProduct.unit="瓶"):this.tempProduct={...o},this.isNew=l,this.$refs.productModal.showModal()},openDelModal(l){this.tempProduct={...l},this.$refs.delModal.showModal()},updateProduct(l){this.tempProduct=l;let o="https://vue3-course-api.hexschool.io/api/roger8426-api/admin/product",i="post";this.isNew||(o=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/product/${l.id}`,i="put"),this.isLoading=!0,this.$http[i](o,{data:this.tempProduct}).then(p=>{p.data.success?this.emitter.emit("push-message",{style:"success",title:"更新成功"}):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:p.data.message.join("、")}),this.$refs.productModal.hideModal(),this.getProducts()})},delProduct(){const l=`https://vue3-course-api.hexschool.io/api/roger8426-api/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(l).then(o=>{o.data.success&&(this.$refs.delModal.hideModal(),this.getProducts())})}},created(){this.getProducts()}},wt={class:"container"},Lt={class:"text-end"},kt={class:"table mt-4"},Ct=t("thead",null,[t("tr",null,[t("th",{width:"120"},"品牌"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"200"},"編輯")])],-1),Ut={class:"text-right"},Vt={class:"text-right"},$t={key:0,class:"text-success"},Dt={key:1,class:"text-info"},Nt={class:"btn-group"},It=["onClick"],Et=["onClick"];function At(l,o,i,p,e,d){const s=m("LoadingView"),f=m("PageEmp"),P=m("ProductModal"),v=m("DelModal");return r(),c(g,null,[h(s,{active:e.isLoading},null,8,["active"]),t("div",wt,[t("div",Lt,[t("button",{class:"btn btn-primary my-4",type:"button",onClick:o[0]||(o[0]=a=>d.openModal(!0))},"新增產品")]),t("table",kt,[Ct,t("tbody",null,[(r(!0),c(g,null,$(e.products,(a,y)=>(r(),c("tr",{key:y},[t("td",null,_(a.category),1),t("td",null,_(a.title),1),t("td",Ut,_(l.$filters.currency(a.origin_price)),1),t("td",Vt,_(l.$filters.currency(a.price)),1),t("td",null,[a.is_enabled?(r(),c("span",$t,"啟用")):(r(),c("span",Dt,"未啟用"))]),t("td",null,[t("div",Nt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:M=>d.openModal(!1,a)},"編輯",8,It),t("button",{class:"btn btn-outline-danger btn-sm",onClick:M=>d.openDelModal(a)},"刪除",8,Et)])])]))),128))])])]),h(f,{pages:e.pagination,onEmitPage:d.getProducts,onPrePage:d.getProducts},null,8,["pages","onEmitPage","onPrePage"]),h(P,{ref:"productModal",product:e.tempProduct,onUpdateProduct:d.updateProduct},null,8,["product","onUpdateProduct"]),h(v,{ref:"delModal",item:e.tempProduct,onDelItem:d.delProduct},null,8,["item","onDelItem"])],64)}const St=b(xt,[["render",At]]);export{St as default};
