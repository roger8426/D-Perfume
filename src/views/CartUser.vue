<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="container px-0 cart" v-if="cart.total">
        <table class="table align-middle mt-6">
            <thead>
                <tr>
                    <th scope="col" class="col-1"></th>
                    <th scope="col" class="col-1"></th>
                    <th scope="col" class="col-3 ps-5">品名</th>
                    <th scope="col" class="col-2">數量</th>
                    <th scope="col" class="col-2">單價</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                    <th scope="row" class="text-center">
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="delCart(item.id)">
                            <i class="bi bi-x"></i>
                        </button>
                    </th>
                    <td class="p-0">
                        <a href="#" onclick="return false" @click="routePush(item.product_id)">
                            <img class="w-100" :src="item.product.imageUrl" alt="">
                        </a>
                    </td>
                    <td class="ps-5">
                        <a href="#" onclick="return false" class="text-dark" @click="routePush(item.product.title)">
                            {{ item.product.title }}
                        </a>
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control" min="1" v-model="item.qty" :disabled="numLoading"
                                @change="updateCart(item)">
                            <div class="input-group-text">/ 單位</div>
                        </div>
                    </td>
                    <td>
                        {{ `NT$${' '}${$filters.currency(item.total)}` }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="row mb-6">
            <div class="col-6 d-flex justify-content-between">
                <div class="input-group input-group-sm w-50">
                    <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" @click="addCoupon">
                            套用優惠碼
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="pt-2 d-flex justify-content-end">
                    <div class="fw-bold">{{ `總價${' '}${$filters.currency(cart.total)}` }}</div>
                    <div class="ms-3 fw-bold text-success" v-if="cart.total !== cart.final_total">
                        {{ `折扣價${' '}${$filters.currency(cart.final_total)}` }}
                    </div>
                </div>
            </div>
            <div class="col-3">
                <button class="btn btn-primary" type="button" @click="openCheckModal()">
                    確認訂單
                </button>
            </div>

        </div>
    </div>
    <div class="container px-0 mt-6 mb-6 non-cart text-center" v-else>
        <router-link to="/user/products">
            <button class="btn btn-outline-primary" type="buton">
                您的購物清單目前為空，趕快去商場看看吧！
            </button>
        </router-link>
    </div>
    <CheckModal ref="checkModal" :order="cart"></CheckModal>
</template>

<script>
import CheckModal from '../components/CheckModal.vue'

export default {
    data() {
        return {
            cart: {},
            total: 0,
            finalTotal: 0,
            tempProduct: {},
            isLoading: false,
            numLoading: false,
            couponCode: ''
        }

    }, components: {
        CheckModal
    },
    methods: {
        getCart() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            this.isLoading = true
            this.$http.get(api).then((res) => {
                this.cart = res.data.data
                this.isLoading = false
            })
        },
        delCart(id) {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${id}`
            this.$http.delete(api).then((res) => {
                if (res.data.success) {
                    this.getCart()
                }
            })
        },
        updateCart(item) {
            this.numLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${item.id}`
            const cart = {
                product_id: item.product_id,
                qty: item.qty
            }
            this.$http.put(api, { data: cart }).then((res) => {
                if (res.data.success) {
                    this.getCart()
                }
                this.numLoading = false
            })
        },
        routePush(id) {
            this.$router.push(`/user/product/${id}`)
        },
        addCoupon() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/coupon`
            const coupon = { code: this.couponCode }
            this.$http.post(api, { data: coupon }).then((res) => {
                if (res.data.success) {
                    this.couponCode = ''
                    this.getCart()
                }
            })
        },
        openCheckModal() {
            this.$refs.checkModal.showModal()
        }
    },
    created() {
        this.getCart()
    }
}
</script>