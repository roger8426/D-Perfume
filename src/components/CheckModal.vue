<template>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" ref="modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">訂單列表</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pb-0">
                    <div class="row justify-content-center">
                        <v-form class="col" @submit.prevent="createOrder" v-slot="{ errors }">
                            <table class="table align-middle">
                                <thead>
                                    <th class="ps-2">品名</th>
                                    <th>數量</th>
                                    <th class="text-end pe-2">單價</th>
                                </thead>
                                <tbody>
                                    <tr v-for="item in order.carts" :key="item.id">
                                        <td>{{ item.product.title }}</td>
                                        <td>
                                            {{ `${item.qty} / ${item.product.unit}` }}
                                        </td>
                                        <td class="text-end">
                                            {{ $filters.currency(item.product.price) }}
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="2" class="text-end">總計</td>
                                        <td class="text-end">{{ $filters.currency(order.final_total) }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <v-field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email"
                                    v-model="form.user.email" rules="email|required"
                                    :class="{ 'is-invalid': errors['email'] }"></v-field>
                                <error-message name="email" class="invalid-feedback"></error-message>
                            </div>

                            <div class="mb-3">
                                <label for="name" class="form-label">收件人姓名</label>
                                <v-field id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名"
                                    v-model="form.user.name" rules="required" :class="{ 'is-invalid': errors['姓名'] }"></v-field>
                                <error-message name="姓名" class="invalid-feedback"></error-message>
                            </div>
                            <div class="mb-3">
                                <label for="tel" class="form-label">收件人電話</label>
                                <v-field id="tel" name="電話" type="tel" class="form-control" placeholder="請輸入電話"
                                    v-model="form.user.tel" :class="{ 'is-invalid': errors['電話'] }"
                                    :rules="isPhone"></v-field>
                                    <error-message name="電話" class="invalid-feedback"></error-message>
                            </div>

                            <div class="mb-3">
                                <label for="address" class="form-label">收件人地址</label>
                                <v-field id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址"
                                    v-model="form.user.address" rules="required" :class="{ 'is-invalid': errors['地址'] }"></v-field>
                                    <error-message name="地址" class="invalid-feedback"></error-message>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">留言</label>
                                <textarea name="" id="message" class="form-control" cols="30" rows="10"
                                    v-model="form.message"></textarea>
                            </div>
                            <div class="modal-footer border-top-0 pt-0">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                <button class="btn btn-primary">送出訂單</button>
                            </div>
                        </v-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
    name: 'checkModal',
    props: ['order'],
    data() {
        return {
            modal: {},
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: ''
                },
                message: ''
            }
        };
    },
    methods: {
        showModal() { this.modal.show() },
        hideModal() { this.modal.hide() },
        createOrder() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`
            const order = this.form
            this.$http.post(api, { data: order }).then((res) => {
                if (res.data.success) {
                    this.$router.push(`/user/order/${res.data.orderId}`)
                    this.hideModal()
                }
            })
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        }
    },
    mounted() {
        this.modal = new Modal(this.$refs.modal)
    }
};
</script>