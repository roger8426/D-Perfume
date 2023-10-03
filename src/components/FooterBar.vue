<template>
    <div class="bg-primary py-4">
        <div class="container-xxl">
            <div class="row text-light">
                <div class="col d-flex align-items-center justify-content-center">
                    <RouterLink to="/user/D-Perfume" class="me-3">
                        <img src="../assets/images/d’Perfumewhite.png" alt="LOGO">
                    </RouterLink>
                    <p class="fs-6 mb-0 ms-1">© 2020. All Rights Reserved.</p>
                </div>
                <div class="col d-sm-none d-md-block">
                    <ul class="mb-0 h-100 d-flex justify-content-end align-items-center">
                        <li>
                            <RouterLink to="/user/products">
                                <a href="#" class="btn btn-primary fs-4 me-4">Product</a>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/user/login">
                                <a href="#" class="btn btn-primary fs-4 ms-1">Dev Login</a>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>