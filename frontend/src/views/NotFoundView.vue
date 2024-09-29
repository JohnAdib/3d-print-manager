<!-- source https://www.creative-tim.com/twcomponents/component/404 -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="isolate flex relative items-center justify-center h-full bg-sky-600 overflow-hidden"
  >
    <div class="container z-20">
      <div class="row">
        <div class="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
          <div class="relative">
            <h1
              class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold animate-pulse"
            >
              <span>4</span><span>0</span><span>4</span>
            </h1>
            <span
              class="absolute top-3 -ml-12 text-gray-300 font-semibold animate-bounce"
              >Oops!</span
            >
          </div>
          <h5 class="text-gray-300 font-semibold -mr-10">Page not found</h5>
          <p class="text-gray-100 mt-2 mb-10">
            we are sorry, but the page you requested was not found
          </p>
          <RouterLink
            to="/"
            class="bg-sky-900 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg cursor-pointer transition"
          >
            Got to Home
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="error-bg absolute inset-0 bg-fixed bg-cover bg-bottom"></div>
  </div>
</template>

<style scoped>
.error-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
}
.tracking-tighter-less {
  letter-spacing: -0.75rem;
}
.text-shadow {
  text-shadow: -8px 0 0 rgb(16 120 170);
}
</style>
