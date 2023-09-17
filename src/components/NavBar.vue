<script type="module">
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    }
}
</script>
<template>
    <div class="container px-0">
        <div class="row py-2">
            <div class="col-6">
                <RouterLink to="/"><img src="../assets/images/d’Perfume.png" alt="LOGO"></RouterLink>
            </div>
            <div class="col-6">
                <ul class="h-100 d-flex justify-content-end align-items-center mb-0">
                    <li>
                        <RouterLink to="/">
                            <a href="#" class="d-flex link-secondary me-3">
                                <i class="bi bi-shop me-1"></i>
                                <p class="mb-0">Product</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li class="d-flex">
                        <a href="#" class="d-flex link-secondary ms-3 me-3">
                            <i class="bi bi-person-fill me-1"></i>
                            <p class="mb-0">log in</p>
                        </a>
                    </li>
                    <li class="d-flex">
                        <a href="#" class="d-flex link-secondary ms-3 me-3">
                            <i class="bi bi-heart-fill me-1"></i>
                            <p class="mb-0">Wishlist</p>
                        </a>
                    </li>
                    <li class="d-flex">
                        <a href="#" class="d-flex link-secondary ms-3">
                            <i class="bi bi-cart2 me-1"></i>
                            <p class="mb-0">Cart</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>