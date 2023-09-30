import{_ as v,e as w}from"./emitter-37daa245.js";import{_ as p,r as l,o,c as n,a as t,b as i,w as d,t as f,d as x,F as _,e as C}from"./index-ac95d885.js";const B={data(){return{cartNum:0,wishList:{},btnLoading:!1}},inject:["emitter"],methods:{cartNumber(){const s="https://vue3-course-api.hexschool.io/api/roger8426-api/cart";this.$http.get(s).then(a=>{this.cartNum=a.data.data.carts.length})},addCart(s){const a="https://vue3-course-api.hexschool.io/api/roger8426-api/cart",c={product_id:s,qty:1};this.btnLoading=!0,this.$http.post(a,{data:c}).then(h=>{h.data.success&&this.$http.get(a).then(e=>{this.cartNum=e.data.data.carts.length,this.emitter.emit("cart-num",this.cartNum),this.btnLoading=!1})})},delWish(s){this.wishList.splice(s,1)}},created(){this.emitter.on("cart-num",s=>{this.cartNum=s}),this.cartNumber(),this.emitter.on("wishList",s=>{this.wishList=s})}},y={class:"container px-0"},P={class:"row py-2"},k={class:"col-6"},G=t("img",{src:v,alt:"LOGO"},null,-1),T={class:"col-6"},D={class:"h-100 d-flex justify-content-end align-items-center mb-0"},H=t("a",{href:"#",class:"d-flex link-secondary me-3"},[t("i",{class:"bi bi-shop me-1"}),t("p",{class:"mb-0"},"Product")],-1),z={class:"d-flex link-secondary ms-3 me-3","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},Z=t("i",{class:"bi bi-heart-fill me-1"},null,-1),E={key:0,class:"mb-0"},Q={key:1,class:"mb-0"},L={class:"d-flex"},M={href:"#",class:"d-flex link-secondary ms-3"},N=t("i",{class:"bi bi-cart2 me-1"},null,-1),X={key:0,class:"mb-0"},I={key:1,class:"mb-0"},Y={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},O=t("div",{class:"offcanvas-header text-primary"},[t("i",{class:"bi bi-heart-fill me-1"}),t("h5",{class:"offcanvas-title fw-bold",id:"offcanvasExampleLabel"},"Your Wishlist"),t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),R={class:"offcanvas-body"},U={class:"table"},F=t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col"},"品名"),t("th",{scope:"col"},"單價"),t("th",{scope:"col"})])],-1),V={scope:"row"},K=["onClick"],j=t("i",{class:"bi bi-x"},null,-1),J=[j],W=["onClick"],q=t("i",{class:"bi bi-cart2 me-1"},null,-1),S=[q];function $(s,a,c,h,e,u){const A=l("RouterLink"),g=l("router-link");return o(),n(_,null,[t("div",y,[t("div",P,[t("div",k,[i(A,{to:"/user/D-Perfume"},{default:d(()=>[G]),_:1})]),t("div",T,[t("ul",D,[t("li",null,[i(A,{to:"/user/products"},{default:d(()=>[H]),_:1})]),t("li",null,[t("a",z,[Z,e.wishList.length?e.wishList.length?(o(),n("p",Q,f(`Wishlist(${e.wishList.length})`),1)):x("",!0):(o(),n("p",E,"Wishlist"))])]),t("li",L,[i(g,{to:"/user/cart"},{default:d(()=>[t("a",M,[N,e.cartNum?(o(),n("p",X,f(`Cart(${e.cartNum})`),1)):(o(),n("p",I,"Cart"))])]),_:1})])])])])]),t("div",Y,[O,t("div",R,[t("div",null,[t("table",U,[F,t("tbody",null,[(o(!0),n(_,null,C(e.wishList,(r,m)=>(o(),n("tr",{key:r.id},[t("th",V,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:b=>u.delWish(m)},J,8,K)]),t("td",null,f(r.title),1),t("td",null,f(r.price),1),t("td",null,[t("button",{type:"button",class:"btn text-primary p-0 ms-1",onClick:b=>u.addCart(r.id)},S,8,W)])]))),128))])])])])])],64)}const tt=p(B,[["render",$]]),st="data:image/png;base64,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",et={},ot={class:"bg-primary py-4"},nt={class:"container"},it={class:"row text-light"},at={class:"col-6 d-flex align-items-center"},ct=t("img",{src:st,alt:"LOGO"},null,-1),rt=t("p",{class:"fs-6 mb-0 ms-1"},"© 2020. All Rights Reserved.",-1),lt={class:"col-6"},dt={class:"mb-0 h-100 d-flex justify-content-end align-items-center"},At=t("a",{href:"#",class:"btn btn-primary fs-4 me-4"},"Product",-1),ft=t("a",{href:"#",class:"btn btn-primary fs-4 ms-1"},"Dev Login",-1);function ht(s,a){const c=l("RouterLink");return o(),n("div",ot,[t("div",nt,[t("div",it,[t("div",at,[i(c,{to:"/user/D-Perfume",class:"me-3"},{default:d(()=>[ct]),_:1}),rt]),t("div",lt,[t("ul",dt,[t("li",null,[i(c,{to:"/user/products"},{default:d(()=>[At]),_:1})]),t("li",null,[i(c,{to:"/user/login"},{default:d(()=>[ft]),_:1})])])])])])])}const ut=p(et,[["render",ht]]),gt={components:{navBar:tt,footerBar:ut},provide(){return{emitter:w}},created(){this.$router.push("/user/D-Perfume")}};function _t(s,a,c,h,e,u){const A=l("navBar"),g=l("router-view"),r=l("footerBar");return o(),n(_,null,[i(A),i(g),i(r)],64)}const bt=p(gt,[["render",_t]]);export{bt as default};
