<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="bg-primary">
        <div class="container px-0">
            <div class="col">
                <ul class="d-flex mb-0 ps-0 d-sm-none d-md-flex">
                    <li v-for="(item, key) in brand" :key="key">
                        <button type="button" class="btn btn-primary" @click="getProducts(item)">{{ item }}</button>
                    </li>
                    <li>
                        <button type="button" class="btn btn-primary" @click="getProducts(item)">ALL</button>
                    </li>
                </ul>
                <div class="dropdown d-sm-block d-md-none">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Brand Select
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="(item, key) in brand" :key="key">
                            <button class="dropdown-item" type="button" @click="getProducts(item)">{{ item }}</button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item" @click="getProducts(item)">ALL</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container productsList mt-md-7 mt-sm-4 mb-6">
        <div class="row">
            <div class="col-lg-3 col-sm-6 mb-6" v-for="item in nowProducts" :key="item.id">
                <button type="button" class="w-100 p-0 border-0 mb-1" @click="getProduct(item.id)">
                    <img :src="item.imageUrl" class="w-100" alt="product">
                </button>
                <h4 class="fs-3 fw-bold mb-0">{{ item.title }}</h4>
                <p class="mb-0">{{ item.category }}</p>
                <div class="d-flex">
                    <p class="mb-0 me-2">{{ `NT$${$filters.currency(item.price)}` }}</p>
                    <p class="mb-0 text-info text-decoration-line-through" v-if="item.origin_price > item.price">
                        {{ `NT$${$filters.currency(item.origin_price)}` }}</p>
                </div>
                <div class="d-flex mt-1">
                    <div class="btn-group d-flex" role="group" aria-label="Basic example" v-if="!this.btnLoading">
                        <button type="button" class="btn text-primary p-0 me-2" @click="addWish(item)">
                            <i class="bi bi-heart-fill me-1"></i>
                        </button>
                        <button type="button" class="btn text-primary p-0 ms-1" @click="addCart(item.id)">
                            <i class="bi bi-cart2 me-1"></i>
                        </button>
                    </div>
                    <div class="spinner-border spinner-border-sm text-primary mt-1 ms-1" role="status"
                        v-if="this.btnLoading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Page :pages="pageData" @emit-page="nowPage"></Page>
    <Subscribe></Subscribe>
</template>

<script>
import Page from '../components/PageComponent.vue'
import Subscribe from '../components/SubScribe.vue'

import { mapState } from 'pinia'
import wishListStore from '@/stores/wishList'

export default {
    data() {
        return {
            products: {},
            nowProducts: {},
            id: '',
            brand: ['CHANEL', 'Jo Malone', 'Curology', 'Dior', 'Chloe', 'ZARA', 'TONIK'],
            isLoading: false,
            btnLoading: false,
            cartNum: 0,
            pageData: {}
        }
    },
    computed: {
        ...mapState(wishListStore, ['wishList'])
    },
    components: {
        Subscribe,
        Page
    },
    methods: {
        getProducts(item) {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/products/all`
            this.$http.get(api).then((res) => {
                if (res.data.success) {
                    // 計算分頁資料
                    const perPage = 12
                    const totalPages = Math.ceil(res.data.products.length / perPage)
                    this.pageData = {
                        perPage: perPage,
                        current_page: 1,
                        total_pages: totalPages,
                        has_next: totalPages > 1
                    }
                    // 篩選品牌
                    if (item) {
                        this.products = res.data.products.filter(product => {
                            return product.category === item
                        })
                        this.pageData.total_pages = Math.ceil(this.products.length / perPage)
                    } else {
                        this.products = res.data.products
                    }
                    this.nowProducts = this.products.filter((item, index) => {
                        if (index >= 0 && index < 12) {
                            return item
                        }
                    })
                }
                this.isLoading = false
                window.scrollTo(0, 0)
            })
        },
        nowPage(page) {
            // 渲染分頁
            this.pageData.current_page = page
            this.pageData.has_next = this.pageData.total_pages > this.pageData.current_page
            this.pageData.has_pre = this.pageData.current_page > 1
            const firstProduct = (page * this.pageData.perPage) - this.pageData.perPage + 1
            const lastProduct = page * this.pageData.perPage
            this.nowProducts = this.products.filter((item, index) => {
                const num = index + 1
                if (num >= firstProduct && num <= lastProduct) {
                    return item
                }
            })
            window.scrollTo(0, 0)
        },
        getProduct(id) {
            this.$router.push(`/user/product/${id}`)
        },
        addCart(id) {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            const cart = {
                product_id: id,
                qty: 1
            }
            this.btnLoading = true
            this.$http.post(api, { data: cart }).then((res) => {
                if (res.data.success) {
                    this.$http.get(api).then((res) => {
                        this.cartNum = res.data.data.carts.length
                        this.emitter.emit('cart-num', this.cartNum)
                        this.btnLoading = false
                    })
                }
            })
        },
        addWish(product) {
            this.wishList = JSON.parse(window.localStorage.getItem('wishList')) || []
            const wishCheck = this.wishList.find((item) => {
                return item.id === product.id
            })
            if (wishCheck) {
                alert("已在願望清單中")
                return
            } else {
                this.wishList.push(product)
                window.localStorage.setItem('wishList', JSON.stringify(this.wishList))
            }
        }
    },
    created() {
        this.getProducts()
    }
}
</script>