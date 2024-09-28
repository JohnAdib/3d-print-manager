<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main class="grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
