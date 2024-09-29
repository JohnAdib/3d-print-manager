<template>
  <div class="mx-auto max-w-7xl">
    <div class="mx-auto max-w-3xl">
      <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
        <p>
          👋 Welcome! Simply drop your files on the page and experience fast,
          easy, and reliable 3D printing with exceptional precision. Here’s why
          our service is trusted across industries:
        </p>
        <ul class="space-y-4">
          <li
            v-for="(item, index) in benefits"
            :key="index"
            class="flex items-center"
          >
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>{{ item.title }}:</b> {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const benefits = [
  {
    title: 'Fast Turnaround',
    description: 'Get your parts in as little as 3 days.'
  },
  {
    title: 'Complex Geometry',
    description: 'Print intricate designs with ease.'
  },
  {
    title: 'Precision',
    description: 'High accuracy with tolerances of +/- 0.127mm.'
  },
  {
    title: 'Industry Expertise',
    description: 'Trusted by aerospace, automotive, and more.'
  },
  {
    title: 'Wide Material Range',
    description: 'Access top-quality plastic and metal options.'
  }
]
</script>
