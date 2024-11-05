<template>
  <LazyHydrate when-visible id="offer">
    <div
      v-bind:style="[
        {
          backgroundImage: 'url(' + cover.image.file.url + ')',
        },
      ]"
      class="px-4 md:px-16 py-6 md:py-24 xl:px-12 xl:py-16 2xl:px-32 2xl:py-24"
    >
      <div
        class="w-full h-full col-span-1 row-span-4 md:row-span-6 md:col-span-4 lg:col-span-1 lg:row-span-2"
      >
        <div>
          <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
            {{ title }}
          </h3>
          <!-- Title Dot -->
          <div class="-mt-3">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
          </div>
        </div>
        <div class="pt-6">
          <h2
            class="my-3 text-2xl font-extrabold md:text-5xl text-primary"
            v-html="content.title"
          ></h2>

          <div
            class="my-3 font-light"
            v-html="richtextToHTML(content.text)"
          ></div>
          <div class="mt-4 w-full justify-end hidden md:block">
            <g-link :to="button.ctaLink">
              <button
                v-if="button.ctaText"
                type="submit"
                class="flex ml-auto px-6 py-2 text-sm text-white uppercase rounded-sm md:py-4 bg-secondary hover:bg-primary"
              >
                {{ button.ctaText }}
              </button>
            </g-link>
          </div>
        </div>
      </div>

      <div
        class="mt-14 grid md:grid-cols-9 lg:grid-cols-4 gap-4 md:grid-flow-row lg:grid-flow-rows"
      >
        <div
          v-for="(edge, index) in $static.offers?.belongsTo?.edges"
          :key="edge.node.id"
          :class="{
            'row-span-6 col-span-3 md:col-span-6 lg:col-span-2 lg:row-span-1':
              index === 0,
            'col-span-3 md:row-span-3 lg:col-span-1 lg:row-span-1': index > 0,
          }"
        >
          <div
            class="relative bg-center bg-no-repeat bg-cover shadow-lg group md:h-full"
            v-bind:style="[
              {
                backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
              },
            ]"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-80"></div>
              <div class="w-full absolute bottom-0 px-2 pb-4">
                <div class="px-8 pl-0">
                  <div
                    class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
                  >
                    {{ edge.node.title }}
                  </div>
                  <div
                    class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                    v-html="richtextToHTML(edge.node.metaDescription)"
                  ></div>
                  <div
                    class="text-white tracking-wider leading-relaxed font-roboto text-xs"
                    v-html="edge.node.excerpt"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 w-full justify-end md:hidden">
        <g-link :to="button.ctaLink">
          <button
            v-if="button.ctaText"
            type="submit"
            class="flex ml-auto px-6 py-2 text-sm text-white uppercase rounded-sm md:py-4 bg-secondary hover:bg-primary"
          >
            {{ button.ctaText }}
          </button>
        </g-link>
      </div>

      <!-- <div class="flex justify-end items-center space-x-4 pl-auto px-4">
      <p class="pt-6">Voulez-vous nous rejoindre ?</p>
      <g-link to="/postuler"
        class="max-h-12 font-medium  w-fit text-sm text-white uppercase bg-primary rounded-sm hover:bg-secondary px-8 py-2 md:py-4">
        Je postule</g-link>
    </div> -->
    </div>
  </LazyHydrate>
</template>

<static-query>
query {
  offers: contentfulCategory(path: "offres-france") {
    id
    title
    path
    belongsTo(order: ASC) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            excerpt
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
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
  computed: {
    title() {
      return this.data.name;
    },
    cover() {
      return this.data.columns[0];
    },
    content() {
      return this.data.columns[1];
    },
    button() {
      return this.data.columns[2];
    },
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>

<style scoped>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation */
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}

.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>