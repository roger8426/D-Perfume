<script>
//import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar></NavBar>
  <div class="bg-home text-light">
    <div class="container h-100 px-0">
      <div class="row h-100 justify-content-end">
        <div class="col-5 h-100 px-0 d-flex flex-column justify-content-center">
          <h1 class="mb-0 fs-1 fw-bold">Perfume your day</h1>
          <p class="fs-3">A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that
            according to the person who wears it.</p>
          <a href="#" class="btn w-75 btn-outline-light fs-2 rounded-pill mt-3">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container px-0 my-6">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-center">
        <h2 class="mb-0 mx-110 fw-bold">Gabrielle CHANEL</h2>
        <p class="mb-0 mx-110 fs-4">全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
        </p>
        <a href="#" class="link-primary mx-110 mt-3 fw-bold">查看更多</a>
      </div>
      <div class="col-6 px-0">
        <img src="../assets/images/index2.jpg" class="w-100 home-img" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 px-0">
        <img src="../assets/images/index3.png" class="w-100 home-img" alt="">
      </div>
      <div class="col-6 d-flex flex-column justify-content-center">
        <h2 class="mb-0 mx-110 fw-bold">Five O’clock Au Gingembre</h2>
        <p class="mb-0 mx-110 fs-4">生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
        </p>
        <a href="#" class="link-primary mx-110 mt-3 fw-bold">查看更多</a>
      </div>
    </div>
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-center">
        <h2 class="mb-0 mx-110 fw-bold">CHANEL N°5</h2>
        <p class="mb-0 mx-110 fs-4">N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。</p>
        <a href="#" class="link-primary mx-110 mt-3 fw-bold">查看更多</a>
      </div>
      <div class="col-6 px-0">
        <img src="../assets/images/index4.jpg" class="w-100 home-img" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 px-0">
        <img src="../assets/images/index5.jpg" class="w-100 home-img-l" alt="">
      </div>
      <div class="col-6 px-0 d-flex flex-column justify-content-center">
        <ol class="px-0">
          <li>
            <h3 class="fs-3 fw-bold mx-110 mb-1">1.<br>Levels of Preventive Maintenance Compliance</h3>
            <p class="mb-5 mx-110">The core idea of preventative maintenance is the performance of proactive actions
              against unscheduled downtime in order to identify potential defects before they evolve into something
              more severe.</p>
          </li>
          <li>
            <h3 class="fs-3 fw-bold mx-110 my-1">2.<br>Percentage of Planned Maintenance</h3>
            <p class="mb-0 mb-5 mx-110">The planned maintenance percentage is the total planned maintenance time in
              your
              CMMS software over a date range over the total number of hours of a service performed by the
              technicians.</p>
          </li>
          <li>
            <h3 class="fs-3 fw-bold mx-110 my-1">3.<br>Critical percentage of planned maintenance</h3>
            <p class="mb-0 mx-110">Calculating the critical percentage of planned maintenance will help you prioritize
              the most important operations that should be performed immediately.</p>
          </li>
        </ol>
        <a href="#" class="btn btn-outline-dark rounded-pill fs-4 mt-6 mx-110 py-3">Plan a free online training</a>
      </div>
    </div>
  </div>
  <div class="bg-success py-4">
    <div class="container px-0 py-3 scroll">
      <div class="row">
        <div class="col-4">
          <img src="../assets/images/index6.jpg" class="w-100" alt="product">
          <h4 class="mb-0 fw-bold">Poppy & Barley</h4>
          <p class="mb-3">Jo Malone</p>
          <p>NT$1,380</p>
        </div>
        <div class="col-4">
          <img src="../assets/images/index7.jpg" class="w-100" alt="product">
          <h4 class="mb-0 fw-bold">Body Wash</h4>
          <p class="mb-3">Curology</p>
          <p>NT$1,580</p>
        </div>
        <div class="col-4">
          <img src="../assets/images/index8.jpg" class="w-100" alt="product">
          <h4 class="mb-0 fw-bold">Apple Cider Vinegar Capsule</h4>
          <p class="mb-3">Tonik</p>
          <p>NT$1,580</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container px-0 py-6">
    <div class="row">
      <div class="col-8">
        <img src="../assets/images/index9.jpg" class="w-100" alt="perfume">
      </div>
      <div class="col-4 d-flex flex-column justify-content-center">
        <h2 class="mb-0">Bottle-Recycling</h2>
        <h3 class="fs-4">Recycle your used empty bottles and be rewarded!</h3>
        <p class="my-3">For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling
          Campaign and
          planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over
          800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better
          environment.</p>
        <a href="#" class="link-primary fw-bold">查看更多</a>
      </div>
    </div>
  </div>
</template>