<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="container">
        <div class="text-end">
            <button class="btn btn-primary my-4" type="button" @click="openModal(true)">新增產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">品牌</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="100">是否啟用</th>
                    <th width="200">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in products" :key="key">
                    <td>{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-right">
                        {{ $filters.currency(item.origin_price) }}
                    </td>
                    <td class="text-right">
                        {{ $filters.currency(item.price) }}
                    </td>
                    <td>
                        <span class="text-success" v-if="item.is_enabled">啟用</span>
                        <span class="text-info" v-else>未啟用</span>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
                            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <Page :pages="pagination" @emit-page="getProducts"></Page>
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import DelModal from '../components/DeleteModal.vue'
import ProductModal from '../components/ProductModal.vue'
import Page from '../components/PageComponent.vue'

export default {
    data() {
        return {
            products: [],
            pagination: {},
            tempProduct: {},
            isNew: false,
            isLoading: false
        }
    },
    components: {
        ProductModal,
        DelModal,
        Page
    },
    inject: ['emitter'],
    methods: {
        getProducts(page = 1) {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products/?page=${page}`
            this.isLoading = true
            this.$http.get(api).then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.products = res.data.products
                        this.pagination = res.data.pagination
                        console.log(this.pagination);
                    }
                })
        },
        openModal(isNew, item) {
            if (isNew) {
                this.tempProduct = {}
                this.tempProduct.unit = '瓶'
            } else {
                this.tempProduct = { ...item }
            }
            this.isNew = isNew
            this.$refs.productModal.showModal()
        },
        openDelModal(item) {
            this.tempProduct = { ...item }
            this.$refs.delModal.showModal()
        },
        updateProduct(item) {
            this.tempProduct = item
            // 新增商品
            let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product`
            let httpMethod = 'post'
            // 編輯商品
            if (!this.isNew) {
                api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${item.id}`
                httpMethod = 'put'
            }
            this.isLoading = true
            this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
                    if (res.data.success) {
                        this.emitter.emit('push-message', {
                            style: 'success',
                            title: '更新成功'
                        })
                    } else {
                        this.emitter.emit('push-message', {
                            style: 'danger',
                            title: '更新失敗',
                            content: res.data.message.join('、')
                        })
                    }
                    this.$refs.productModal.hideModal()
                    this.getProducts()
                })
        },
        delProduct() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${this.tempProduct.id}`
            this.isLoading = true
            this.$http.delete(api).then((res) => {
                    if (res.data.success) {
                        this.$refs.delModal.hideModal()
                        this.getProducts()
                    }
                })
        }
    },
    created() {
        this.getProducts()
    }
}
</script>