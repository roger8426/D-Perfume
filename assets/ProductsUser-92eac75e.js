import{S as v}from"./SubScribe-5f08d8df.js";import{_ as y,r as h,o as a,c as i,b as _,a as t,F as u,e as b,d as k,t as c,f as g,g as L,v as $}from"./index-d08e83de.js";const x={data(){return{products:{},id:"",brand:["CHANEL","Jo Malone","Curology","Dior","Chloe","ZARA","TONIK"],isLoading:!1,btnLoading:!1}},inject:["emitter"],components:{Subscribe:v},methods:{getProducts(e){this.isLoading=!0;const n="https://vue3-course-api.hexschool.io/api/roger8426-api/products/all";this.$http.get(n).then(o=>{o.data.success&&(e?this.products=o.data.products.filter(r=>r.category===e):this.products=o.data.products),this.isLoading=!1})},getProduct(e){this.$router.push(`/user/product/${e}`)},addCart(e){const n="https://vue3-course-api.hexschool.io/api/roger8426-api/cart",o={product_id:e,qty:1};this.btnLoading=!0,this.$http.post(n,{data:o}).then(r=>{r.data.success&&(this.btnLoading=!1,this.emitter.emit("push-id",e))})}},created(){this.getProducts()}},C={class:"bg-primary"},N={class:"container px-0"},w={class:"col"},P={class:"d-flex mb-0 ps-0"},S=["onClick"],V={class:"container productsList mt-7 mb-6"},A={class:"row"},B=["onClick"],D=["src"],T={class:"fs-3 fw-bold mb-0"},j={class:"mb-0"},E={class:"d-flex"},F={class:"mb-0 me-2"},U={key:0,class:"mb-0 text-info text-decoration-line-through"},q={class:"d-flex mt-1"},H=t("button",{type:"button",class:"btn text-primary p-0 me-2"},[t("i",{class:"bi bi-heart-fill me-1"})],-1),I=["onClick"],J=t("i",{class:"bi bi-cart2 me-1"},null,-1),K=[J],M={key:0,class:"spinner-border spinner-border-sm text-primary mt-1 ms-1",role:"status"},O=t("span",{class:"visually-hidden"},"Loading...",-1),R=[O],Z=k('<div class="container"><nav aria-label="Page navigation"><ul class="pagination justify-content-center mt-3 mb-6"><li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul></nav></div>',1);function z(e,n,o,r,l,d){const m=h("LoadingView"),f=h("Subscribe");return a(),i(u,null,[_(m,{active:l.isLoading},null,8,["active"]),t("div",C,[t("div",N,[t("div",w,[t("ul",P,[(a(!0),i(u,null,b(l.brand,(s,p)=>(a(),i("li",{key:p},[t("button",{type:"button",class:"btn btn-primary",onClick:G=>d.getProducts(s)},c(s),9,S)]))),128))])])])]),t("div",V,[t("div",A,[(a(!0),i(u,null,b(l.products,s=>(a(),i("div",{class:"col-3 mb-6",key:s.id},[t("button",{type:"button",class:"w-100 p-0 border-0 mb-1",onClick:p=>d.getProduct(s.id)},[t("img",{src:s.imageUrl,class:"w-100",alt:"product"},null,8,D)],8,B),t("h4",T,c(s.title),1),t("p",j,c(s.category),1),t("div",E,[t("p",F,c(`NT$${e.$filters.currency(s.price)}`),1),s.origin_price>s.price?(a(),i("p",U,c(`NT$${e.$filters.currency(s.origin_price)}`),1)):g("",!0)]),t("div",q,[H,L(t("button",{type:"button",class:"btn text-primary p-0 ms-1",onClick:p=>d.addCart(s.id)},K,8,I),[[$,!this.btnLoading]]),this.btnLoading?(a(),i("div",M,R)):g("",!0)])]))),128))])]),Z,_(f)],64)}const X=y(x,[["render",z]]);export{X as default};