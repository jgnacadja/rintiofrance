<template>
  <div
    class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
    style="background: #e8e8e8"
  >
    <div
      class="w-full md:w-full lg:w-1/4 text-center md:text-center lg:text-left"
    >
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
          {{ title }}
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
        </div>
      </div>
      <div class="mx-4 md:mx-0 pt-6">
        <h2
          class="text-2xl md:text-5xl text-primary font-extrabold"
          v-html="content.title"
        ></h2>

        <div
          class="hidden md:block my-3 font-light"
          v-html="richtextToHTML(content.text)"
        ></div>
      </div>
    </div>

    <div
      class="w-full md:w-full lg:w-3/4 flex-row justify-end items-start flex-wrap mx-auto flex lg:space-x-4"
    >
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl p-2 m-2 bg-white text-gray-100 aspect-w-10 aspect-h-5 w-24 sm:w-28 md:w-48 lg:w-48 xl:w-60 h-24 sm:h-28 md:h-48 lg:h-48 xl:h-60 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[0].image.file.url" :alt="partners[0].name" />
        </div>
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-yellow-100 aspect-w-10 aspect-h-5 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[1].image.file.url" :alt="partners[1].name" />
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-indigo-100 aspect-w-10 aspect-h-5 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[2].image.file.url" :alt="partners[2].name" />
        </div>
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-green-100 aspect-w-10 aspect-h-5 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[3].image.file.url" :alt="partners[3].name" />
        </div>
       
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-indigo-100 aspect-w-10 aspect-h-5 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[4].image.file.url" :alt="partners[4].name" />
        </div>
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-green-100 aspect-w-10 aspect-h-5 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[5].image.file.url" :alt="partners[5].name" />
        </div>
       
      </div>
      
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    partners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
