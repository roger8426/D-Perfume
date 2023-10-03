<template>
    <div class="bg-scribe w-100 d-flex align-items-end">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <h2 class="text-secondary mb-1">記得<br>訂閱以獲取更多資訊！</h2>
                    <form action="" class="d-flex mt-3" @submit.prevent="getCoupon" v-if="!email">
                        <label for="scrEmail"></label>
                        <input type="email" id="scrEmail" class="form-control border-primary rounded-0 rounded-start py-3"
                            placeholder="Your email address">
                        <button type="submit" class="btn btn-primary p-0 rounded-0 rounded-end py-3">Subscribe</button>
                    </form>
                    <h5 v-else>訂閱成功，恭喜您獲得專屬優惠碼<br><span class="text-primary fs-2">subdiscount</span></h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    },
    methods: {
        getCoupon(event) {
            this.email = event.target[0].value
        }
    },
}
</script>