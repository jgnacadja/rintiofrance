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
      <g-image
        v-if="partnerList.length > 0"
        :src="partnerList[0].node.file.url"
        class="w-full h-auto"
        alt="Partners"
      />
    </div>
  </div>
</template>

<static-query>
query {
  partners: allContentfulAsset(filter: { title: { eq: "client partenaire" } }) {
    edges {
      node {
        file {
          url
        }
      }
    }
  }
}
</static-query>

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
  computed: {
    partnerList() {
      return this.$static.partners.edges;
    },
  },
};
</script>