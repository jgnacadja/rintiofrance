<template>
  <LazyHydrate when-visible id="partner">
    <div
      class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
      style="background: #e8e8e8"
    >
      <div
        class="w-full md:w-full lg:w-1/8 text-center md:text-center lg:text-left"
      >
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
  </LazyHydrate>
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
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
  computed: {
    title() {
      return this.data.name;
    },
    partnerList() {
      return this.$static.partners.edges;
    },
  },
};
</script>