import{P as L}from"./PageComponent-3d362240.js";import{S as v}from"./SubScribe-6fa8a653.js";import{_ as k,m as C,a as x,b as D,r as g,o as r,c,e as _,d as t,F as h,g as b,t as l,f as m}from"./index-e3b22acb.js";import{w as f,c as $}from"./cart-8bb9b1e8.js";const S={data(){return{products:{},nowProducts:{},id:"",brand:["CHANEL","Jo Malone","Curology","Dior","Chloe","ZARA","TONIK"],isLoading:!1,btnLoading:!1,pageData:{}}},computed:{...C(f,["wishList"]),...x($,["cartNum"])},components:{Subscribe:v,Page:L},methods:{getProducts(e){this.isLoading=!0;const a="https://vue3-course-api.hexschool.io/api/roger8426-api/products/all";this.$http.get(a).then(n=>{if(n.data.success){const i=Math.ceil(n.data.products.length/12);this.pageData={perPage:12,current_page:1,total_pages:i,has_next:i>1},e?(this.products=n.data.products.filter(o=>o.category===e),this.pageData.total_pages=Math.ceil(this.products.length/12)):this.products=n.data.products,this.nowProducts=this.products.filter((o,u)=>{if(u>=0&&u<12)return o})}this.isLoading=!1,window.scrollTo(0,0)})},nowPage(e){this.pageData.current_page=e,this.pageData.has_next=this.pageData.total_pages>this.pageData.current_page,this.pageData.has_pre=this.pageData.current_page>1;const a=e*this.pageData.perPage-this.pageData.perPage+1,n=e*this.pageData.perPage;this.nowProducts=this.products.filter((p,i)=>{const o=i+1;if(o>=a&&o<=n)return p}),window.scrollTo(0,0)},getProduct(e){this.$router.push(`/user/product/${e}`)},addCart(e){const a="https://vue3-course-api.hexschool.io/api/roger8426-api/cart",n={product_id:e,qty:1};this.btnLoading=!0,this.$http.post(a,{data:n}).then(p=>{p.data.success&&this.$http.get(a).then(i=>{this.cartNum=i.data.data.carts.length,this.btnLoading=!1})})},addWish(e){if(this.wishList.find(n=>n.id===e.id)){alert("已在願望清單中");return}else this.wishList.push(e),window.localStorage.setItem("wishList",JSON.stringify(this.wishList)),this.wishListUpdate()},...D(f,["wishListUpdate"])},created(){this.getProducts()}},N={class:"bg-primary"},B={class:"container px-0"},A={class:"col"},M={class:"d-flex mb-0 ps-0 d-sm-none d-md-flex"},T=["onClick"],V={class:"dropdown d-sm-block d-md-none"},E=t("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Brand Select ",-1),U={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},W=["onClick"],F={class:"container productsList mt-md-7 mt-sm-4 mb-6"},I={class:"row"},J=["onClick"],O=["src"],q={class:"fs-3 fw-bold mb-0"},H={class:"mb-0"},K={class:"d-flex"},R={class:"mb-0 me-2"},Z={key:0,class:"mb-0 text-info text-decoration-line-through"},j={class:"d-flex mt-1"},z={key:0,class:"btn-group d-flex",role:"group","aria-label":"Basic example"},G=["onClick"],Q=t("i",{class:"bi bi-heart-fill me-1"},null,-1),X=[Q],Y=["onClick"],tt=t("i",{class:"bi bi-cart2 me-1"},null,-1),st=[tt],et={key:1,class:"spinner-border spinner-border-sm text-primary mt-1 ms-1",role:"status"},ot=t("span",{class:"visually-hidden"},"Loading...",-1),at=[ot];function it(e,a,n,p,i,o){const u=g("LoadingView"),w=g("Page"),P=g("Subscribe");return r(),c(h,null,[_(u,{active:i.isLoading},null,8,["active"]),t("div",N,[t("div",B,[t("div",A,[t("ul",M,[(r(!0),c(h,null,b(i.brand,(s,d)=>(r(),c("li",{key:d},[t("button",{type:"button",class:"btn btn-primary",onClick:y=>o.getProducts(s)},l(s),9,T)]))),128)),t("li",null,[t("button",{type:"button",class:"btn btn-primary",onClick:a[0]||(a[0]=s=>o.getProducts(e.item))},"ALL")])]),t("div",V,[E,t("ul",U,[(r(!0),c(h,null,b(i.brand,(s,d)=>(r(),c("li",{key:d},[t("button",{class:"dropdown-item",type:"button",onClick:y=>o.getProducts(s)},l(s),9,W)]))),128)),t("li",null,[t("button",{type:"button",class:"dropdown-item",onClick:a[1]||(a[1]=s=>o.getProducts(e.item))},"ALL")])])])])])]),t("div",F,[t("div",I,[(r(!0),c(h,null,b(i.nowProducts,s=>(r(),c("div",{class:"col-lg-3 col-sm-6 mb-6",key:s.id},[t("button",{type:"button",class:"w-100 p-0 border-0 mb-1",onClick:d=>o.getProduct(s.id)},[t("img",{src:s.imageUrl,class:"w-100",alt:"product"},null,8,O)],8,J),t("h4",q,l(s.title),1),t("p",H,l(s.category),1),t("div",K,[t("p",R,l(`NT$${e.$filters.currency(s.price)}`),1),s.origin_price>s.price?(r(),c("p",Z,l(`NT$${e.$filters.currency(s.origin_price)}`),1)):m("",!0)]),t("div",j,[this.btnLoading?m("",!0):(r(),c("div",z,[t("button",{type:"button",class:"btn text-primary p-0 me-2",onClick:d=>o.addWish(s)},X,8,G),t("button",{type:"button",class:"btn text-primary p-0 ms-1",onClick:d=>o.addCart(s.id)},st,8,Y)])),this.btnLoading?(r(),c("div",et,at)):m("",!0)])]))),128))])]),_(w,{pages:i.pageData,onEmitPage:o.nowPage},null,8,["pages","onEmitPage"]),_(P)],64)}const lt=k(S,[["render",it]]);export{lt as default};
