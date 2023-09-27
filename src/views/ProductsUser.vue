<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="bg-primary">
        <div class="container px-0">
            <div class="col">
                <ul class="d-flex mb-0 ps-0">
                    <li v-for="(item, key) in brand" :key="key">
                        <button type="button" class="btn btn-primary" @click="getProducts(item)">{{ item }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container productsList mt-7 mb-6">
        <div class="row">
            <div class="col-3 mb-6" v-for="item in products" :key="item.id">
                <button type="button" class="w-100 p-0 border-0 mb-1" @click="getProduct(item.id)">
                    <img :src="item.imageUrl" class="w-100" alt="product">
                </button>
                <h4 class="fs-3 fw-bold mb-0">{{ item.title }}</h4>
                <p class="mb-0">{{ item.category }}</p>
                <div class="d-flex">
                    <p class="mb-0 me-2">{{ `NT$${$filters.currency(item.price)}` }}</p>
                    <p class="mb-0 text-info text-decoration-line-through" v-if="item.origin_price > item.price">{{
                        `NT$${$filters.currency(item.origin_price)}` }}</p>
                </div>
                <div class="d-flex mt-1">
                    <button type="button" class="btn text-primary p-0 me-2">
                        <i class="bi bi-heart-fill me-1"></i>
                    </button>
                    <button type="button" class="btn text-primary p-0 ms-1" @click="addCart(item.id)"
                        v-show="!this.btnLoading">
                        <i class="bi bi-cart2 me-1"></i>
                    </button>
                    <div class="spinner-border spinner-border-sm text-primary mt-1 ms-1" role="status"
                        v-if="this.btnLoading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-3 mb-6">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <Subscribe></Subscribe>
</template>

<script>
import Subscribe from '../components/SubScribe.vue'

export default {
    data() {
        return {
            products: {},
            id: '',
            brand: ['CHANEL', 'Jo Malone', 'Curology', 'Dior', 'Chloe', 'ZARA', 'TONIK'],
            isLoading: false,
            btnLoading: false
        }
    },
    inject: ['emitter'],
    components: {
        Subscribe
    },
    methods: {
        getProducts(item) {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/products/all`
            this.$http.get(api).then((res) => {
                if (res.data.success) {
                    if (item) {
                        this.products = res.data.products.filter(product => {
                            return product.category === item
                        })
                    } else {
                        this.products = res.data.products
                    }
                }
                this.isLoading = false
            })
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
                    this.btnLoading = false
                    this.emitter.emit('push-id', id)
                }
            })
        }
    },
    created() {
        this.getProducts()
    }
}
</script>