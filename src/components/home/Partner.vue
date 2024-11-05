<template>
  <LazyHydrate when-visible id="partner">
    <div
      class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
      style="background: #e8e8e8"
    >
      <div class="w-full text-center md:text-center lg:text-left">
        <div class="mx-2 md:mx-0">
          <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
            {{ data.name }}
          </h3>
          <div class="-mt-3">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
          </div>
        </div>
      </div>

      <section class="py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <figure
              v-for="partner in data.columns"
              :key="partner.id"
              class="bg-white image is-16by9 flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <g-image
                :src="partner.image.file.url"
                class="w-40 h-auto m-auto"
                :alt="partner.image.title"
                width="160"
                height="96"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    LazyHydrate,
  },
};
</script>