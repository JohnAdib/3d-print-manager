<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Define the header links
const headerLinks = [
  { href: '/', label: 'Homepage' },
  { href: '/order', label: 'Order' },
  { href: '/about', label: 'About' }
]
</script>

<template>
  <header
    class="sticky top-0 border-b border-slate-200 px-4 md:px-8 select-none overflow-hidden flex-none bg-slate-50/30 backdrop-blur-sm"
  >
    <div
      class="w-full mx-auto flex flex-wrap items-center justify-between h-16"
    >
      <RouterLink
        to="/"
        class="text-2xl font-bold text-slate-900 flex items-center gap-2"
      >
        <img src="@/assets/logo.png" alt="3D Print Manager" class="h-12 w-12" />
        <h1 class="text-lg font-bold text-sky-800 hidden sm:block">
          3D Print Manager
        </h1>
      </RouterLink>

      <nav class="flex gap-2 sm:gap-8">
        <RouterLink
          v-for="link in headerLinks"
          :key="link.href"
          :to="link.href"
          :ariaLabel="link.label"
          class="transition hover:text-sky-700"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
