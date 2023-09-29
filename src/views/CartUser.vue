<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="container">
        <div class="px-0 btn-group mt-6" role="group" aria-label="Basic example" @click="tabSwitch">
            <button type="button" class="btn btn-outline-primary" :class="{ active: tabCheck === '購物車' }">購物車</button>
            <button type="button" class="btn btn-outline-primary" :class="{ active: tabCheck === '訂單列表' }">訂單列表</button>
        </div>
    </div>
    <div class="container px-0 cart" v-if="cart.total">
        <div v-if="tabCheck === '購物車'">
            <table class="table align-middle">
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
    </div>
    <div class="container px-0 mb-6" v-if="tabCheck === '訂單列表'">
        <div class="container px-0">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>下單時間</th>
                        <th>Email</th>
                        <th>訂單編號</th>
                        <th>應付金額</th>
                        <th>是否付款</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, key) in orders" :key="key">
                        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
                            <td class="pb-0">{{ $filters.date(item.create_at) }}</td>
                            <td class="pb-0"><span v-text="item.user.email" v-if="item.user"></span></td>
                            <td class="pb-0">{{ item.id }}</td>
                            <td class="text-right pb-0">{{ item.total }}</td>
                            <td class="pb-0">
                                <span v-if="item.is_paid" class="text-success">已付款</span>
                                <span v-else class="text-danger">未付款</span>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-outline-primary btn-sm"
                                    @click="checkOrder(item.id)">檢視訂單</button>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <div class="container px-0 mt-6 mb-6 non-cart text-center" v-if="!cart.total && tabCheck === '購物車'">
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
            orders: {},
            total: 0,
            finalTotal: 0,
            tempProduct: {},
            isLoading: false,
            numLoading: false,
            couponCode: '',
            tabCheck: '購物車'
        }

    },
    components: {
        CheckModal
    },
    inject: ['emitter'],
    methods: {
        getCart() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            this.isLoading = true
            this.$http.get(api).then((res) => {
                this.cart = res.data.data
                this.isLoading = false
            })
        },
        getOrders() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/orders`
            this.isLoading = true
            this.$http.get(api, this.tempProduct).then((res) => {
                this.orders = res.data.orders
                this.isLoading = false
                console.log(this.orders);
            })
        },
        delCart(id) {
            let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${id}`
            this.$http.delete(api).then((res) => {
                if (res.data.success) {
                    api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
                    this.$http.get(api).then((res) => {
                        this.cartNum = res.data.data.carts.length
                        this.emitter.emit('cart-num', this.cartNum)
                        this.getCart()
                    })
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
        },
        tabSwitch(event) {
            this.tabCheck = event.target.innerText
        },
        checkOrder(id) {
            this.$router.push(`/user/order/${id}`)
        }
    },
    created() {
        this.getCart()
        this.getOrders()
    }
}
</script>