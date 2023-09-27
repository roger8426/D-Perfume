<template>
    <div class="container">
        <LoadingView :active="isLoading"></LoadingView>
        <div class="text-end mt-4">
            <button class="btn btn-primary" @click="openCouponModal(true)">
                建立新優惠券
            </button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>折扣百分比</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in coupons" :key="key">
                    <td>{{ item.title }}</td>
                    <td>{{ item.percent }}%</td>
                    <td>{{ $filters.date(item.due_date) }}</td>
                    <td>
                        <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                        <span v-else class="text-info">未啟用</span>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">編輯</button>
                            <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon" />
        <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
    </div>
</template>
  
<script>
import CouponModal from '../components/CouponModal.vue'
import DelModal from '../components/DeleteModal.vue'
export default {
    components: { CouponModal, DelModal },
    props: {
        config: Object,
    },
    data() {
        return {
            coupons: {},
            tempCoupon: {
                title: '',
                is_enabled: 0,
                percent: 100,
                code: '',
            },
            isLoading: false,
            isNew: false,
        }
    },
    inject: ['emitter'],
    methods: {
        openCouponModal(isNew, item) {
            this.isNew = isNew
            if (this.isNew) {
                this.tempCoupon = {
                    due_date: new Date().getTime() / 1000,
                }
            } else {
                this.tempCoupon = { ...item }
            }
            this.$refs.couponModal.showModal()
        },
        openDelCouponModal(item) {
            this.tempCoupon = { ...item }
            this.$refs.delModal.showModal()
        },
        getCoupons() {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/coupons`
            this.$http.get(api, this.tempProduct).then((res) => {
                this.coupons = res.data.coupons
                this.isLoading = false
            })
        },
        updateCoupon(tempCoupon) {
            this.tempCoupon = tempCoupon
            // 新增優惠券
            let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/coupon`
            let httpMethod = 'post'
            // 編輯優惠券
            if (!this.isNew) {
                api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
                httpMethod = 'put'
            }
            this.isLoading = true
            this.$http[httpMethod](api, { data: this.tempCoupon })
                .then((res) => {
                    if (res.data.success) {
                        this.emitter.emit('push-message', {
                            style: 'primary',
                            title: `更新成功`,
                        })
                    } else {
                        const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
                        this.emitter.emit('push-message', {
                            style: 'danger',
                            title: '更新失敗',
                            content: message.join('、')
                        })
                    }
                    this.$refs.couponModal.hideModal()
                    this.getCoupons()
                })
        },
        delCoupon() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
            this.isLoading = true
            this.$http.delete(api).then((res) => {
                if (res.data.success) {
                    this.getCoupons()
                    this.emitter.emit('push-message', {
                        style: 'success',
                        title: `成功刪除優惠券`,
                    })
                } else {
                    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
                    this.emitter.emit('push-message', {
                        style: 'danger',
                        title: '刪除優惠券失敗',
                        content: message.join('、')
                    })
                    this.isLoading = false
                }
                this.$refs.delModal.hideModal()
                this.getCoupons()
            })
        },
    },
    created() {
        this.getCoupons()
    },
}
</script>