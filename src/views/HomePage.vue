<template>
  <div class="bg-home text-light w-100">
    <div class="container h-100 px-0">
      <div class="row h-100 w-100 justify-content-end">
        <div class="col-md-5 col-sm-12 px-0 d-flex flex-column justify-content-center">
          <h1 class="mb-0 fs-1 fw-bold ">Perfume your day</h1>
          <p class="fs-3">A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that
            according to the person who wears it.</p>
          <router-link to="/user/products" class="w-100">
            <a href="#" class="btn btn-outline-light w-100 fs-2 rounded-pill mt-3">Shop Now</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container-xxl my-md-6 my-sm-5 mx-auto">
    <div class="row d-flex flex-md-row flex-sm-column-reverse mb-sm-4 mb-md-0">
      <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
        <h2 class="mb-0 w-75 mx-auto fw-bold">Gabrielle CHANEL</h2>
        <p class="mb-0 w-75 mx-auto fs-4">全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。
          極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
        </p>
        <router-link to="/user/products" class="w-75 mx-auto">
          查看更多
        </router-link>
      </div>
      <div class="col-md-6 col-sm-12 ps-md-0">
        <img src="../assets/images/index2.jpg" class="w-100 home-img" alt="">
      </div>
    </div>
    <div class="row d-flex flex-md-row flex-sm-column mb-sm-4 mb-md-0">
      <div class="col-md-6 col-sm-12 pe-md-0">
        <img src="../assets/images/index3.png" class="w-100 home-img" alt="">
      </div>
      <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
        <h2 class="mb-0 w-75 mx-auto fw-bold">Five O’clock Au Gingembre</h2>
        <p class="mb-0 w-75 mx-auto fs-4">
          生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
        </p>
        <router-link to="/user/products" class="w-75 mx-auto">
          查看更多
        </router-link>
      </div>
    </div>
    <div class="row d-flex flex-md-row flex-sm-column-reverse mb-sm-4 mb-md-0">
      <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
        <h2 class="mb-0 w-75 mx-auto fw-bold">CHANEL N°5</h2>
        <p class="mb-0 w-75 mx-auto fs-4">N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。</p>
        <router-link to="/user/products" class="w-75 mx-auto">
          查看更多
        </router-link>
      </div>
      <div class="col-md-6 col-sm-12 ps-md-0">
        <img src="../assets/images/index4.jpg" class="w-100 home-img" alt="">
      </div>
    </div>
    <div class="row d-flex flex-md-row flex-sm-column mb-sm-4 mb-md-0">
      <div class="col-md-6 col-sm-12 pe-md-0">
        <img src="../assets/images/index5.jpg" class="w-100 home-img-xl" alt="">
      </div>
      <div class="col-md-6 col-sm-12 px-0 d-flex flex-column justify-content-center">
        <ol class="px-0">
          <li>
            <h3 class="fs-3 fw-bold w-75 mx-auto mb-1">1.<br>Levels of Preventive Maintenance Compliance</h3>
            <p class="mb-5 w-75 mx-auto">The core idea of preventative maintenance is the performance of proactive actions
              against unscheduled downtime in order to identify potential defects before they evolve into something
              more severe.</p>
          </li>
          <li>
            <h3 class="fs-3 fw-bold w-75 mx-auto my-1">2.<br>Percentage of Planned Maintenance</h3>
            <p class="mb-0 mb-5 w-75 mx-auto">The planned maintenance percentage is the total planned maintenance time in
              your
              CMMS software over a date range over the total number of hours of a service performed by the
              technicians.</p>
          </li>
          <li>
            <h3 class="fs-3 fw-bold w-75 mx-auto my-1">3.<br>Critical percentage of planned maintenance</h3>
            <p class="mb-0 w-75 mx-auto">Calculating the critical percentage of planned maintenance will help you
              prioritize
              the most important operations that should be performed immediately.</p>
          </li>
        </ol>
        <button class="btn btn-outline-dark rounded-pill fs-4 mt-6 w-75 mx-auto py-3" @click="scrollBottom">
          Plan a free online training
        </button>
      </div>
    </div>
  </div>
  <div class="bg-info py-4">
    <div class="container-xxl py-3 scroll d-sm-none d-md-block">
      <div class="row">
        <div class="col">
          <router-link to="/user/product/-NfBPt_Wn1mHDs-yGtoK">
            <img src="../assets/images/index6.jpg" class="w-100" alt="product">
          </router-link>
          <h4 class="mb-0 fw-bold">Poppy & Barley</h4>
          <p class="mb-3">Jo Malone</p>
          <p>NT$1,380</p>
        </div>
        <div class="col">
          <router-link to="/user/product/-NfBQaF6RQ6Muk5zu7pB">
            <img src="../assets/images/index7.jpg" class="w-100" alt="product">
          </router-link>
          <h4 class="mb-0 fw-bold">Body Wash</h4>
          <p class="mb-3">Curology</p>
          <p>NT$1,580</p>
        </div>
        <div class="col">
          <router-link to="/user/product/-NfBwUp2U8fWL0g8MzJ-">
            <img src="../assets/images/index8.jpg" class="w-100" alt="product">
          </router-link>
          <h4 class="mb-0 fw-bold">Apple Cider Vinegar Capsule</h4>
          <p class="mb-3">Tonik</p>
          <p>NT$1,580</p>
        </div>
      </div>
    </div>
    <div id="carouselExampleControls" class="carousel slide d-sm-block d-md-none carousel-dark" data-bs-ride="carousel">
      <div class="carousel-inner scroll">
        <div class="carousel-item active">
          <router-link to="/user/product/-NfBPt_Wn1mHDs-yGtoK">
            <img src="../assets/images/index6.jpg" class="d-block w-100" alt="">
          </router-link>
          <div class="ms-2">
            <h4 class="mb-0 fw-bold">Poppy & Barley</h4>
            <p class="mb-3">Jo Malone</p>
            <p>NT$1,380</p>
          </div>
        </div>
        <div class="carousel-item">
          <router-link to="/user/product/-NfBQaF6RQ6Muk5zu7pB">
            <img src="../assets/images/index7.jpg" class="d-block w-100" alt="">
          </router-link>
          <div class="ms-2">
            <h4 class="mb-0 fw-bold">Body Wash</h4>
            <p class="mb-3">Curology</p>
            <p>NT$1,580</p>
          </div>
        </div>
        <div class="carousel-item">
          <router-link to="/user/product/-NfBwUp2U8fWL0g8MzJ-">
            <img src="../assets/images/index8.jpg" class="d-block w-100" alt="">
          </router-link>
          <div class="ms-2">
            <h4 class="mb-0 fw-bold">Apple Cider Vinegar Capsule</h4>
            <p class="mb-3">Tonik</p>
            <p>NT$1,580</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container-xxl py-6">
    <div class="row">
      <div class="col-md-8">
        <img src="../assets/images/index9.jpg" class="w-100" alt="perfume">
      </div>
      <div class="col-md-4 d-flex flex-column justify-content-center">
        <h2 class="mb-0">Bottle-Recycling</h2>
        <h3 class="fs-4">Recycle your used empty bottles and be rewarded!</h3>
        <p class="my-3">For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling
          Campaign and
          planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over
          800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better
          environment.</p>
      </div>
    </div>
  </div>
  <Subscribe></Subscribe>
</template>

<script>
import Subscribe from '../components/SubScribe.vue'

export default {
  components: {
    Subscribe
  },
  methods: {
    scrollBottom() {
      const height = document.body.scrollHeight
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      })
    }
  }
}
</script>