# D-Perfume專案簡介

D-Perfume是一個透過 Vue3 + Vite 建立的 SPA 網站。  

[D-Perfume網站連結](https://roger8426.github.io/D-Perfume/)

## 前台功能（包含 RWD 響應式設計）

專案首頁：品牌介紹。  
商品頁：包含商品列表及分頁功能、購物車及願望清單快捷鍵。  
單一商品資訊：商品詳細資訊、購物車及願望清單快捷鍵。  
購物車以及訂單管理功能：購物車檢視及修改、套用優惠券功能以及訂單的建立與查詢。  

## 後台功能

測試用帳號及密碼  

```bash 
帳號：roger8426@gmail.com  
密碼：roger5566  
```
內容包含商品、訂單及優惠券的增修查改功能。
## 安裝

以下步驟將引導您如何安裝此專案。  

### 取得專案

```bash 
git clone https://github.com/roger8426/D-Perfume
``` 

### 移動到專案內

```bash 
cd D-Perfume
``` 

### 安裝套件

```bash 
npm install
``` 

### 運行專案

```bash 
npm run dev
``` 

## 資料夾說明

- views - 主要畫面放置處  
- router - 路由管理放置處  
- methods - JavaScript 模組放置處
- components - 元件放置處  
- assets - 靜態資源放置處  
    - scss - scss檔案放置處  
    - images - 圖片放置處  

## 相關技術

- Vue 3（使用 Options API） 
- Vite：前端構建工具  
- Vue Router：路由管理  
- Vue Loading Overlay：讀取遮罩套件  
- VeeValidate：表單驗證套件  
- SCSS：CSS 預處理器  
- Bootstrap 5  
- Axios：HTTP 請求工具  
- Emitter：跨元件資料傳遞工具