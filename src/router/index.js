import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: () => import('../views/UserBoard.vue'),
      children: [
        {
          path: 'D-Perfume',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductsUser.vue')
        },
        {
          path: 'product/:productId',
          component: () => import('../views/ProductInfo.vue')
        },
        {
          path: 'login',
          component: () => import('../views/LogIn.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/CartUser.vue')
        },
        {
          path: 'order/:orderId',
          component: () => import('../views/OrderInfo.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('../views/DashBoard.vue'),
      children: [
        {
          path: 'productlist',
          component: () => import('../views/ProductsList.vue')
        },
        {
          path: 'orderlist',
          component: () => import('../views/OrderList.vue')
        },
        {
          path: 'couponlist',
          component: () => import('../views/CouponList.vue')
        }
      ]
    }
  ]
})

export default router
