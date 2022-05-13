<template>
  <Layout>
    <LazyHydrate when-idle>
      <Homeslider :slides="$page.page.sections[0].columns" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <About
        :title="$page.page.sections[1].name"
        :swipper="$page.page.sections[1].columns[0]"
        :content="$page.page.sections[1].columns[1]"
        :button="$page.page.sections[1].columns[2]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Offer
        :title="$page.page.sections[2].name"
        :cover="$page.page.sections[2].columns[0]"
        :content="$page.page.sections[2].columns[1]"
        :button="$page.page.sections[2].columns[2]"
      />
    </LazyHydrate> 

    <LazyHydrate when-visible>
      <Partner
        :title="$page.page.sections[4].name"
        :content="$page.page.sections[4].columns[0]"
        :partners="$page.page.sections[4].columns[1].columns"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Blog
        :title="$page.page.sections[5].name"
        :content="$page.page.sections[5].columns[0]"
      />
    </LazyHydrate>  
  </Layout>
</template>

<page-query>
query {
  page: contentfulPage(path: "Acceuil") {
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
import Blog from "~/components/home/Blog.vue"; 

export default {
  components: {
    LazyHydrate,
    Homeslider,
    About,
    Offer, 
    Partner,
    Blog, 
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
};
</script>
