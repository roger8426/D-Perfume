<template>
    <div class="modal" ref="modal">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content border-0">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <span>商品編輯</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mb-3">
                                <label for="image" class="form-label">輸入圖片網址</label>
                                <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                                    v-model="tempProduct.imgUrl">
                            </div>
                            <div class="mb-3">
                                <label for="customFile" class="form-label">或 上傳圖片
                                    <i class="fas fa-spinner fa-spin"></i>
                                </label>
                                <input type="file" id="customFile" class="form-control" ref="uploadImg" @change="uploadImg">
                            </div>
                            <div class="w-100 text-center">
                                <div class="spinner-border spinner-border text-primary mt-1 ms-1" role="status"
                                v-if="this.isLoading">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" v-else-if="!this.isLoading">
                            </div>
                            
                            
                        </div>
                        <div class="col-sm-8">
                            <div class="mb-3">
                                <label for="title" class="form-label">標題</label>
                                <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                                    v-model="tempProduct.title">
                            </div>
                            <div class="row gx-2">
                                <div class="mb-3 col-md-6">
                                    <label for="category" class="form-label">品牌</label>
                                    <select name="brand" class="form-control" id="category" required
                                        v-model="tempProduct.category">
                                        <option value="CHANEL" selected>CHANEL</option>
                                        <option value="Jo Malone">Jo Malone</option>
                                        <option value="Curology">Curology</option>
                                        <option value="Dior">Dior</option>
                                        <option value="Chloe">Chloe</option>
                                        <option value="ZARA">ZARA</option>
                                        <option value="TONIK">TONIK</option>
                                    </select>
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="price" class="form-label">單位</label>
                                    <input type="text" class="form-control" id="unit" placeholder="請輸入單位"
                                        v-model="tempProduct.unit">
                                </div>
                            </div>

                            <div class="row gx-2">
                                <div class="mb-3 col-md-6">
                                    <label for="origin_price" class="form-label">原價</label>
                                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                        v-model.number="tempProduct.origin_price">
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="price" class="form-label">售價</label>
                                    <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                                        v-model.number="tempProduct.price">
                                </div>
                            </div>
                            <hr>

                            <div class="mb-3">
                                <label for="description" class="form-label">產品描述</label>
                                <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                                    v-model="tempProduct.description"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label">說明內容</label>
                                <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                    v-model="tempProduct.content"></textarea>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                                        id="is_enabled" v-model="tempProduct.is_enabled">
                                    <label class="form-check-label" for="is_enabled">
                                        是否啟用
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消
                    </button>
                    <button type="button" class="btn btn-primary" :disabled="isLoading"
                        @click="$emit('update-product', tempProduct)">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
    props: {
        product: {
            type: Object,
            default() { return {} }
        }
    },
    data() {
        return {
            modal: {},
            tempProduct: {},
            isLoading: false
        }
    },
    methods: {
        showModal() { this.modal.show() },
        hideModal() { this.modal.hide() },
        uploadImg() {
            this.isLoading = true
            const img = this.$refs.uploadImg.files[0]
            const formData = new FormData()
            formData.append('file-to-upload', img)
            const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/upload`
            this.$http.post(url, formData).then((res) => {
                if (res.data.success) {
                    this.tempProduct.imageUrl = res.data.imageUrl
                    this.isLoading = false
                }
            })
        }
    },
    watch: {
        product() {
            this.tempProduct = this.product
        }
    },
    mounted() {
        this.modal = new Modal(this.$refs.modal)
    }
}
</script>