import{l as t}from"./index-e3b22acb.js";const e=t("wishListStore",{state:()=>({wishList:[]}),getters:{},actions:{wishListUpdate(){this.wishList=JSON.parse(window.localStorage.getItem("wishList"))||[]}}}),r=t("cartStore",{state:()=>({cartNum:0})});export{r as c,e as w};