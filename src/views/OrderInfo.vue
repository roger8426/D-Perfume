<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="my-5 row justify-content-center">
        <form class="col-md-6" @click="payOrder">
            <table class="table align-middle">
                <thead>
                    <th class="ps-2">品名</th>
                    <th class="ps-2">數量</th>
                    <th class="ps-2">單價</th>
                </thead>
                <tbody>
                    <tr v-for="item in order.products" :key="item.product.id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.product.num }} / {{ item.product.unit }}</td>
                        <td class="text-end">{{ item.product.price }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="text-end">總計</td>
                        <td class="text-end">{{ order.total }}</td>
                    </tr>
                </tfoot>
            </table>

            <table class="table">
                <tbody>
                    <tr>
                        <th width="100">Email</th>
                        <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                        <th>姓名</th>
                        <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                        <th>收件人電話</th>
                        <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                        <th>收件人地址</th>
                        <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                        <th>付款狀態</th>
                        <td>
                            <span v-if="!order.is_paid">尚未付款</span>
                            <span class="text-success" v-else>付款完成</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-end">
                <button class="btn btn-danger" v-if="!order.is_paid">確認付款</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderId: '',
            order: {
                user: {}
            },
            isLoading: false
        }
    },
    methods: {
        getOrder() {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order/${this.orderId}`
            this.$http.get(api).then((res) => {
                if (res.data.success) {
                    this.order = res.data.order
                    this.isLoading = false
                }
            })
        },
        payOrder() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/pay/${this.orderId}`
            this.isLoading = true
            this.$http.post(api).then((res) => {
                if (res.data.success) {
                    this.getOrder()
                }
            })
        }
    },
    created() {
        this.orderId = this.$route.params.orderId
        this.getOrder()
    }
}
</script>