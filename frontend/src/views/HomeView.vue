<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 sm:px-6 sm:py-12 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16"
      >
        <h2
          class="mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Order high-quality 3D printed parts online
        </h2>
        <p class="mx-auto mt-6 text-lg leading-8 text-gray-300">
          Get 3D printed parts with ease. We handle everything from prototypes
          to large-scale production. Fast, reliable, and delivered to your exact
          specifications. <b>perfect parts, every time.</b>
        </p>
        <div class="mt-10 mb-24 flex items-center gap-x-6 select-none">
          <RouterLink
            to="/order"
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
          >
            Get started
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-sm font-semibold leading-6 text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 text-left"
        >
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <ForwardIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">Rapid Turnaround</dt>
            <dd class="mt-2 leading-7 text-gray-400">
              Experience fast, hassle-free 3D printing with delivery in as
              little as 3 days. We prioritize speed and efficiency, ensuring
              your parts arrive quickly without compromising on quality.
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <ShieldCheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">
              Precision and Durability
            </dt>
            <dd class="mt-2 leading-7 text-gray-400">
              Our 3D printing handles complex geometries with precision. Durable
              and impact-resistant parts are ready for prototypes or end-use
              applications across industries.
            </dd>
          </div>
        </dl>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ForwardIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>
