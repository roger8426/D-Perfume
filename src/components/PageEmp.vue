<template>
    <div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-3 mb-6">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous"
                    @click.prevent="switchPage(pages.current_page - 1)" :class="{disabled: !pages.has_pre}">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pages.total_pages" :key="page"
                :class="{active: page === pages.current_page}">
                    <a class="page-link" href="#" @click.prevent="switchPage(page)">
                        {{ page }}
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next"
                    @click.prevent="switchPage(pages.current_page + 1)" :class="{disabled: !pages.has_next}">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    props: ['pages'],
    methods: {
        switchPage(page) {
            this.$emit('emit-page', page)
        }
    }
}
</script>