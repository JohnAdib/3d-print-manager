<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div
      class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      aria-hidden="true"
    >
      <div
        class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="
          clip-path: polygon(
            63.1% 29.6%,
            100% 17.2%,
            76.7% 3.1%,
            48.4% 0.1%,
            44.6% 4.8%,
            54.5% 25.4%,
            59.8% 49.1%,
            55.3% 57.9%,
            44.5% 57.3%,
            27.8% 48%,
            35.1% 81.6%,
            0% 97.8%,
            39.3% 100%,
            35.3% 81.5%,
            97.2% 52.8%,
            63.1% 29.6%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="text-lg font-semibold leading-8 tracking-tight text-sky-600">
          How it works?
        </p>
        <h1
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          About 3D Print Manager
        </h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          The <strong>3D Print Manager</strong> is a user friendly MVP for
          uploading 3D printing part files, specifically designed for handling
          <strong>STL</strong> files. Built with cutting-edge technologies such
          as <strong>Laravel</strong> and <strong>Vue.js</strong>, this project
          offers a smooth user experience from file selection to 3D previews and
          file submission.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
      >
        <div class="relative lg:order-last lg:col-span-5">
          <svg
            class="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
            />
          </svg>

          <figure class="border-l border-sky-600 pl-8">
            <blockquote class="text-xl leading-8 tracking-tight text-gray-900">
              <p class="font-semibold mb-4">
                Working on this project was a lot of fun. lights, camera, action
                with Three.js! Tackling all sorts of interesting challenges
                along the way made it even better. ”
              </p>
              <p class="text-base">
                Over the weekend, my car decided it needed some extra attention,
                and thanks to AA, I got a bonus adventure! Leaving this little
                note here so future me remembers the journey, both on the road
                and in the code. Hope you like it!
              </p>
            </blockquote>
            <figcaption>
              <a
                class="mt-8 flex gap-x-4 items-center select-none"
                href="https://mradib.com"
                target="_blank"
              >
                <img
                  src="https://mradib.com/email/mradib-avatar.jpg"
                  alt=""
                  class="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div class="text-sm leading-5">
                  <div class="font-semibold text-gray-900">John Adib</div>
                  <div class="text-gray-600">@mradib</div>
                </div>
              </a>
            </figcaption>
          </figure>
        </div>

        <div class="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <CloudArrowUpIcon
                class="mt-1 h-5 w-5 flex-none text-sky-600"
                aria-hidden="true"
              />
              <span
                ><strong class="font-semibold text-gray-900"
                  >Push to deploy.</strong
                >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.</span
              >
            </li>
            <li class="flex gap-x-3">
              <LockClosedIcon
                class="mt-1 h-5 w-5 flex-none text-sky-600"
                aria-hidden="true"
              />
              <span
                ><strong class="font-semibold text-gray-900"
                  >SSL certificates.</strong
                >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.</span
              >
            </li>
            <li class="flex gap-x-3">
              <ServerIcon
                class="mt-1 h-5 w-5 flex-none text-sky-600"
                aria-hidden="true"
              />
              <span
                ><strong class="font-semibold text-gray-900"
                  >Database backups.</strong
                >
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.</span
              >
            </li>
          </ul>
          <p class="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>

          <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            UI Flow
          </h2>
          <div class="space-y-4 text-gray-700 leading-relaxed mt-4">
            <div>
              <h3 class="text-xl font-semibold text-slate-800 mt-4">
                1. File Selection
              </h3>
              <p>
                Users can select multiple <strong>STL</strong> files using the
                upload form. A list of the selected files is displayed,
                including file names and a file validation step to ensure the
                correct format is uploaded.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-slate-800 mt-4">
                2. File Preview
              </h3>
              <p>
                Each <strong>STL</strong> file is rendered in a real-time 3D
                viewer using <strong>Three.js</strong>, allowing users to rotate
                and zoom into their models for better visualization.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-slate-800 mt-4">
                3. File Management
              </h3>
              <p>
                If necessary, users can delete files from the selection list,
                providing them with the flexibility to modify their selections
                before submitting the files to the backend.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-slate-800 mt-4">
                4. File Submission
              </h3>
              <p>
                Once the user is satisfied with the files, they can submit the
                form, which will send the files to the backend (Laravel).
                Feedback in the form of success or error messages is displayed
                after submission.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-slate-800 mt-4">
                5. UI Reset
              </h3>
              <p>
                After successful submission, the user interface resets, making
                the tool ready for a new batch of file uploads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from '@heroicons/vue/20/solid'
</script>
