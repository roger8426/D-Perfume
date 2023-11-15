import{_ as m,m as f,a as b,r as _,o as d,c as n,d as w,b as t,t as c,j as g,v as y,e as v,h as l,F as L,g as x}from"./index-ba954f0e.js";import{w as p}from"./wishList-0a6d97ad.js";const k={data(){return{product:{},id:"",qty:1,isLoading:!1,btnLoading:!1,cartNum:0,wishbtn:!1}},computed:{...f(p,["wishList"])},inject:["emitter"],methods:{getProduct(){this.isLoading=!0;const i=`https://vue3-course-api.hexschool.io/api/roger8426-api/product/${this.id}`;this.$http.get(i).then(s=>{s.data.success&&(this.product=s.data.product),this.isLoading=!1})},addCart(){const i="https://vue3-course-api.hexschool.io/api/roger8426-api/cart",s={product_id:this.id,qty:this.qty};this.btnLoading=!0,this.$http.post(i,{data:s}).then(h=>{h.data.success&&this.$http.get(i).then(r=>{r.data.success&&(this.cartNum=r.data.data.carts.length,this.emitter.emit("cart-num",this.cartNum),this.btnLoading=!1)})})},addWish(){this.wishList.push(this.product),window.localStorage.setItem("wishList",JSON.stringify(this.tempWishList)),this.wishCheck()},wishCheck(){this.wishList.find(i=>{i.id===this.id&&(this.wishbtn=!0)})},...b(p,["wishListUpdate"])},created(){this.id=this.$route.params.productId,this.getProduct(),this.wishCheck()}},C={class:"container px-0 mt-6 mb-6"},N={class:"row productInfo"},V={class:"col-8 px-0"},S=["src"],q={class:"col-4 ps-4 pe-0 d-flex flex-column justify-content-center"},I={class:"fw-bold"},W={class:"d-flex"},$={key:0,class:"spinner-border spinner-border-sm text-dark me-1",role:"status"},j=t("span",{class:"visually-hidden"},"Loading...",-1),B=[j],P={key:0,type:"button",class:"btn text-primary p-0 mt-3 me-2 w-50 border-0",disabled:""},T=t("i",{class:"bi bi-heart-fill me-1"},null,-1),U=t("i",{class:"bi bi-heart-fill me-1"},null,-1),D=x('<div class="d-flex flex-column mt-6"><h3 class="fs-5 fw-bold">商品購買須知</h3><p class="fs-5">商品情境照為示意用，不包含其他配件，商品外觀以廠商實際出貨為主。任何訂單變動均會在出貨訊息內更新。</p><h3 class="fs-5 fw-bold">退換貨須知</h3><p class="fs-5">依《消費者保護法》規定，全站購物皆享有【七日猶豫期】（含例假日）之權益。若商品有任何問題，可於猶豫期內申請退貨。</p></div>',1);function F(i,s,h,r,e,a){const u=_("LoadingView");return d(),n(L,null,[w(u,{active:e.isLoading},null,8,["active"]),t("div",C,[t("div",N,[t("div",V,[t("img",{src:e.product.imageUrl,alt:"",class:"w-100"},null,8,S)]),t("div",q,[t("div",null,[t("h2",I,c(e.product.title),1),t("p",null,c(e.product.description),1),t("p",null,c(`NT$${i.$filters.currency(e.product.price)}`),1)]),t("div",W,[g(t("input",{type:"number",class:"border-primary border-1 rounded-0 rounded-start py-3 ps-4 w-50",min:"1","onUpdate:modelValue":s[0]||(s[0]=o=>e.qty=o),oninput:"this.value=this.value.replace(/[^0-9.]+/g,'');"},null,512),[[y,e.qty]]),t("button",{type:"button",class:"btn btn-primary p-0 rounded-0 rounded-end py-3 w-50",onClick:s[1]||(s[1]=(...o)=>a.addCart&&a.addCart(...o))},[this.btnLoading?(d(),n("div",$,B)):v("",!0),l(" 加入購物車 ")])]),t("div",null,[e.wishbtn?(d(),n("button",P,[T,l(" 已在願望清單中 ")])):(d(),n("button",{key:1,type:"button",class:"btn text-primary p-0 mt-3 me-2 w-50",onClick:s[2]||(s[2]=(...o)=>a.addWish&&a.addWish(...o))},[U,l(" 加入願望清單 ")]))]),D])])])],64)}const J=m(k,[["render",F]]);export{J as default};
