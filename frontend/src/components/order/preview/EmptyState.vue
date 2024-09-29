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
          <li class="flex items-center">
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>Fast Turnaround:</b> Get your parts in as little as 3 days.
            </p>
          </li>
          <li class="flex items-center">
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>Complex Geometry:</b> Print intricate designs with ease.
            </p>
          </li>
          <li class="flex items-center">
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>Precision:</b> High accuracy with tolerances of +/- 0.127mm.
            </p>
          </li>
          <li class="flex items-center">
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>Industry Expertise:</b> Trusted by aerospace, automotive, and
              more.
            </p>
          </li>
          <li class="flex items-center">
            <CheckCircleIcon class="h-6 w-6 flex-none text-sky-500" />
            <p class="ml-4">
              <b>Wide Material Range:</b> Access top-quality plastic and metal
              options.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    CheckCircleIcon
  }
}
</script>
