<template>
  <LazyHydrate when-visible id="partner">
    <div
      class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
      style="background: #e8e8e8"
    >
      <div class="w-full text-center md:text-center lg:text-left">
        <div class="mx-2 md:mx-0">
          <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
            {{ title }}
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

      <div
        v-for="partner in partners"
        :key="partner.id"
        class="w-full first:mt-14 mt-2"
      >
        <h3 class="px-4 mb-3 text-sm font-semibold uppercase text-primary">
          {{ partner.name }}
        </h3>

        <div
          class="flex-row justify-start items-center flex-wrap mx-auto flex lg:space-x-4"
        >
          <figure
            v-for="image in partner.columns"
            :key="image.id"
            class="image is-16by9"
          >
            <g-image
              :src="image.image.file.url"
              class="w-40 h-auto"
              :alt="image.title"
              width="160"
              height="96"
            />
          </figure>
        </div>
      </div>
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
  computed: {
    title() {
      return this.data.name;
    },
    partners() {
      return this.data.columns[0].columns;
    },
  },
};
</script>