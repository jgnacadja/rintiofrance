<template>
  <div class="self-center">
    <div class="lg:hidden">
      <button
        class="flex items-center p-3 text-gray-600 navbar-burger"
        @click="openMenu = !openMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="Logo Rintio"
          title="Logo Rintio"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div
      v-bind:class="{
        '-translate-x-0 ease-out': openMenu,
        'translate-x-full ease-in': !openMenu,
      }"
      class="fixed inset-y-0 right-0 z-40 w-full h-full overflow-y-auto transition duration-300 transform bg-white lg:hidden lg:translate-x-0"
    >
      <div class="items-center justify-center mt-6 space-y-2">
        <button
          class="flex items-center p-3 ml-auto text-gray-600 navbar-burger"
          @click="openMenu = !openMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          class="currentColorHome w-full mx-4 mt-2 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4" @click="openMenu = !openMenu">
            <g-link to="/">
              <span class="my-auto font-bold uppercase font-openSans"
                >Accueil</span
              >
            </g-link>
          </div>
        </div>

        <div
          class="currentColorAbout w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4" @click="openMenu = !openMenu">
            <g-link to="/about">
              <span class="my-auto font-bold uppercase font-openSans">
                Qui-sommes-nous
              </span>
            </g-link>
          </div>
        </div>

        <div
          class="currentColorAbout w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4" @click="openMenu = !openMenu">
            <g-link to="/#offer">
              <span class="my-auto font-bold uppercase font-openSans">
                Nos offres
              </span>
            </g-link>
          </div>
        </div>

        <div
          class="currentColorOffer w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4" @click="openMenu = !openMenu">
            <g-link to="/#partner">
              <span class="my-auto font-bold uppercase font-openSans">
                Nos clients</span
              >
            </g-link>
          </div>
        </div>

        <div class="text-center">
          <div class="h-full pt-2 mx-2" @click="openMenu = !openMenu">
            <g-link to="/#contactez_nous">
              <span
                type="submit"
                class="font-bold my-auto p-4 text-white rounded text-sm bg-secondary rounded-sm hover:bg-primary focus:outline-none uppercase"
              >
                Nous contactez
              </span>
            </g-link>
          </div>
        </div>
      </div>
      <div class="absolute flex pl-3 bottom-5">
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
          target="_blank"
          rel="noopener"
        >
          <em class="fab fa-facebook-f"></em>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://www.linkedin.com/company/rintio/"
          target="_blank"
          rel="noopener"
        >
          <em class="relative fab fa-linkedin-in"></em>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://twitter.com/RintioGroup/"
          target="_blank"
          rel="noopener"
        >
          <em class="relative fab fa-twitter"></em>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://twitter.com/RintioGroup/"
          target="_blank"
          rel="noopener"
        >
          <em class="relative fab fa-instagram"></em>
        </a>
      </div>
    </div>

    <nav class="hidden h-24 px-10 lg:flex">
      <div
        class="currentColorHome w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/">
            <span class="my-auto font-bold uppercase font-openSans"
              >Acceuil</span
            >
          </g-link>
        </div>
      </div>

      <div
        class="currentColorAbout w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/#about">
            <span class="my-auto font-bold uppercase font-openSans"
              >A propos</span
            >
          </g-link>
        </div>
      </div>

      <div
        class="currentColorOffer w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/#offer">
            <span class="my-auto font-bold uppercase font-openSans"
              >Nos offres</span
            >
          </g-link>
        </div>
      </div>

      <div
        class="currentColorBlog w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/#partner">
            <span class="my-auto font-bold uppercase font-openSans"
              >Nos clients</span
            >
          </g-link>
        </div>
      </div>

      <div class="text-center">
        <div class="h-full pt-6 mx-2">
          <g-link to="/#contactez_nous">
            <span
              type="submit"
              class="font-bold my-auto p-4 text-white rounded text-sm bg-secondary rounded-sm hover:bg-primary focus:outline-none uppercase"
            >
              Nous contactez
            </span>
          </g-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    //require our external library and load it in window
    // eslint-disable-next-line no-undef
    window.$ = require("jquery");
    this.setActive(this.$router.currentRoute.path);
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    setActive: function (route) {
      switch (route) {
        case "/":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass(
            "border-secondary text-secondary"
          );
          // eslint-disable-next-line no-undef
          $("#offer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/a-propos":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").removeClass(
            "border-secondary text-secondary"
          );
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/offres":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass(
            "border-secondary text-secondary"
          );
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/blog":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass(
            "border-secondary text-secondary"
          );
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").removeClass(
            "border-secondary text-secondary"
          );
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").addClass("border-secondary text-secondary");

          break;
      }
    },
  },
};
</script>
