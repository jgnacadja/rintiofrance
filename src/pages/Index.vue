<template>
  <Layout>
    <LazyHydrate when-idle>
      <Homeslider :slides="$page.page.sections[0].columns" />
    </LazyHydrate>

    <div v-for="(key, index) in hydratationKeys" :key="key">
      <component :is="key" :data="$page.page.sections[index + 1]" />
    </div>
  </Layout>
</template>

<page-query>
query {
  page: contentfulPage(path: "Acceuil France") {
    path
    seo {
      id
      title
      date
      name
      description
      keywords
      no_index
      no_follow
    }
    sections {
      id
      title
      date
      name
      columns {
        ... on ContentfulComponentImage {
          id
          title
          name
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulComponentHero {
          id
          title
          name
          image {
            file {
              url
            }
          }
          text
          ctaText
          ctaLink
        }
        ... on ContentfulComponentText {
          id
          title
          text
        }
        ... on ContentfulComponentSection {
          id
          title
          name
          columns {
            ... on ContentfulComponentImage {
              id
              title
              name
              image {
                file {
                  url
                }
              }
            }
            ... on ContentfulComponentText {
              id
              title
              text
            }
            ... on ContentfulPost {
              id
              title
              seoTitle
              path
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
        ... on ContentfulComponentButton {
              id
              title
              ctaText
              ctaLink
            }
      }
    }
  }
}
</page-query>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Homeslider from "~/components/home/Homeslider.vue";
import About from "~/components/home/About.vue";
import Offer from "~/components/home/Offer.vue";
import Partner from "~/components/home/Partner.vue";

export default {
  components: {
    LazyHydrate,
    Homeslider,
    About,
    Offer,
    Partner,
  },
  metaInfo() {
    return {
      title: this.$page.page.seo.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.page.description,
        },
        {
          key: "keywords",
          name: "keywords",
          content: this.$page.page.seo.keywords,
        },
      ],
    };
  },
  computed: {
    hydratationKeys() {
      return ["about", "offer", "partner"];
    },
  },
};
</script>
