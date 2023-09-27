<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="container px-0">
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>購買時間</th>
                    <th>Email</th>
                    <th>購買款項</th>
                    <th>應付金額</th>
                    <th>是否付款</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, key) in orders" :key="key">
                    <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
                        <td>{{ $filters.date(item.create_at) }}</td>
                        <td><span v-text="item.user.email" v-if="item.user"></span></td>
                        <td>
                            <ul class="list-unstyled">
                                <li v-for="(product, i) in item.products" :key="i">
                                    {{ product.product.title }} 數量：{{ product.qty }}
                                    {{ product.product.unit }}
                                </li>
                            </ul>
                        </td>
                        <td class="text-right">{{ item.total }}</td>
                        <td>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                                    v-model="item.is_paid" @change="updatePaid(item)">
                                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                                    <span v-if="item.is_paid">已付款</span>
                                    <span v-else>未付款</span>
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">檢視</button>
                                <button class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
        <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
    </div>
    <OrderModal :order="tempOrder" ref="orderModal" @update-order="updatePaid"></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>
  
<script>
import DelModal from '../components/DeleteModal.vue'
import OrderModal from '../components/OrderModal.vue'
import Pagination from '../components/PageEmp.vue'
export default {
    data() {
        return {
            orders: {},
            pagination: {},
            isLoading: false,
            tempOrder: {},
            currentPage: 1
        }
    },
    components: {
        DelModal,
        OrderModal,
        Pagination
    },
    inject: ['emitter'],
    methods: {
        getOrders(currentPage = 1) {
            this.currentPage = currentPage
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/orders?page=${currentPage}`
            this.isLoading = true
            this.$http.get(api, this.tempProduct).then((res) => {
                this.orders = res.data.orders
                this.pagination = res.data.pagination
                this.isLoading = false
                console.log(this.orders);
            });
        },
        openModal(item) {
            this.tempOrder = { ...item }
            this.$refs.orderModal.showModal()
        },
        openDelOrderModal(item) {
            this.tempOrder = { ...item }
            this.$refs.delModal.showModal()
        },
        updatePaid(item) {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/order/${item.id}`
            const paid = {
                is_paid: item.is_paid
            }
            this.$http.put(api, { data: paid })
                .then((res) => {
                    if (res.data.success) {
                        this.emitter.emit('push-message', {
                            style: 'success',
                            title: '更新付款狀態'
                        })
                    }
                    this.getOrders(this.currentPage)
                    this.$refs.orderModal.hideModal()
                });
        },
        delOrder() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/order/${this.tempOrder.id}`
            this.isLoading = true
            this.$http.delete(api).then((res) => {
                if (res.data.success) {
                    this.$refs.delModal.hideModal()
                    this.getOrders(this.currentPage)
                }
            })
        },
    },
    created() {
        this.getOrders()
    },
}
</script>