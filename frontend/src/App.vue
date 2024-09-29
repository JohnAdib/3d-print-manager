<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/layout/PageHeader.vue'
import PageFooter from '@/components/layout/PageFooter.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <PageHeader />
    <main class="grow">
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>
