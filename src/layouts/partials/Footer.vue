<template>
  <div>
    <Contact />

    <footer class="bg-primary">
      <div></div>
      <div class="flex-wrap w-full px-4 text-white md:flex lg:flex-nowrap sm:px-0 lg:px-4 md:px-0 md:mx-0 md:text-left">
        <!-- Col-1 -->
        <div class="w-full p-5 sm:px-10 lg:px-20 lg:w-3/12 md:mr-auto">
          <div class="w-10">
            <Logo />
          </div> 
        </div>

        <!-- Col-2 -->
        <!-- <div
          class="hidden w-full p-8 -my-5 md:block sm:p-4 md:p4 lg:p-8 sm:w-3/12 lg:w-3/12 md:m-5"
        >
       
          <div class="mb-6 font-extrabold text-white uppercase font-roboto">
            Produits
          </div>
       
          <div class="-mt-8">
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

          <a
            href="https://coraq.formation.chmp.org"
            class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Coraq Lab - CHMP
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rintio.idermato&hl=fr&gl=US"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Idermato
          </a>
          <a
            href="#"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
          >
            &bull; Duniya Data
          </a>
        </div> -->

        <!-- Col-2 --> 

        <div class="w-full p-5 sm:px-10 lg:px-20 lg:w-3/12">
              <p class="mb-4">Suivez nous sur :</p>
          <div class="flex">
            <a class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
              href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr" target="_blank" rel="noopener">
              <em class="fab fa-facebook-f"></em>
            </a>
            <a class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
              href="https://www.linkedin.com/company/rintio/" target="_blank" rel="noopener">
              <em class="relative fab fa-linkedin-in"></em>
            </a>
            <a class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
              href="https://twitter.com/RintioGroup/" target="_blank" rel="noopener">
              <em class="relative fab fa-twitter"></em>
            </a>
            <a class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
              href="https://twitter.com/RintioGroup/" target="_blank" rel="noopener">
              <em class="relative fab fa-instagram"></em>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="bg-secondary">
        <div class="px-3 py-4 m-auto font-bold text-center text-white">
          Rintio 2022 © Tous droits réservés
        </div>
      </div>
    </footer>
  </div>
</template>

<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>

<script>
  import Logo from "./Logo";
  import Contact from "~/components/Contact.vue";
  import Send from "~/assets/images/icons/send.svg";
  import ChevronUp from "~/assets/images/icons/chevronup.svg";

  export default {
    components: {
      Logo,
      Contact,
      Send,
      ChevronUp,
    },
    data() {
      return {
        openProducts: false,
        openLinks: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
  iframe {
    overflow: hidden;
  }
</style>